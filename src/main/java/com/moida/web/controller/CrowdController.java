package com.moida.web.controller;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.moida.web.dao.CrowdDao;
import com.moida.web.entity.Crowd;
import com.moida.web.entity.CrowdMemberRole;
import com.moida.web.service.CrowdService;
import com.moida.web.service.CrowdSimpleDataView;



@Controller("crowd")
@RequestMapping("/crowd/")
public class CrowdController {
	
	@Autowired
	private SqlSessionTemplate session;
		
	@Autowired
	public CrowdService crowdService;
	
	
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
	public String categorySearch() {
		return "crowd.categorySearch";
	}
	@RequestMapping("search")
	public String search() {
		return "crowd.search";
	}
}