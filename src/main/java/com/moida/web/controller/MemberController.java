package com.moida.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

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
	
	@GetMapping("/idpw")
	public String idpw() {	
		return "home.idpw";
	}	
}
