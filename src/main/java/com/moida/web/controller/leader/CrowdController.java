package com.moida.web.controller.leader;

import java.security.Principal;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;
import com.moida.web.entity.Board;
import com.moida.web.entity.Crowd;
import com.moida.web.entity.Tag;
import com.moida.web.service.MoidaBoardService;
import com.moida.web.service.MoidaCrowdService;
import com.moida.web.service.MoidaTagService;

@Controller("leaderCrowd")
@RequestMapping("/leader/")
public class CrowdController {
	
	@Autowired
	public MoidaCrowdService crowdService;
	@Autowired
	public MoidaTagService tagService;
	@Autowired
	public MoidaBoardService boardService;
	
	
	@RequestMapping("edit") // 태그, 주요지역, 등등 기본 정보 수정하는 페이지
	public String edit(Model model, Principal principal,
			@RequestParam(name="crowd") String crowdIdStr) {
		
		int crowdId = Integer.parseInt(crowdIdStr);
		String id = principal.getName();
		Crowd crowd = crowdService.getCrowd(crowdId);
		if(!id.equals(crowd.getLeaderId())) return "home.index";
		
		List<Tag> tagList = tagService.getCategoryTagList(crowd.getId());
		List<Integer> crowdTagIdList = crowdService.getCrowdTagIdList(crowd.getId());
		
		model.addAttribute("href","manage");  
		model.addAttribute("title","모임관리");	
		model.addAttribute("crowd",crowd);  
		model.addAttribute("tagList",tagList);  
		model.addAttribute("crowdTagIdList",crowdTagIdList);
		return "leader.edit";
	}
	
	@PostMapping("get-crowd")
	@ResponseBody
	public String getCrowd(int crowdId) throws Exception{	
		Crowd crowd = crowdService.getCrowd(crowdId);
		Gson gson = new Gson();
		String json = gson.toJson(crowd);
		return json;
	}	

	@PostMapping("update-crowd")
	@ResponseBody
	public String updateCrowd(int id, String areaSido, String areaSigungu, 
			String name, String content, String ageMin, String ageMax, 
			String gender, String maxPerson, String img, String tagList) throws Exception{	
		Crowd crowd = crowdService.getCrowd(id);
		crowd.setAreaSido(areaSido);
		crowd.setAreaSigungu(areaSigungu);
		crowd.setName(name);
		crowd.setContent(content);
		crowd.setAgeMin(ageMin);
		crowd.setAgeMax(ageMax);
		int genderInt = 2;
		if(gender.equals("남자")) {
			genderInt=0;
		}else if(gender.equals("여자")) {
			genderInt=1;
		}
		crowd.setGender(genderInt);
		crowd.setMaxPerson(Integer.parseInt(maxPerson));
		String extName = img.substring(img.lastIndexOf("."), img.length());
		img = id+extName;
		crowd.setImg(img);
		crowdService.updateCrowd(crowd);
				
		String[] tagArray = tagList.split(","); 
		return tagService.updateTag(id, tagArray)+"";

	}	
	
	@RequestMapping("manage")
	public String manage(Model model, Principal principal,
			@RequestParam(name="crowd") String crowdIdStr) {	
		
		int crowdId = Integer.parseInt(crowdIdStr);
		String id = principal.getName();
		Crowd crowd = crowdService.getCrowd(crowdId);
		if(!id.equals(crowd.getLeaderId())) return "home.index";
		
		
		model.addAttribute("href","/index");  
		//모임상세페이지에 @모임관리@ 버튼이 있기 때문에 추후에 /index 대신 상세페이지의 주소를 기록해야함 
		model.addAttribute("title","모임관리");
		model.addAttribute("crowd",crowd);  
		return "leader.manage";
	}
	
	@PostMapping("get-board-list")
	@ResponseBody
	public String getBoardList(int crowdId) throws Exception{	
		List<Board> boardList = boardService.getBoardListType1(crowdId);
		Gson gson = new Gson();
		String json = gson.toJson(boardList);
		return json;
	}	
	/*
	@PostMapping("insert-board")
	@ResponseBody
	public String insertBoard() throws Exception{	
		List<Board> boardList = boardService.getBoardListType1(crowdId);
		Gson gson = new Gson();
		String json = gson.toJson(boardList);
		return json;
	}
	*/
	@PostMapping("update-board")
	@ResponseBody
	public String updateBoard(int boardId, String name) throws Exception{	
		return boardService.updateBoard(boardId, name)+"";
	}
	/*
	@PostMapping("delete-board")
	@ResponseBody
	public String deleteBoard() throws Exception{	
		List<Board> boardList = boardService.getBoardListType1(crowdId);
		Gson gson = new Gson();
		String json = gson.toJson(boardList);
		return json;
	}
	*/
}
