package com.moida.web.controller;

import java.util.ArrayList;
import java.util.List;

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
	public CrowdService crowdService;

	@RequestMapping("main")
	public String index(Model model) {
		List<CrowdMemberRole> list = crowdService.getCrowdMemberRole();
		CrowdSimpleDataView crowd = crowdService.getCrowdSimpleDataView();

//		CrowdDao crowdDao = session.getMapper(CrowdDao.class);
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
			@RequestParam(name="word",defaultValue="") String word,
			Model model) {
		System.out.println("search 들가지냐");		
		List<Category> list = moidaCategoryService.getCategoryList();
		List<Tag> tlist = moidaTagService.getTagList();
		List<CrowdSimpleDataView> tempList = moidaCrowdService.getSimpleList();
		List<CrowdTag> crowdTagList = moidaCrowdTagService.getCrowdTagList();

		if(word==null) {
			word = "";
		}
		System.out.println("word : "+word + categoryId);
		List<CrowdSimpleDataView> simpleCategoryList = moidaCrowdService.getSimpleCategoryList(categoryId, word);
		System.out.println("simpleCategoryList : "+simpleCategoryList);

		//System.out.println(simpleCategoryList.get(0).getName()+"please");
		System.out.println("나온당");
		SecurityContext context = SecurityContextHolder.getContext();
		Authentication authentication = context.getAuthentication();
		if (!authentication.getPrincipal().equals("anonymousUser")) {
			/*System.out.println("if ");*/

			User user = (User) authentication.getPrincipal();
			String userId = user.getUsername();
			System.out.println("userId : "+userId);

			Member member = memberService.getMember(userId);
			List<CrowdSimpleDataView> simpleDataList = new ArrayList<CrowdSimpleDataView>();
			
			/*System.out.println("simpleDataList : "+simpleDataList.size());*/

			for (int i = 0; i < tempList.size(); i++) {
				
				System.out.println("member.getAreaSido() : "+member.getAreaSido());
				System.out.println("tempList.get(i).getAreaSido() : "+tempList.get(i).getAreaSido());
				if (member.getAreaSido().equals(tempList.get(i).getAreaSido())) {
					simpleDataList.add(tempList.get(i));
					System.out.println("시도야 나와라!"+tempList.get(i).getAreaSido());
				}
			}
			model.addAttribute("simpleDataList", simpleDataList);
		} else {
			System.out.println("else ");

			model.addAttribute("simpleDataList", tempList);
		}

		Gson gson = new Gson();
		String json = gson.toJson(simpleCategoryList);
		model.addAttribute("chkCategory", json);
		model.addAttribute("list", list);
		model.addAttribute("tlist", tlist);
		model.addAttribute("crowdTagList", crowdTagList);
		/* model.addAttribute("query",query); */
		model.addAttribute("categoryId", categoryId);
		
		
		
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
				String json = gson.toJson(simpleNameList);
				return json;
			} else {
				Gson gson = new Gson();
				String json = gson.toJson(simpleNameList);
				return json;
			}

		} else {

			if (word.length()< 1) {
				Gson gson = new Gson();
				String json = gson.toJson(tempList);
				return json;
			} else {

				Gson gson = new Gson();
				String json = gson.toJson(tempList);

				return json;
			}

		}
	}
}