package com.moida.web.controller.member;


import java.io.FileNotFoundException;
import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
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
import com.moida.web.entity.CrowdNotice;
import com.moida.web.entity.Posts;
import com.moida.web.entity.PostsContent;
import com.moida.web.entity.Tag;
import com.moida.web.service.CrowdService;
import com.moida.web.service.MoidaBoardService;
import com.moida.web.service.MoidaCategoryService;
import com.moida.web.service.MoidaPostsService;
import com.moida.web.service.MoidaTagService;


@Controller("memberCrowd")
@RequestMapping("/crowd/")
public class CrowdController {
	
		
	@Autowired
	public CrowdService crowdService;
	
	@Autowired
	public MoidaBoardService boardService;
	
	@Autowired
	public MoidaPostsService postsService;
	
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
	
	
	@GetMapping("boardreg")
	public String reg(Model model, int crowd) {
		List<Board> boardlist = boardService.getBoardListType1(crowd);
		Board boardType2 = boardService.getBoardType2(crowd);
		
		model.addAttribute("blist", boardlist);
		model.addAttribute("boardType2", boardType2);
		return "crowd.boardreg";
	}
	

	@PostMapping("boardreg")
	@ResponseBody
	public String boardreg (
			int boardId,
			String title,
			String jsonContent,
			String mainImg,
			Model model, Principal principal) {
		
		Posts posts = new Posts(boardId, title, mainImg, principal.getName());

        Gson gson = new Gson();      
        JsonParser parser = new JsonParser();
        JsonElement elem = parser.parse(jsonContent);
        JsonArray elemArr = elem.getAsJsonArray();
        List<PostsContent> postsContentList = new ArrayList<PostsContent>();
 
        for (int i = 0; i < elemArr.size(); i++) {
            PostsContent content = gson.fromJson(elemArr.get(i), PostsContent.class);
            postsContentList.add(content);
		}
             
		return postsService.regPosts(posts, postsContentList)+"";
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
		model.addAttribute("categoryName",categoryName);
		model.addAttribute("tagName", categoryTagName);
		return "crowd.create";




	}
}

