package com.moida.web.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MemberController {

	@GetMapping("/login")
	public String login() {	
		return "home.login";
	}

	@GetMapping("/join")
	public String join() {	
		return "home.join";
	}
	
	/*
	 * @PostMapping("join") public String join(Member member) { return
	 * "redirect:../index"; }
	 */
	
}
