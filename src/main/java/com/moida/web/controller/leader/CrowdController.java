package com.moida.web.controller.leader;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller("leaderCrowd")
@RequestMapping("/leader/")
public class CrowdController {
	
	@RequestMapping("edit")
	public String edit(Model model) {		
		model.addAttribute("href","manage");  
		model.addAttribute("title","모임관리");
		return "leader.edit";
	}
	
	@RequestMapping("manage")
	public String manage(Model model) {		
		model.addAttribute("href","/index");  
		//모임상세페이지에 @모임관리@ 버튼이 있기 때문에 추후에 /index 대신 상세페이지의 주소를 기록해야함 
		model.addAttribute("title","모임관리");
		return "leader.manage";
	}
}
