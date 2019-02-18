package com.moida.web.controller;

import java.io.IOException;
import java.util.ArrayList;
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
import org.springframework.web.bind.annotation.GetMapping;
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
import com.moida.web.entity.Member;
import com.moida.web.entity.Tag;
import com.moida.web.service.CrowdService;
import com.moida.web.service.MoidaCategoryService;
import com.moida.web.service.MoidaCrowdService;
import com.moida.web.service.MoidaCrowdTagService;
import com.moida.web.service.MoidaMemberService;
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
			crowdService.insertCrowdHit(crowdId, userId);
			
			///쿠키관련///////////////////////////////
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
			//////////////////////////////////////

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
	
	@Autowired
	private MoidaMemberService memberService;

	@RequestMapping("search")
	public String search(
			@RequestParam(name="categoryId",defaultValue="0") Integer categoryId,
			/* String query, */
			@RequestParam(name="tagId",defaultValue="0") Integer tagId,
			@RequestParam(name="word",defaultValue="") String word,
			Model model) {

		List<Category> list = moidaCategoryService.getCategoryList();
		List<Tag> tlist = moidaTagService.getTagList();
		List<CrowdSimpleDataView> tempList = moidaCrowdService.getSimpleList();
		List<CrowdTag> crowdTagList = moidaCrowdTagService.getCrowdTagList();

		if(word==null) {
			word = "";
		}
		List<CrowdSimpleDataView> simpleCategoryList = moidaCrowdService.getSimpleCategoryList(categoryId, word);
		List<CrowdSimpleDataView> simpleCategoryTagList = moidaCrowdService.getSimpleCategoryTagList(tagId, word);
		
		SecurityContext context = SecurityContextHolder.getContext();
		Authentication authentication = context.getAuthentication();
		if (!authentication.getPrincipal().equals("anonymousUser")) {

			User user = (User) authentication.getPrincipal();
			String userId = user.getUsername();
			System.out.println("userId : "+userId);

			Member member = memberService.getMember(userId);
			List<CrowdSimpleDataView> simpleDataList = new ArrayList<CrowdSimpleDataView>();

			for (int i = 0; i < tempList.size(); i++) {

				if (member.getAreaSido().equals(tempList.get(i).getAreaSido())) {
					simpleDataList.add(tempList.get(i));
				}
			}
			model.addAttribute("simpleDataList", simpleDataList);
		} else {

			model.addAttribute("simpleDataList", tempList);
		}
		List<CrowdSimpleDataView> searchTempList = moidaCrowdService.getSearchResultList(word);
		System.out.println(searchTempList);

		Gson gson = new Gson();
		String json = gson.toJson(simpleCategoryList);
		Gson gson2 = new Gson();
		String json2 = gson2.toJson(simpleCategoryTagList);
		Gson gson3 = new Gson();
		String json3 = gson3.toJson(searchTempList);
		model.addAttribute("chkCategory", json);
		model.addAttribute("chkCategoryTag", json2);
		model.addAttribute("searchResult", json3);
		model.addAttribute("list", list);
		model.addAttribute("tlist", tlist);
		model.addAttribute("crowdTagList", crowdTagList);
		/* model.addAttribute("query",query); */
		model.addAttribute("categoryId", categoryId);
		model.addAttribute("tagId", tagId);
		model.addAttribute("indexWord",word);
		
		
		
		return "crowd.search";
	}

	@RequestMapping("categoryList")
	@ResponseBody
	public String categoryList(Integer categoryId, String word) {
		List<CrowdSimpleDataView> tempList = moidaCrowdService.getSimpleCategoryList(categoryId, word);
		
		SecurityContext context = SecurityContextHolder.getContext();
		Authentication authentication = context.getAuthentication();
		if (!authentication.getPrincipal().equals("anonymousUser")) {

			User user = (User) authentication.getPrincipal();
			String userId = user.getUsername();

			Member member = memberService.getMember(userId);
			List<CrowdSimpleDataView> simpleCategoryList = new ArrayList<CrowdSimpleDataView>();

			for (int i = 0; i < tempList.size(); i++) {
				
				System.out.println("member.getAreaSido() : "+member.getAreaSido());
				System.out.println("tempList.get(i).getAreaSido() : "+tempList.get(i).getAreaSido());
				if (member.getAreaSido().equals(tempList.get(i).getAreaSido())) {
					simpleCategoryList.add(tempList.get(i));
				}
			}
			Gson gson = new Gson();
			String json = gson.toJson(simpleCategoryList);
			return json;
		} else {
			Gson gson = new Gson();
			String json = gson.toJson(tempList);
			return json;
		}
		
	
	}

	@PostMapping("tagList")
	@ResponseBody
	public String categoryTagList(Integer tagId, String word) {
		List<CrowdSimpleDataView> tempList = moidaCrowdService.getSimpleCategoryTagList(tagId, word);
		System.out.println(word + ":word는 이거입니디!");
		SecurityContext context = SecurityContextHolder.getContext();
		Authentication authentication = context.getAuthentication();
		if (!authentication.getPrincipal().equals("anonymousUser")) {

			User user = (User) authentication.getPrincipal();
			String userId = user.getUsername();

			Member member = memberService.getMember(userId);
			List<CrowdSimpleDataView> simpleCategoryTagList = new ArrayList<CrowdSimpleDataView>(tagId);

			for (int i = 0; i < tempList.size(); i++) {
				
				if (member.getAreaSido().equals(tempList.get(i).getAreaSido())) {
					simpleCategoryTagList.add(tempList.get(i));
				}
			}
			Gson gson = new Gson();
			String json = gson.toJson(simpleCategoryTagList);
			return json;
		} else {
			Gson gson = new Gson();
			String json = gson.toJson(tempList);
			return json;
		}
	}
	
	@RequestMapping("searchResultList")
	@ResponseBody
	public String searchResult(String word) {
		List<CrowdSimpleDataView> tempList = moidaCrowdService.getSearchResultList(word);
		word = word.trim();
		System.out.println(word.length()+"이건 입력한 워드");
		SecurityContext context = SecurityContextHolder.getContext();
		Authentication authentication = context.getAuthentication();
		if (!authentication.getPrincipal().equals("anonymousUser")) {

			User user = (User) authentication.getPrincipal();
			String userId = user.getUsername();

			Member member = memberService.getMember(userId);
			List<CrowdSimpleDataView> simpleNameList = new ArrayList<CrowdSimpleDataView>();
			for (int i = 0; i < tempList.size(); i++) {

				if (member.getAreaSido().equals(tempList.get(i).getAreaSido())) {
					simpleNameList.add(tempList.get(i));
					System.out.println("test중입니다 닥쳐주세요"+simpleNameList);
				}
			} // for문 끝

			if (word.length()< 1) {
				Gson gson = new Gson();
				String json = gson.toJson(tempList);
				return json;
			} else {
				Gson gson = new Gson();
				String json = gson.toJson(simpleNameList);
				return json;
			}

		} else {
			System.out.println("나는 검색결과"+tempList.get(0).getImg());
				Gson gson = new Gson();
				String json = gson.toJson(tempList);

				return json;
		}
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