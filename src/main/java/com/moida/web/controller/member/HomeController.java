package com.moida.web.controller.member;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;
import com.moida.web.entity.CrowdSimpleDataView;
import com.moida.web.entity.Member;
import com.moida.web.entity.Schedule;
import com.moida.web.service.MemberService;
import com.moida.web.service.MoidaCrowdService;
import com.moida.web.service.MoidaMemberService;
import com.moida.web.service.MoidaScheduleService;

@Controller("memberHome")
@RequestMapping("/member/")
public class HomeController {
	
	@Autowired
	public MoidaMemberService moidamemberService;
	@Autowired
	public MoidaCrowdService moidaCrowdService;
	@Autowired
	public MoidaScheduleService scheduleService;
	
	@RequestMapping("index")
	public String index(Model model, HttpServletRequest request, Principal principal) {
		String id = principal.getName();
		Member member = moidamemberService.getMember(id);   

	      List<Integer> menuCnt = new ArrayList<Integer>();
	      List<CrowdSimpleDataView> realCrowd = moidaCrowdService.getRealSimpleList(id);
	      menuCnt.add(realCrowd.size());
	      List<CrowdSimpleDataView> reqCrowd = moidaCrowdService.getRequestSimpleList(id);
	      menuCnt.add(reqCrowd.size());
	      
	      List<CrowdSimpleDataView> hitCrowd = new ArrayList<CrowdSimpleDataView>();
	      String values = "";
	      Cookie[] cookies = request.getCookies();
	      for (Cookie c : cookies) {
	         if(c.getName().equals(id)) {
	            values = c.getValue();
	            break;
	         }
	      }
	      
	      if(!values.equals("")) {
	         String[] valArr = values.split("/");
	         for (int i = 0; i < valArr.length; i++) {
	            int index = Integer.parseInt(valArr[i]);
	            CrowdSimpleDataView temp = moidaCrowdService.getCrowdSimpleDataView(index);
	            if(temp!=null){
	            hitCrowd.add(temp);
	            }
	         }
	      }
	      menuCnt.add(hitCrowd.size());

	      model.addAttribute("member", member);
	      model.addAttribute("menuCnt", menuCnt);

	      return "member.index";

	}	
	
	@RequestMapping("edit")
	public String edit(Model model, Principal principal) {
		String id = principal.getName();
		Member member = moidamemberService.getMember(id);
		
		model.addAttribute("member", member);

		return "member.edit";
	}
	
	@RequestMapping("update-msg")
	@ResponseBody
	public String updateMsg(String msg, Principal principal) {
		String id = principal.getName();
		Member member = moidamemberService.getMember(id);
		member.setMsg(msg);
		moidamemberService.update(member);
		
		return null;
	}
	
	@RequestMapping("update-pw")
	@ResponseBody
	public String updatePw(String pw, String npw, Principal principal) {
		String id = principal.getName();
		Member member = moidamemberService.getMember(id);
		PasswordEncoder encoder = new BCryptPasswordEncoder();
		
		if(!encoder.matches(pw, member.getPwd())) { //아규먼트 첫번째 값은 암호화되지 않은 값, 두번째 값은 암호화된 값
			return "0";
		}
		
		npw = encoder.encode(npw);
		member.setPwd(npw);
		moidamemberService.update(member);
		return "1";
	}
	
	@RequestMapping("update-email")
	@ResponseBody
	public String updateMail(String email, Principal principal) {
		String id = principal.getName();
		Member member = moidamemberService.getMember(id);
		member.setEmail(email);
		moidamemberService.update(member);
		return null;
	}
	
	@RequestMapping("update-sido")
	@ResponseBody
	public String updateSido(String sido, Principal principal) {
		String id = principal.getName();
		Member member = moidamemberService.getMember(id);
		member.setAreaSido(sido);
		moidamemberService.update(member);
		return null;
	}
	
	@RequestMapping("get-recently-schedule")
	@ResponseBody
	public String getRecentlySchdule(int crowdId) {
		Schedule sch = scheduleService.getRecentlySchedule(crowdId);
		if(sch==null) {
			sch = new Schedule();
			sch.setCrowdId(crowdId);
		}
		Gson gson = new Gson();
		String json = gson.toJson(sch);	
		return json;
	}
	
	
	
}