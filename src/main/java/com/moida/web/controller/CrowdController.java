package com.moida.web.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.moida.web.entity.Category;
import com.moida.web.entity.CategoryView;
import com.moida.web.service.MoidaCategoryService;


@Controller("crowd")
@RequestMapping("/crowd/")
public class CrowdController {
	
	@Autowired
	private MoidaCategoryService moidaCategoryService;
	
	@RequestMapping("main")
	public String index() {
		return "crowd.main";
	}
	@RequestMapping("categorySearch")
	public String categorySearch(Model model) {
		
		List<Category> list = moidaCategoryService.getCategoryList();
		List<CategoryView> categoryViewList = moidaCategoryService.getCategoryViewList(); 
		
		model.addAttribute("list",list);
		model.addAttribute("cvl",categoryViewList);
		
		
		return "crowd.categorySearch";
	}
	
	@RequestMapping("search")
	public String search(Model model) {
		
		List<Category> list = moidaCategoryService.getCategoryList();
		
		model.addAttribute("list",list);
		
		return "crowd.search";
	}
}