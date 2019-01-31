package com.moida.web.controller;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.moida.web.entity.CrowdMemberRole;
import com.moida.web.service.CrowdService;
import com.moida.web.entity.CrowdSimpleDataView;

import com.moida.web.entity.Category;
import com.moida.web.entity.CategoryView;
import com.moida.web.service.CategoryService;


@Controller("crowd")
@RequestMapping("/crowd/")
public class CrowdController {
		
	@Autowired
	public CrowdService crowdService;
	
	@Autowired
	private CategoryService categoryService;
	
	@RequestMapping("main")
	public String index(Model model) {
		List<CrowdMemberRole> list = crowdService.getCrowdMerberRole();
		CrowdSimpleDataView crowd = crowdService.getCrowdSimpleDataView();
		
//		CrowdDao crowdDao = session.getMapper(CrowdDao.class);
		model.addAttribute("list", list);
		model.addAttribute("crowd", crowd);
		
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