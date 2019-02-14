package com.moida.web.controller.leader;

import java.io.IOException;
import java.security.Principal;
import java.util.List;

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
import com.moida.web.entity.Board;
import com.moida.web.entity.Crowd;
import com.moida.web.entity.CrowdMemberRole;
import com.moida.web.entity.CrowdSimpleDataView;
import com.moida.web.entity.LeaderMngChartView;
import com.moida.web.entity.LeaderMngMemberView;
import com.moida.web.entity.Tag;
import com.moida.web.service.MoidaBoardService;
import com.moida.web.service.MoidaCrowdService;
import com.moida.web.service.MoidaMemberService;
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
	@Autowired
	public MoidaMemberService memberService;
	
	
	@RequestMapping("edit") // 태그, 주요지역, 등등 기본 정보 수정하는 페이지
	public String edit(Model model, @RequestParam(name="crowd") String crowdIdStr,
			HttpServletResponse response) throws IOException {
		int crowdId = Integer.parseInt(crowdIdStr);
		
		SecurityContext context = SecurityContextHolder.getContext(); 
	    Authentication authentication = context.getAuthentication(); 
	    if(authentication.getPrincipal().equals("anonymousUser")) {
			response.sendRedirect("/crowd/main?crowd="+crowdId);
			return null;
	    }
	    
	    User user = (User) authentication.getPrincipal();
        String userId = user.getUsername();

		CrowdSimpleDataView crowd = crowdService.getCrowdSimpleDataView(crowdId);
		if(!userId.equals(crowd.getLeaderId())) {
			response.sendRedirect("/crowd/main?crowd="+crowdId);
			return null;
		} 
		
		List<Tag> tagList = tagService.getCategoryTagList(crowd.getId());
		List<Integer> crowdTagIdList = crowdService.getCrowdTagIdList(crowd.getId());
		
		model.addAttribute("href","manage?crowd="+crowdId);  
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
	public String manage(Model model, @RequestParam(name="crowd") String crowdIdStr,
			HttpServletResponse response) throws IOException {	
		
		int crowdId = Integer.parseInt(crowdIdStr);
		
		SecurityContext context = SecurityContextHolder.getContext(); 
	    Authentication authentication = context.getAuthentication(); 
	    if(authentication.getPrincipal().equals("anonymousUser")) {
			response.sendRedirect("/crowd/main?crowd="+crowdId);
			return null;
	    }
	    
	    User user = (User) authentication.getPrincipal();
        String userId = user.getUsername();

		CrowdSimpleDataView crowd = crowdService.getCrowdSimpleDataView(crowdId);
		if(!userId.equals(crowd.getLeaderId())) {
			response.sendRedirect("/crowd/main?crowd="+crowdId);
			return null;
		} 
		
		model.addAttribute("href","/crowd/main?crowd="+crowdId);  
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
	
	@PostMapping("insert-board")
	@ResponseBody
	public String insertBoard(int crowdId, String name) throws Exception{
		Board board = new Board(name, crowdId);
		return boardService.insertBoardType1(board)+"";
	}
	
	@PostMapping("update-board")
	@ResponseBody
	public String updateBoard(int boardId, String name) throws Exception{	
		return boardService.updateBoard(boardId, name)+"";
	}
	
	@PostMapping("delete-board")
	@ResponseBody
	public String deleteBoard(int boardId) throws Exception{	
		return boardService.deleteBoard(boardId)+"";
	}
	
	@PostMapping("get-real-member-cnt")
	@ResponseBody
	public String getRealMemberCnt(int crowdId) throws Exception{	
		Integer memberCnt=memberService.getLeaderMngRealMemberCnt(crowdId);
		return memberCnt+"";
	}
	
	@PostMapping("get-request-member-cnt")
	@ResponseBody
	public String getRequestMemberCnt(int crowdId) throws Exception{	
		Integer memberCnt=memberService.getLeaderMngRequestMemberCnt(crowdId);
		return memberCnt+"";
	}
	
	@PostMapping("get-real-member-list")
	@ResponseBody
	public String getRealMemberList(String query, String updown, int min, int max, int crowdId) throws Exception{	
		List<LeaderMngMemberView> memberList=memberService.getLeaderMngRealMemberList(query, updown, min, max, crowdId);
		Gson gson = new Gson();
		String json = gson.toJson(memberList);
		return json;	
	}
	
	@PostMapping("get-request-member-list")
	@ResponseBody
	public String getRequestMemberList(String query, String updown, int min, int max, int crowdId) throws Exception{	
		List<LeaderMngMemberView> memberList=memberService.getLeaderMngRequestMemberList(query, updown, min, max, crowdId);
		Gson gson = new Gson();
		String json = gson.toJson(memberList);
		return json;
	}
		
	@PostMapping("update-request-member")
	@ResponseBody
	public String updaetRequestMember(int crowdId, String memberIds) throws Exception{	
		String[] memberIdArray = memberIds.split(","); 
		int cnt=0;
		for (int i = 0; i < memberIdArray.length; i++) {
			memberService.updateRequestCrowdMember(crowdId, memberIdArray[i].trim());
			cnt++;
		}		
		return cnt+"";
	}
	

	@PostMapping("update-real-member")
	@ResponseBody
	public String updaetRealMember(int crowdId, String memberId, int groupRole) throws Exception{	
		Integer memberCnt=memberService.updateRealCrowdMember(crowdId, memberId, groupRole);
		return memberCnt+"";
	}
	
	@PostMapping("del-real-member")
	@ResponseBody
	public String deleteRealMember(int crowdId, String memberIds) throws Exception{	
		String[] memberIdArray = memberIds.split(","); 
		int cnt=0;
		for (int i = 0; i < memberIdArray.length; i++) {
			memberService.deleteCrowdMember(crowdId, memberIdArray[i].trim());
			cnt++;
		}		
		return cnt+"";
	}
	
	@PostMapping("get-chart-data")
	@ResponseBody
	public String getChartData(int crowdId) throws Exception{	
		List<LeaderMngChartView> chartList=crowdService.getChartList(crowdId);
		Gson gson = new Gson();
		String json = gson.toJson(chartList);
		return json;				
	}
}



















