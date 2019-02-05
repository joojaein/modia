package com.moida.web.controller.member;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.moida.web.entity.CrowdSimpleDataView;
import com.moida.web.entity.Member;
import com.moida.web.service.MemberService;
import com.moida.web.service.MoidaCrowdService;
import com.moida.web.service.MoidaMemberService;

@Controller("memberHome")
@RequestMapping("/member/")
public class HomeController {
	
	@Autowired
	public MoidaMemberService moidamemberService;
	@Autowired
	public MoidaCrowdService moidaCrowdService;
	
	@RequestMapping("index")
	public String index(Model model, Principal principal) {
		String id = principal.getName();
		Member member = moidamemberService.getMember(id);	
		
		List<Integer> menuCnt = new ArrayList<Integer>();
		List<CrowdSimpleDataView> realCrowd = moidaCrowdService.getRealSimpleList(id);
		menuCnt.add(realCrowd.size());
		List<CrowdSimpleDataView> reqCrowd = moidaCrowdService.getRequestSimpleList(id);
		menuCnt.add(reqCrowd.size());
		//추후 최근 본 모임 진행할 때 사용할 부분
		//List<CrowdSimpleDataView> hitCrowd = moidaCrowdService.(id); 
		//menuCnt.add(hitCrowd.size());
		
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
	
}