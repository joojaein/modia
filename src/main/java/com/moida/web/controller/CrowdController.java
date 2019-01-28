package com.moida.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller("crowd")
@RequestMapping("/crowd/")
public class CrowdController {
	
	@RequestMapping("main")
	public String index() {
		return "crowd.main";
	}
	@RequestMapping("categorySearch")
	public String categorySearch() {
		return "crowd.categorySearch";
	}
	@RequestMapping("search")
	public String search() {
		return "crowd.search";
	}
}