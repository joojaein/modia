package com.moida.web.controller.admin;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.lang.reflect.Type;
import java.net.HttpURLConnection;
import java.net.URL;
import java.security.Principal;
import java.util.List;

import javax.imageio.ImageIO;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.moida.web.entity.AdminMngCrowdView;
import com.moida.web.entity.AdminMngMemberView;
import com.moida.web.entity.Banner;
import com.moida.web.entity.Member;
import com.moida.web.service.MoidaBannerService;
import com.moida.web.service.MoidaCrowdService;
import com.moida.web.service.MoidaMemberService;

@Controller("adminHome")
@RequestMapping("/admin/")
public class HomeController {
	
	@Autowired
	public MoidaMemberService moidaMemberService;
	@Autowired
	public MoidaCrowdService moidaCrowdService;
	@Autowired
	public MoidaBannerService moidaBannerService;
	
	@RequestMapping("index")
	public String index(Model model, Principal principal) {
		String id = principal.getName();
		Member member = moidaMemberService.getMember(id);
		model.addAttribute("member", member);
		return "admin.index";
	}	

	@RequestMapping("get-crowd-cnt")
	@ResponseBody
	public String getCrowdCnt() {
		Integer crowdCnt = moidaCrowdService.getCrowdCount();
		return crowdCnt+"";
	}
	
	@RequestMapping("get-member-cnt")
	@ResponseBody
	public String getMemberCnt() {
		Integer memberCnt = moidaMemberService.getMemberCount();
		return memberCnt+"";
	}
	
	@RequestMapping("get-crowd-list")
	@ResponseBody
	public String getCrowdList(String query, String updown, int min, int max ) {
		List<AdminMngCrowdView> crowdList = moidaCrowdService.getAdminMngCrowdList(query, updown, min, max);
		Gson gson = new Gson();
		String json = gson.toJson(crowdList);
		return json;
	}
	
	@RequestMapping("get-member-list")
	@ResponseBody
	public String getMemberList(String query, String updown, int min, int max ) {
		List<AdminMngMemberView> memberList = moidaMemberService.getAdminMngMemberList(query, updown, min, max);
		Gson gson = new Gson();
		String json = gson.toJson(memberList);
		return json;
	}
	
	@RequestMapping("del-mng")
	@ResponseBody
	public String deleteManagement(String type, String array) {
		String[] idArray = array.split(","); 
		for (int i = 0; i < idArray.length; i++) {

			if(type.equals("crowd")) {
				moidaCrowdService.deleteCrowd(Integer.parseInt(idArray[i]));
			}
			else if(type.equals("member")) {
				moidaMemberService.deleteMember(idArray[i]);
			}
		}
		return null;
	}
	
	@RequestMapping("edit")
	public String edit(Model model, Principal principal) {
		String id = principal.getName();
		Member member = moidaMemberService.getMember(id);
		model.addAttribute("member", member);
		return "admin.edit";
	}
	
	@RequestMapping("update-msg")
	@ResponseBody
	public String updateMsg(String msg, Principal principal) {
		String id = principal.getName();
		Member member = moidaMemberService.getMember(id);
		member.setMsg(msg);
		moidaMemberService.update(member);
		return null;
	}
	
	@RequestMapping("update-pw")
	@ResponseBody
	public String updatePw(String pw, String npw, Principal principal) {
		String id = principal.getName();
		Member member = moidaMemberService.getMember(id);
		PasswordEncoder encoder = new BCryptPasswordEncoder();
		if(!encoder.matches(pw, member.getPwd())) { //아규먼트 첫번째 값은 암호화되지 않은 값, 두번째 값은 암호화된 값
			return "0";
		}
		npw = encoder.encode(npw);
		member.setPwd(npw);
		moidaMemberService.update(member);
		return "1";
	}
	
	@RequestMapping("update-email")
	@ResponseBody
	public String updateMail(String email, Principal principal) {
		String id = principal.getName();
		Member member = moidaMemberService.getMember(id);
		member.setEmail(email);
		moidaMemberService.update(member);
		return null;
	}
	
	@RequestMapping("update-sido")
	@ResponseBody
	public String updateSido(String sido, Principal principal) {
		String id = principal.getName();
		Member member = moidaMemberService.getMember(id);
		member.setAreaSido(sido);
		moidaMemberService.update(member);
		return null;
	}
	
	@PostMapping("delete-banner")
	@ResponseBody
	public String deleteBanner() {
		moidaBannerService.delete();	
		return null;
	}

	
	@PostMapping("update-banner")
	@ResponseBody
	public String updateBanner(MultipartFile file, String fileName, Integer ord,
			HttpServletRequest req, HttpServletResponse resp) throws Exception{
		
		String path = req.getServletContext().getRealPath("/temp");
		File serverDir = new File(path);
		if(!serverDir.exists()) {
			serverDir.mkdirs(); 		
			moidaBannerService.delete();			
		}
		
		String loadName="";
		if(fileName.indexOf("http://localhost/get-img?folder=main-banner&file=") == -1){		
			String realFileName = file.getOriginalFilename();
			String extName = realFileName.substring(realFileName.lastIndexOf("."), realFileName.length());
			loadName = ord+extName;
			byte[] data = file.getBytes();
			FileOutputStream serverFos = new FileOutputStream(serverDir + "/"+loadName);
			serverFos.write(data);
			serverFos.close();
		}else {
			int index = fileName.lastIndexOf("=");
			String realFileName = fileName.substring(index+1);
			File realFile = new File(req.getServletContext().getRealPath("/main-banner/"+realFileName));		
			String extName = realFileName.substring(realFileName.lastIndexOf("."), realFileName.length());
			loadName = ord+extName;
			File copyFile = new File(req.getServletContext().getRealPath("/temp/"+loadName));

			if(!realFile.exists()) {
				URL url = new URL("http://localhost/resources/images/img404.png");
				BufferedImage bi = ImageIO.read(url);
			    ImageIO.write(bi, "png", copyFile);
			}else {
				FileInputStream fis =new FileInputStream(realFile);
				FileOutputStream fos = new FileOutputStream(copyFile) ;
				byte[] b = new byte[1024];
				int length = 0;
				while((length=fis.read(b)) != -1){
					fos.write(b, 0, length);
				}		
				fis.close();
				fos.close();
			}    
		}
		Banner banner = new Banner(ord, loadName);
		moidaBannerService.insert(banner);
		return null;
	}
	
	@PostMapping("banner-folder-setting")
	@ResponseBody
	public String upload(HttpServletRequest req, HttpServletResponse resp) throws Exception{
		
		String tempFolderPath = req.getServletContext().getRealPath("/temp");
		String realFolderPath = req.getServletContext().getRealPath("/main-banner");
		File realFolder = new File(realFolderPath);		

		 if(realFolder.exists()){ 
			 File[] realFolderList = realFolder.listFiles();
			 for (int j = 0; j < realFolderList.length; j++  ) {
				 realFolderList[j].delete();
			 }		 
			 realFolder.delete(); 
		 }
		
		 File f = new File(tempFolderPath); 
		 File t = new File(realFolderPath);
		 if(f.exists()){ 
		     f.renameTo(t); 
		 }
		return null;
	}	
	
}
