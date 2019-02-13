package com.moida.web.controller.member;


import java.io.FileNotFoundException;
import java.security.Principal;
import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;
import com.google.gson.JsonElement;
import com.google.gson.JsonParser;
import com.moida.web.entity.Category;
import com.moida.web.entity.Crowd;
import com.moida.web.entity.CrowdBoard;
import com.moida.web.entity.CrowdNotice;
import com.moida.web.entity.Tag;
import com.moida.web.service.CategoryService;
import com.moida.web.service.CrowdService;
import com.moida.web.service.MoidaCategoryService;
import com.moida.web.service.MoidaCrowdService;
import com.moida.web.service.MoidaTagService;


@Controller("memberCrowd")
@RequestMapping("/crowd/")
public class CrowdController {
	
		
	@Autowired
	public MoidaCrowdService crowdService;
	

	@RequestMapping("notice")
	public String notice(Model model) {		
	
		List<CrowdNotice> list = crowdService.getNoticeList();
		model.addAttribute("list", list);
		return "crowd.notice";
	}
	
	@RequestMapping("board")
	public String board(Model model) {
		List<CrowdBoard> boardlist = crowdService.getBoardList();
		model.addAttribute("blist", boardlist);
		
		return "crowd.board";
	}
	
	@RequestMapping("boardreg")
	public String boardreg() {		
		
		return "crowd.boardreg";
	}
	
	@RequestMapping("calendar")
	public String calendar() {		
		
		return "crowd.calendar";
	}

	@RequestMapping("album")
	public String album() {		
		
		return "crowd.album";
	}
	
	@RequestMapping("createCategory")
	public String createCategory(Model model) {		
		model.addAttribute("href","/index");  
		//모임검색페이지에 모임개설 버튼이 있기 때문에 추후에 /index 대신 검색페이지의 주소를 기록해야함
		model.addAttribute("title","카테고리 선택");
		return "crowd.createCategory";
	}
	
	@Autowired
	public MoidaCategoryService moidaCategoryService;
	
	@Autowired
	public MoidaTagService moidaTagService;
	
	
	@RequestMapping("create")
	public String create(
			@RequestParam(name="t") Integer categoryId,
			Model model) throws FileNotFoundException {		
		
		
		
		Category categoryName = moidaCategoryService.getCategoryName(categoryId); 
		List<Tag> categoryTagName = moidaTagService.getCategoryTagNameList(categoryId); 
		
		model.addAttribute("href","createCategory");
		model.addAttribute("title",categoryName.getName());
		model.addAttribute("categoryId",categoryName.getId());
		model.addAttribute("tagName", categoryTagName);
		
		return "crowd.create";
	}

	@PostMapping("Reg")
	@ResponseBody
	public String Reg(String json, String tagId, Principal principal) {
		
		Gson gson = new Gson();
		
		Crowd crowd = gson.fromJson(json, Crowd.class);
		crowd.setLeaderId(principal.getName());


		return crowdService.createCrowd(crowd, tagId)+"";

	}
	
	@RequestMapping("checkId")
	@ResponseBody
	public String checkId(Principal principal) {
		String answer = "";
		if(principal == null) {
			System.out.println("zzzzzzzzzzzzzzz");
			answer = "no";
		}else {
			System.out.println(principal.getName());
			answer = "yes";
		}
		return answer;
	}
	
}

