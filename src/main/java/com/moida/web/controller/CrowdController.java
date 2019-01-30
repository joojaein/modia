package com.moida.web.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.moida.web.entity.Category;
import com.moida.web.entity.CategoryView;
import com.moida.web.service.CategoryService;


@Controller("crowd")
@RequestMapping("/crowd/")
public class CrowdController {
	
	@Autowired
	private CategoryService categoryService;
	
	@RequestMapping("main")
	public String index() {
		return "crowd.main";
	}
	@RequestMapping("categorySearch")
	public String categorySearch(Model model) {
		
		List<Category> list = categoryService.getCategoryList();
		List<CategoryView> categoryViewList = categoryService.getCategoryViewList(); 
		
		model.addAttribute("list",list);
		model.addAttribute("cvl",categoryViewList);
		
		
		return "crowd.categorySearch";
	}
	@RequestMapping("search")
	public String search(Model model) {
		List<Category> list = categoryService.getCategoryList();
		model.addAttribute("list",list);
		return "crowd.search";
	}
}