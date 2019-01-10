package com.moida.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HomeController {
	
	@RequestMapping("/index")
	public String index() {
		//return "/WEB-INF/views/home/index.jsp";
		//return "index";
		return "home/index";
	}	
}
