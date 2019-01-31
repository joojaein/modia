package com.moida.web.controller;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.nio.ByteBuffer;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;
import com.moida.web.controller.member.CrowdController;
import com.moida.web.entity.Member;
import com.moida.web.service.MoidaMemberService;

@Controller
public class MemberController {

	@Autowired
	public JavaMailSender javaMailSender;
	
	@Autowired
	private MoidaMemberService memberService;
	
	@GetMapping("/login")
	public String login() {	
		return "home.login";
	}

	@GetMapping("/join")
	public String join() {
		return "home.join";
	}
	
	@PostMapping("/join")
	@ResponseBody
	public String join(String id, String pwd, String name, String areaSido,
			String email, String birth, int gender, String msg, String img) throws ParseException{
			
				
		String extName = img.substring(img.lastIndexOf("."), img.length());
		img = id+extName;
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
		Date parsed = format.parse(birth);
		PasswordEncoder encoder = new BCryptPasswordEncoder();
		pwd = encoder.encode(pwd);
		Member member = new Member(id, pwd, name, areaSido, email, parsed, gender, msg, img);
		System.out.println("com.moida.web.controller-MemberController - join(...)");

    	return memberService.joinMember(member)+""; 
	}
		
	
	@RequestMapping("/chk-overlap")
	@ResponseBody
	public String chkOverlap(String id) throws FileNotFoundException {
		Member member = memberService.getMember(id);
		if(member==null) {
			return "0";
		}
		return "1";
	}
	
	@RequestMapping("/email-send") 
	@ResponseBody
    public String emailSend(String email) throws MessagingException {  
        
    	String  checkId= UUID.randomUUID().toString();
    	long l = ByteBuffer.wrap(checkId.toString().getBytes()).getLong();
    	checkId= Long.toString(l, Character.MAX_RADIX);
    	
    	StringBuilder html = new StringBuilder();
    	
    	html.append("<!DOCTYPE html>");
    	html.append("<html>");
    	html.append("<head>");
    	html.append("    <meta charset=\"utf-8\" />");
    	html.append("    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">");
    	html.append("    <title>인증 메일</title>");
    	html.append("    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">");
    	html.append("</head>");
    	html.append("<body>");
    	html.append("    <h1>MOIDA 인증을 위한 메일 발송</h1>");
    	html.append("    <section>");
    	html.append("        <h1>"+checkId+"</h1>");
    	html.append("        <div style=\"color:blue\">");
    	html.append("    </section>");
    	html.append("    </div>");
    	html.append("</body>");
    	html.append("</html>");

    	MimeMessage message = javaMailSender.createMimeMessage();
    	MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");
    		
    	ArrayList<String> adminMail = new ArrayList<String>();
		 try{
	            //파일 객체 생성
	            File file = new File("D:\\moida\\email.txt");
	            //입력 스트림 생성
	            FileReader filereader = new FileReader(file);
	            //입력 버퍼 생성
	            BufferedReader bufReader = new BufferedReader(filereader);
	            String line = "";
	            while((line = bufReader.readLine()) != null){
	            	adminMail.add(line);
	            }     
	            bufReader.close();
	        }catch (FileNotFoundException e) {
	        }catch(IOException e){
	        }		
		
    	helper.setFrom(adminMail.get(0));
    	helper.setTo(email);
    	helper.setText(html.toString(), true);
    	helper.setSubject("이메일 검증을 위한 보안 번호");
 
    	javaMailSender.send(message);
    	return checkId;
    }
	
	
	@GetMapping("/idpw")
	public String idpw() {	
		return "home.idpw";
	}	
	
	
	
}
