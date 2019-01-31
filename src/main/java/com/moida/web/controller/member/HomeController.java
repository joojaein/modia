package com.moida.web.controller.member;


import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.moida.web.entity.Member;
import com.moida.web.service.MemberService;

@Controller("memberHome")
@RequestMapping("/member/")
public class HomeController {
	
	@Autowired
	public MemberService memberService;
	
	@RequestMapping("index")
	public String index(Model model, Principal principal) {
		Member member = memberService.getMember(principal.getName());
		model.addAttribute("member", member);

		return "member.index";
	}	
	
	@RequestMapping("edit")
	public String edit() {
		return "member.edit";
	}
	
}