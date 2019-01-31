package com.moida.web.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.moida.web.entity.Category;
import com.moida.web.entity.CategoryView;
import com.moida.web.entity.CrowdMemberRole;
import com.moida.web.entity.CrowdSimpleDataView;
import com.moida.web.entity.Tag;
import com.moida.web.service.CrowdService;
import com.moida.web.service.MoidaCategoryService;
import com.moida.web.service.MoidaTagService;


@Controller("crowd")
@RequestMapping("/crowd/")
public class CrowdController {
	@Autowired
	public CrowdService crowdService;
	
	@RequestMapping("main")
	public String index(Model model) {
		List<CrowdMemberRole> list = crowdService.getCrowdMemberRole();
		CrowdSimpleDataView crowd = crowdService.getCrowdSimpleDataView();
		
		model.addAttribute("list", list);
		model.addAttribute("crowd", crowd);
		
		return "crowd.main";
	}
	
	@Autowired
	private MoidaCategoryService moidaCategoryService;
	
	@RequestMapping("categorySearch")
	public String categorySearch(Model model) {
		
		List<Category> list = moidaCategoryService.getCategoryList();
		List<CategoryView> categoryViewList = moidaCategoryService.getCategoryViewList(); 
		
		model.addAttribute("list",list);
		model.addAttribute("cvl",categoryViewList);
		
		
		return "crowd.categorySearch";
	}
	
	@Autowired
	private MoidaTagService moidaTagService;
	
	@RequestMapping("search")
	public String search(Model model) {
		
		List<Category> list = moidaCategoryService.getCategoryList();
		List<Tag> tlist = moidaTagService.getTagList();
		System.out.println(tlist);
		model.addAttribute("list",list);
		model.addAttribute("tlist",tlist);
		
		return "crowd.search";
	}
}