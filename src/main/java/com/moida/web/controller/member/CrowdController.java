package com.moida.web.controller.member;


import java.io.File;
import java.io.FileNotFoundException;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.servlet.http.HttpServletResponse;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;

import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonParser;
import com.moida.web.entity.Board;
import com.moida.web.entity.Category;
import com.moida.web.entity.Cmt;
import com.moida.web.entity.CmtListView;
import com.moida.web.entity.Cmtcnt;
import com.moida.web.entity.Crowd;
import com.moida.web.entity.CrowdSimpleDataView;
import com.moida.web.entity.FriendDataView;
import com.moida.web.entity.Good;
import com.moida.web.entity.MemberInfoListView;
import com.moida.web.entity.Schedule;
import com.moida.web.entity.Posts;
import com.moida.web.entity.PostsContent;
import com.moida.web.entity.PostsListView;
import com.moida.web.entity.RprtCrowd;
import com.moida.web.entity.Tag;
import com.moida.web.service.MoidaBoardService;
import com.moida.web.service.MoidaCategoryService;
import com.moida.web.service.MoidaCmtService;
import com.moida.web.service.MoidaCrowdService;
import com.moida.web.service.MoidaFriendService;
import com.moida.web.service.MoidaMemberService;
import com.moida.web.service.MoidaPostsService;
import com.moida.web.service.MoidaTagService;

@Controller("memberCrowd")
@RequestMapping("/crowd/")
public class CrowdController {

	@Autowired
	public MoidaMemberService memberservice;
	@Autowired
	public MoidaCrowdService crowdService;

	@Autowired
	public MoidaBoardService boardService;

	@Autowired
	public MoidaPostsService postsService;

	@Autowired
	public MoidaCmtService cmtService; 

	@Autowired
	public MoidaFriendService friendService;
	
	
	@PostMapping("memberHead")
	@ResponseBody
	public String myinfo(Principal principal) {
		
		List<FriendDataView> fdv = friendService.getFriendData(principal.getName());
		
		Gson gson = new Gson(); 
		String json = gson.toJson(fdv);
		
		return json;
		
	}
	
	

	@GetMapping("notice")
	public String notice(
			@RequestParam(name="crowd") Integer crowdId,
			Integer boardId,
			Model model) {
		CrowdSimpleDataView crowd = crowdService.getCrowdSimpleDataView(crowdId);
		List<PostsListView> postsView = postsService.getNoticePostsView(crowdId);
		List<Board> boardList = boardService.getBoardListType0(crowdId);
		List<MemberInfoListView> milv = crowdService.getMemberInfoListView(crowdId);
		model.addAttribute("milv", milv);		
		model.addAttribute("plist", postsView);		
		model.addAttribute("crowd", crowd);
		model.addAttribute("bList", boardList);

		return "crowd.notice";
	}
	

	@GetMapping("ndetail")
	   @PreAuthorize("isAuthenticated()")
	   public String noticedetail(
	         @RequestParam(name="crowd") Integer crowdId,
	         @RequestParam(name="id") Integer postsId,
	         Integer id,
	         Principal principal,
	         Model model
	         ) {
	      CrowdSimpleDataView crowd = crowdService.getCrowdSimpleDataView(crowdId);
	      List<PostsContent> postscontent = postsService.getPostsContent(postsId);
	      PostsListView posts = postsService.getPostsinfoView(id);
	      List<CmtListView> cmt = cmtService.getCmtList(postsId);
	      List<MemberInfoListView> milv = crowdService.getMemberInfoListView(crowdId);
	      MemberInfoListView memberRole = crowdService.getMemberInfoRoleListView(crowdId, principal.getName());
	      List<Good> goodList = postsService.getGood(postsId);
	      int isGood = 0;
	      for (int i = 0; i < goodList.size(); i++) {
	         if(goodList.get(i).getMemberId().equals(principal.getName())) {
	            isGood=1;
	         }
	      }
	      String userId = principal.getName();   
	      int groupRole = crowdService.getCrowdGroupRole(crowdId, userId);
	      int affected = postsService.updatehit(id);

	      model.addAttribute("isGood", isGood);
	      model.addAttribute("mRole", memberRole);
	      model.addAttribute("milv", milv);      
	      model.addAttribute("crowd", crowd);
	      model.addAttribute("cmt",cmt);
	      model.addAttribute("pc", postscontent);
	      model.addAttribute("posts", posts);
	      model.addAttribute("uid",userId);
	      model.addAttribute("groupRole", groupRole);
	      return "crowd.ndetail";
	   }

	@GetMapping("board")
	public String board(
			@RequestParam(name="crowd") Integer crowdId,
			Integer boardId,
			Model model) {
		CrowdSimpleDataView crowd = crowdService.getCrowdSimpleDataView(crowdId);
		List<PostsListView> postsView = postsService.getPostsListView1(crowdId);
		List<Board> boardList = boardService.getBoardListType1(crowdId);
		List<MemberInfoListView> milv = crowdService.getMemberInfoListView(crowdId);
		model.addAttribute("milv", milv);		
		model.addAttribute("plist", postsView);		
		model.addAttribute("crowd", crowd);
		model.addAttribute("bList", boardList);

		return "crowd.board";
	}

	@PostMapping("board")
	@ResponseBody
	public String boardpost(@RequestParam(name="crowd")Integer crowdId, 
			Integer boardId,
			Model model){
		List<PostsListView> postsList =null;
		if(boardId != null ) {
			postsList = postsService.getPostsListView2(crowdId, boardId);
		}else {
			postsList = postsService.getPostsListView1(crowdId);
		}

		Gson gson = new Gson(); 
		String json = gson.toJson(postsList);
		return json;
	}
	
	@PostMapping("boardsearch")
	@ResponseBody
	public String boardSerach(Integer crowdId,Integer boardId ,String keyword ) {
		System.out.println("crowd"+crowdId+"게시판"+ boardId +"검색어"+ keyword);
		
		System.out.println("boardId"+boardId);
		List<PostsListView> psearch =null;
		if(boardId == null ) {
			psearch = postsService.getPostsSearchListView1(crowdId, keyword);
		}else {
			psearch = postsService.getPostsSearchListView2(crowdId,boardId, keyword);
		}
		
		System.out.println("리스트"+psearch);
		Gson gson = new Gson();
		String json = gson.toJson(psearch);
		System.out.println("json"+json);
		return json;
	}

	@GetMapping("bdetail")
	@PreAuthorize("isAuthenticated()")
	public String boarddetail(
			@RequestParam(name="crowd") Integer crowdId,
			@RequestParam(name="id") Integer postsId,
			Integer id,
			Principal principal,
			Model model,
			String memberId
			) {
		CrowdSimpleDataView crowd = crowdService.getCrowdSimpleDataView(crowdId);
		List<PostsContent> postscontent = postsService.getPostsContent(postsId);
		PostsListView posts = postsService.getPostsinfoView(id);
		List<CmtListView> cmt = cmtService.getCmtList(postsId);
		List<MemberInfoListView> milv = crowdService.getMemberInfoListView(crowdId);
		MemberInfoListView memberRole = crowdService.getMemberInfoRoleListView(crowdId, principal.getName());
		List<Good> goodList = postsService.getGood(postsId);
		int isGood = 0;
		for (int i = 0; i < goodList.size(); i++) {
			if(goodList.get(i).getMemberId().equals(principal.getName())) {
				isGood=1;
			}
		}
		String userId = principal.getName();	
		int groupRole = crowdService.getCrowdGroupRole(crowdId, userId);
		int affected = postsService.updatehit(id);

		model.addAttribute("isGood", isGood);
		model.addAttribute("mRole", memberRole);
		model.addAttribute("milv", milv);		
		model.addAttribute("crowd", crowd);
		model.addAttribute("cmt",cmt);
		model.addAttribute("pc", postscontent);
		model.addAttribute("posts", posts);
		model.addAttribute("uid",userId);
		model.addAttribute("groupRole", groupRole);
		return "crowd.bdetail";
	}
	
	@PostMapping("boardGood")
	@ResponseBody
	public String boardGood(Principal principal, String memberId,Integer postsId) {
		
		memberId = principal.getName();
		
		Good good = new Good(memberId, postsId);
		 int affecte = postsService.insertGood(good);
		//deleteGood
		Gson gson = new Gson();
		String json = gson.toJson(good);
		System.out.println("good"+json);
		return json;
	}
	
	@PostMapping("boarddelGood")
	@ResponseBody
	public String boarddelGood(Principal principal, String memberId,Integer postsId) {
		
		memberId = principal.getName();
		
		Good good = new Good(memberId, postsId);
		 int affecte = postsService.deleteGood(good);
		//deleteGood
		Gson gson = new Gson();
		String json = gson.toJson(good);
		System.out.println("delgood"+json);
		return json;
	}

	@PostMapping("detail-comment")
	@ResponseBody
	public String boarddetailcomment(
			String postsId,
			String content,
			Principal principal
			) {	
		
		int postsId2 = Integer.parseInt(postsId);
		String writerId = principal.getName();
		int affected = cmtService.insertCmt(postsId2, content, writerId);
		Cmt rc =  cmtService.getresetComment(Integer.parseInt(postsId), writerId);

		Gson gson = new Gson(); 
		String json = gson.toJson(rc);
		System.out.println(rc);
		return json;
	}


	@PostMapping("editcomment")
	@ResponseBody
	public String boardeditcomment(
			Integer id,
			Integer postsId,
			String content,
			Principal principal
			) {	
		
		int affected = cmtService.updateCmt(id, content);
		
		String writerId = principal.getName();
		Cmt rc =  cmtService.getresetComment(postsId, writerId);
		Gson gson = new Gson(); 
		String json = gson.toJson(rc);
		System.out.println("rc"+rc);
		return json;
	}

	@PostMapping("delcomment")
	@PreAuthorize("isAuthenticated()")
	@ResponseBody
	public String boarddeletecomment(Integer id) {	
	
		return cmtService.deleteCmt(id)+"";
	}

	@PostMapping("boarddelete")
	public String deletePosts( Integer id, Integer crowdId, Integer type, String board) {
		int affected = postsService.deletePosts(id);

	
		return "redirect:"+board+"?t="+type+"&crowd="+crowdId;
	}

	@GetMapping("boardreg")
	public String reg(
			@RequestParam(name="crowd") Integer crowdId,
			Model model, Principal principal) {
		List<Board> boardlist = boardService.getBoardListType1(crowdId);
		CrowdSimpleDataView crowd = crowdService.getCrowdSimpleDataView(crowdId);
		List<MemberInfoListView> milv = crowdService.getMemberInfoListView(crowdId);

		Board boardType0 = boardService.getBoardType0(crowdId);
		Board boardType2 = boardService.getBoardType2(crowdId);

		String userId = principal.getName();
		int groupRole = crowdService.getCrowdGroupRole(crowdId, userId);
		model.addAttribute("milv", milv);		
		model.addAttribute("blist", boardlist);
		model.addAttribute("crowd", crowd);
		model.addAttribute("boardType0", boardType0);
		model.addAttribute("boardType2", boardType2);
		model.addAttribute("groupRole", groupRole);

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

	@GetMapping("boardedit")
	public String boardEdit(
			@RequestParam(name="crowd") Integer crowdId,
			@RequestParam(name="posts") Integer postsId,
			Model model, Principal principal) {


		Posts posts = postsService.getPosts(postsId);
		List<Board> boardlist = boardService.getBoardListType1(crowdId);
		List<PostsContent> contentList = postsService.getPostsContent(postsId);
		CrowdSimpleDataView crowd = crowdService.getCrowdSimpleDataView(crowdId);

		Board boardType0 = boardService.getBoardType0(crowdId);
		Board boardType2 = boardService.getBoardType2(crowdId);

		String userId = principal.getName();
		int groupRole = crowdService.getCrowdGroupRole(crowdId, userId);

		model.addAttribute("crowd", crowd);
		model.addAttribute("blist", boardlist);
		model.addAttribute("boardType0", boardType0);
		model.addAttribute("boardType2", boardType2);
		model.addAttribute("groupRole", groupRole);

		model.addAttribute("posts", posts);
		model.addAttribute("contentList", contentList);

		return "crowd.boardedit";
	}



	@PostMapping("boardedit")
	@ResponseBody
	public String boardedit (
			int postsId,
			int boardId,
			String title,
			String content,
			String jsonContent,
			String mainImg,
			Model model, Principal principal, HttpServletRequest req) {

		Posts posts = new Posts(postsId, boardId, title, content, mainImg, principal.getName());

		List<PostsContent> contentList = postsService.getPostsContent(postsId);

		for (int i = 0; i < contentList.size(); i++) {
			if(!ObjectUtils.isEmpty(contentList.get(i).getSrc())) {
				String path = req.getServletContext().getRealPath("/crowd-postsImg/"+contentList.get(i).getSrc());
				File file = new File(path);      
				if(file.exists()){ 
					file.delete(); 
				}
			}
		}

		Gson gson = new Gson();      
		JsonParser parser = new JsonParser();
		JsonElement elem = parser.parse(jsonContent);
		JsonArray elemArr = elem.getAsJsonArray();
		List<PostsContent> postsContentList = new ArrayList<PostsContent>();     

		for (int i = 0; i < elemArr.size(); i++) {
			PostsContent postcontent = gson.fromJson(elemArr.get(i), PostsContent.class);
			postsContentList.add(postcontent);
		}

		return postsService.updatePosts(posts, postsContentList)+"";
	}


	@GetMapping("calendar")
	public String calendar(
			@RequestParam(name="crowd") Integer crowdId,Principal principal,
			Model model) {
		List<Schedule> schedule = crowdService.getScheduleList(crowdId);
		CrowdSimpleDataView crowd = crowdService.getCrowdSimpleDataView(crowdId);
		List<MemberInfoListView> milv = crowdService.getMemberInfoListView(crowdId);
		MemberInfoListView memberRole = crowdService.getMemberInfoRoleListView(crowdId, principal.getName());
		model.addAttribute("mRole", memberRole);
		model.addAttribute("milv", milv);		
		model.addAttribute("schedule", schedule);
		model.addAttribute("crowd", crowd);
		Gson gson = new Gson(); 
		String json = gson.toJson(schedule);
		return "crowd.calendar"; 
	}


	@PostMapping("calendar")
	@ResponseBody
	public String calendarinsert(
			Integer crowdId,
			String startDate,
			String endDate,
			String title,
			String content
			) throws Exception {

		Date start = new SimpleDateFormat("yyyy-MM-dd").parse(startDate);
		Date end = new SimpleDateFormat("yyyy-MM-dd").parse(endDate);
		end.setDate(end.getDate()+1);

		Schedule schedule = new Schedule(crowdId, start, end, title, content);

		Gson gson = new Gson(); 
		String json = gson.toJson(schedule);
		int affected = crowdService.insertSchedule(schedule);
		return json;
	}


	@PostMapping("calendarlist-update")
	public String updateCalendarList(Integer crowdId, String startDate, String endDate, String title, String content, int id) throws ParseException {
		Date start = new SimpleDateFormat("yyyy-MM-dd").parse(startDate);
		Date end = new SimpleDateFormat("yyyy-MM-dd").parse(endDate);
		end.setDate(end.getDate()+1);
		Schedule schedule = new Schedule(crowdId, start, end, title, content, id);


		return crowdService.updateCalendarList(schedule)+"";
	}

	@PostMapping("calendarlist-delete")
	public String deleteCalendar(int id) {
		int affected = crowdService.deleteCalendarList(id);
		return affected+"";

	}


	@GetMapping("album")
	public String album(
			@RequestParam(name="crowd") Integer crowdId,
			Model model) {		
		CrowdSimpleDataView crowd = crowdService.getCrowdSimpleDataView(crowdId);
		List<PostsListView> albumlist = postsService.getAlbumPostsView(crowdId);
		List<MemberInfoListView> milv = crowdService.getMemberInfoListView(crowdId);
		
		model.addAttribute("milv", milv);		
		model.addAttribute("crowd", crowd);
		model.addAttribute("alist", albumlist);
		return "crowd.album";
	}
	
	@PostMapping("albumsearch")
	@ResponseBody
	public String album(Integer crowdId, String keyword) {
		List<PostsListView> albumsearchlist = postsService.getalbumSearchListView(crowdId, keyword);
		System.out.println("keyword"+keyword);
		System.out.println("crowdId"+crowdId);
		Gson gson = new Gson();
		String json = gson.toJson(albumsearchlist);
		System.out.println("json"+json);
	return json;
	}
	
	
	@GetMapping("adetail")
	public String albumdetail(
			@RequestParam(name="crowd") Integer crowdId,
			@RequestParam(name="id") Integer postsId,
			Integer id,
			Principal principal,
			Model model
			) {
		CrowdSimpleDataView crowd = crowdService.getCrowdSimpleDataView(crowdId);
		List<PostsContent> postscontent = postsService.getPostsContent(postsId);
		PostsListView posts = postsService.getPostsinfoView(id);
		List<CmtListView> cmt = cmtService.getCmtList(postsId);
		Cmtcnt cmtcnt = cmtService.getCmthit(postsId);
		List<MemberInfoListView> milv = crowdService.getMemberInfoListView(crowdId);
		List<Good> goodList = postsService.getGood(postsId);
		int isGood = 0;
		for (int i = 0; i < goodList.size(); i++) {
			if(goodList.get(i).getMemberId().equals(principal.getName())) {
				isGood=1;
			}
		}
		model.addAttribute("isGood", isGood);
		model.addAttribute("milv", milv);		
		int affected = postsService.updatehit(id);
		model.addAttribute("cmtcnt", cmtcnt);
		model.addAttribute("crowd", crowd);
		model.addAttribute("cmt",cmt);
		model.addAttribute("pc", postscontent);
		model.addAttribute("posts", posts);
		model.addAttribute("uid",principal.getName());
		return "crowd.adetail";
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
	public String checkId(Principal principal,String url,HttpServletRequest request, HttpSession session) {
		String answer = "";
		if(principal == null) {
			request.getSession(true).setAttribute("preurl", url);
			answer = "no";
		}else {
			request.getSession(true).setAttribute("preurl", url);
			String preurl = (String)session.getAttribute("preurl");
			answer = preurl;
		}
		return answer;
	}

	@RequestMapping("request-join")
	@ResponseBody
	public String requestJoin(@RequestParam(name="crowd") String crowdIdStr,
			HttpServletResponse response){
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


	@GetMapping("groupchat")
	public String groupChatting(@RequestParam(name="crowd") Integer crowdId, Model model) 
	{
		CrowdSimpleDataView crowd = crowdService.getCrowdSimpleDataView(crowdId);
		model.addAttribute("crowd", crowd);
		return "crowd.groupchat";
	}

	@PostMapping("get-groupMyId") 
	@ResponseBody
	public String getGroupMyId(Principal principal)  
	{
		String getGroupMyId = principal.getName();

		Gson gson = new Gson();
		String json = gson.toJson(getGroupMyId);

		return json;
	}



	@RequestMapping("set-rprt-crowd")
	@ResponseBody
	public String setRprtCrowd(String crowdIdStr, String title, String content, Principal principal) {
		int crowdId = Integer.parseInt(crowdIdStr);
		String userId = principal.getName();
		RprtCrowd rprtCrowd = new RprtCrowd(crowdId, userId, title, content);
		return crowdService.insertRprtCrowd(rprtCrowd)+"";
	}

	@RequestMapping("get-rprt-crowd")
	@ResponseBody
	public String getRprtCrowd(String crowdIdStr, Principal principal) {
		int crowdId = Integer.parseInt(crowdIdStr);
		String userId = principal.getName();
		RprtCrowd rprtCrowd = new RprtCrowd(crowdId, userId);
		return crowdService.getRprtCrowdCnt(rprtCrowd)+"";
	}

	@RequestMapping("del-rprt-crowd")
	@ResponseBody
	public String deleteRprtCrowd(String crowdIdStr, Principal principal) {
		int crowdId = Integer.parseInt(crowdIdStr);
		String userId = principal.getName();
		RprtCrowd rprtCrowd = new RprtCrowd(crowdId, userId);
		return crowdService.deleteRprtCrowd(rprtCrowd)+"";
	}

}

