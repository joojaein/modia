package com.moida.web.controller.member;


import java.io.FileNotFoundException;
import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.moida.web.entity.Board;
import com.moida.web.entity.Category;
import com.moida.web.entity.CrowdBoard;
import com.moida.web.entity.CrowdMemberRole;
import com.moida.web.entity.CrowdNotice;
import com.moida.web.entity.CrowdSimpleDataView;
import com.moida.web.entity.Schedule;
import com.moida.web.entity.Posts;
import com.moida.web.entity.PostsContent;
import com.moida.web.entity.Tag;
import com.moida.web.service.MoidaBoardService;
import com.moida.web.service.MoidaCategoryService;
import com.moida.web.service.MoidaCrowdService;
import com.moida.web.service.MoidaPostsService;
import com.moida.web.service.MoidaTagService;


@Controller("memberCrowd")
@RequestMapping("/crowd/")
public class CrowdController {


	@Autowired
	public MoidaCrowdService crowdService;

	@Autowired
	public MoidaBoardService boardService;
	
	@Autowired
	public MoidaPostsService postsService;
	
	@RequestMapping("notice")
	public String notice(
			@RequestParam(name="crowd") Integer crowdId,
			Model model) {		
		List<CrowdNotice> list = crowdService.getNoticeList(crowdId);
		CrowdNotice listId = crowdService.getNotice(crowdId);
		CrowdSimpleDataView crowd = crowdService.getCrowdSimpleDataView(crowdId);
		model.addAttribute("listId", listId);
		model.addAttribute("list", list);
		model.addAttribute("crowd", crowd);
		return "crowd.notice";
	}

	@RequestMapping("board")
	public String board(
			@RequestParam(name="crowd") Integer crowdId,
			Model model) {
		List<CrowdBoard> boardlist = crowdService.getBoardList(crowdId);
		model.addAttribute("blist", boardlist);
		CrowdSimpleDataView crowd = crowdService.getCrowdSimpleDataView(crowdId);
		model.addAttribute("crowd", crowd);
		return "crowd.board";
	}

	@RequestMapping("{id}")
	public String detail(
			@PathVariable("id") Integer id
			,Model model) {

		return "crowd.board.detail";
	}

	@GetMapping("boardreg")
	public String reg(
			@RequestParam(name="crowd") Integer crowdId,
			Model model) {
		List<Board> boardlist = boardService.getBoardListType1(crowdId);
		CrowdSimpleDataView crowd = crowdService.getCrowdSimpleDataView(crowdId);

		model.addAttribute("blist", boardlist);
		model.addAttribute("crowd", crowd);
		return "crowd.boardreg";
	}
	

	@PostMapping("boardreg")
	@ResponseBody
	public String boardreg (
			int boardId,
			String title,
			String content,
			String jsonContent,
			String mainImg,
			Model model, Principal principal) {
		
		Posts posts = new Posts(boardId, title, content, mainImg, principal.getName());

        Gson gson = new Gson();      
        JsonParser parser = new JsonParser();
        JsonElement elem = parser.parse(jsonContent);
        JsonArray elemArr = elem.getAsJsonArray();
        List<PostsContent> postsContentList = new ArrayList<PostsContent>();
 
        for (int i = 0; i < elemArr.size(); i++) {
            PostsContent postcontent = gson.fromJson(elemArr.get(i), PostsContent.class);
            postsContentList.add(postcontent);
		}
             
		return postsService.regPosts(posts, postsContentList)+"";
}

	@GetMapping("calendar")
	public String calendar(
			@RequestParam(name="crowd") Integer crowdId,
			Model model) {
		CrowdBoard boards = crowdService.getBoards(crowdId);
		List<Schedule> schedule = crowdService.getScheduleList();
		CrowdSimpleDataView crowd = crowdService.getCrowdSimpleDataView(crowdId);
		model.addAttribute("board", boards);
		model.addAttribute("schedule", schedule);
		model.addAttribute("crowd", crowd);
		return "crowd.calendar"; 
	}
	
	@PostMapping("calendar")
	public String calendarreg(
			Integer crowdId,
			String startDate,
			String endDate,
			String title,
			String content,
			Model model) throws Exception {
		System.out.println(startDate);
		Date start = new SimpleDateFormat("yyyy-MM-dd").parse(startDate);
		Date end = new SimpleDateFormat("yyyy-MM-dd").parse(endDate);

		Schedule schedule = new Schedule(crowdId, start, end, title, content);
		return	crowdService.insertSchedule(schedule)+"";
	}
	
	@PostMapping("calendarlist-update")
	public String updateCalendarList(int crowdId, String startDate, String endDate, String title, String content, int id) throws ParseException {
		Date start = new SimpleDateFormat("yyyy-MM-dd").parse(startDate);
		Date end = new SimpleDateFormat("yyyy-MM-dd").parse(endDate);
		
		Schedule schedule = new Schedule(crowdId, start, end, title, content, id);
		return crowdService.updateCalendarList(schedule)+"";
	}
	
	@PostMapping("calendarlist-delete")
	public String deleteCalendar(int id) {
		int affected = crowdService.deleteCalendarList(id);
		return "crowd.calendar";
		
	}
	
	
	@RequestMapping("album")
	public String album(
			@RequestParam(name="crowd") Integer crowdId,
			Model model) {		
		CrowdSimpleDataView crowd = crowdService.getCrowdSimpleDataView(crowdId);
		model.addAttribute("crowd", crowd);
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
		model.addAttribute("categoryName",categoryName);
		model.addAttribute("tagName", categoryTagName);
		return "crowd.create";

	}
	
	
	@RequestMapping("request-join")
	@ResponseBody
	public String requestJoin(@RequestParam(name="crowd") String crowdIdStr,
			HttpServletResponse response) throws IOException {
		int crowdId = Integer.parseInt(crowdIdStr);

		SecurityContext context = SecurityContextHolder.getContext(); 
	    Authentication authentication = context.getAuthentication(); 
	    if(authentication.getPrincipal().equals("anonymousUser")) {
			return "anonymousUser";
	    }
	    
	    User user = (User) authentication.getPrincipal();
        String userId = user.getUsername();
		
        return crowdService.requestCrowdJoin(crowdId, userId)+"";
	}
	
}

