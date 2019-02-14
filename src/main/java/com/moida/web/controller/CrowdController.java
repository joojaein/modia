package com.moida.web.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;
import com.moida.web.entity.Category;
import com.moida.web.entity.CategoryView;
import com.moida.web.entity.CrowdMemberRole;
import com.moida.web.entity.CrowdSimpleDataView;
import com.moida.web.entity.CrowdTag;
import com.moida.web.entity.Tag;
import com.moida.web.service.CrowdService;
import com.moida.web.service.MoidaCategoryService;
import com.moida.web.service.MoidaCrowdService;
import com.moida.web.service.MoidaCrowdTagService;
import com.moida.web.service.MoidaTagService;

@Controller("crowd")
@RequestMapping("/crowd/")
public class CrowdController {

	@Autowired
	public MoidaCrowdService crowdService;

	@RequestMapping("main")
	public String index(@RequestParam(name="crowd") Integer crowdId,
			Model model, HttpServletRequest request, HttpServletResponse response) {
		
		int userCrowdAuthType = -1;

		List<CrowdMemberRole> memberList = crowdService.getCrowdMemberRole(crowdId);
		CrowdSimpleDataView crowd = crowdService.getCrowdSimpleDataView(crowdId);
		
		SecurityContext context = SecurityContextHolder.getContext(); 
		Authentication authentication = context.getAuthentication(); 
		if(!authentication.getPrincipal().equals("anonymousUser")) {
			userCrowdAuthType=3;
			User user = (User) authentication.getPrincipal();
			String userId = user.getUsername();
			String values = "";
			Cookie[] cookies = request.getCookies();
			for (Cookie c : cookies) {
				if(c.getName().equals(userId)) {
					values = c.getValue();
					break;
				}
			}   
			String value =crowdId+"";
			String result = "";
			if(!values.equals("")) {
				String[] valArr = values.split("/");
				for (int i = 0; i < valArr.length; i++) {
					if(!valArr[i].equals(value)) {
						result = result + "/" + valArr[i];
					}
				}   
				value = value + result;
			}
			Cookie cookie = new Cookie(userId, value);      
			cookie.setMaxAge(60*60*24*7); 
			cookie.setPath("/"); 
			response.addCookie(cookie);
			
			for (int i = 0; i < memberList.size(); i++) {
				if(memberList.get(i).getMemberId().equals(userId)) {
					userCrowdAuthType = memberList.get(i).getGroupRole();
					break;
				}
			}
		}
		model.addAttribute("userCrowdAuthType", userCrowdAuthType);
		model.addAttribute("list", memberList);
		model.addAttribute("crowd", crowd);
		
		return "crowd.main";
	}

	@Autowired
	private MoidaCategoryService moidaCategoryService;

	@RequestMapping("categorySearch")
	public String categorySearch(Model model) {

		List<Category> list = moidaCategoryService.getCategoryList();
		List<CategoryView> categoryViewList = moidaCategoryService.getCategoryViewList();

		model.addAttribute("list", list);
		model.addAttribute("cvl", categoryViewList);

		return "crowd.categorySearch";
	}

	@Autowired
	private MoidaTagService moidaTagService;

	@Autowired
	private MoidaCrowdService moidaCrowdService;

	@Autowired
	private MoidaCrowdTagService moidaCrowdTagService;

	@RequestMapping("search")
	public String search(Model model, String query, String categoryId) {
		System.out.println("query :"+query);
		System.out.println("categoryId :"+categoryId);
		List<Category> list = moidaCategoryService.getCategoryList();
		List<Tag> tlist = moidaTagService.getTagList();
		List<CrowdSimpleDataView> simpleDataList = moidaCrowdService.getSimpleList();
		List<CrowdTag> crowdTagList = moidaCrowdTagService.getCrowdTagList();

		model.addAttribute("list", list);
		model.addAttribute("tlist", tlist);
		model.addAttribute("simpleDataList", simpleDataList);
		model.addAttribute("crowdTagList", crowdTagList);
		return "crowd.search";
	}

	@PostMapping("categoryList")
	@ResponseBody
	public String categoryList(Integer categoryId) {
		List<CrowdSimpleDataView> simpleCategoryList = moidaCrowdService.getSimpleCategoryList(categoryId);
		Gson gson = new Gson();
		String json = gson.toJson(simpleCategoryList);
		return json;
	}

	@PostMapping("tagList")
	@ResponseBody
	public String categoryTagList(Integer tagId) {
		List<CrowdSimpleDataView> simpleCategoryTagList = moidaCrowdService.getSimpleCategoryTagList(tagId);
		Gson gson = new Gson();
		String json = gson.toJson(simpleCategoryTagList);
		return json;
	}
	
	@RequestMapping("get-crowd-auth")
	@ResponseBody
	public String getCrowdAuth(@RequestParam(name="crowd") String crowdIdStr,
			HttpServletResponse response) throws IOException {
		/*
		int crowdId = Integer.parseInt(crowdIdStr);

		SecurityContext context = SecurityContextHolder.getContext(); 
	    Authentication authentication = context.getAuthentication(); 
	    if(authentication.getPrincipal().equals("anonymousUser")) {
			return null;
	    }
	    
	    User user = (User) authentication.getPrincipal();
        String userId = user.getUsername();
		List<CrowdMemberRole> memberList = crowdService.getCrowdMemberRole(crowdId);

		String isMember = "nonmember";
		for (int i = 0; i < memberList.size(); i++) {
			if(memberList.get(i).getMemberId().equals(userId)) {
				isMember = "member";
				break;
			}
		}
        
        return isMember;
        */
        

		int crowdId = Integer.parseInt(crowdIdStr);
		int userCrowdAuthType = -1;
		List<CrowdMemberRole> memberList = crowdService.getCrowdMemberRole(crowdId);		
		SecurityContext context = SecurityContextHolder.getContext(); 
		Authentication authentication = context.getAuthentication(); 
		if(!authentication.getPrincipal().equals("anonymousUser")) {
			userCrowdAuthType=3;
			User user = (User) authentication.getPrincipal();
	        String userId = user.getUsername();
			for (int i = 0; i < memberList.size(); i++) {
				if(memberList.get(i).getMemberId().equals(userId)) {
					userCrowdAuthType = memberList.get(i).getGroupRole();
					break;
				}
			}
		}

		return userCrowdAuthType+"";
	}
	
	
}