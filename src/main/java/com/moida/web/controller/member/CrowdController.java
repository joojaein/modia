package com.moida.web.controller.member;


import java.io.FileNotFoundException;
import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.moida.web.entity.CrowdBoard;
import com.moida.web.entity.CrowdNotice;
import com.moida.web.service.CrowdService;


@Controller("memberCrowd")
@RequestMapping("/crowd/")
public class CrowdController {
	
	@Autowired
	private SqlSessionTemplate session;
		
	@Autowired
	public CrowdService crowdService;
	

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
	public String reg(Model model) {
		List<CrowdBoard> boardlist = crowdService.getBoardList();
		model.addAttribute("blist", boardlist);
		return "crowd.boardreg";
	}
	@PostMapping("boardreg")
	public String boardreg (CrowdBoard board, Model model) {
		board.setWriterId("chlwl");
		board.setBoardId(2);
		int affected = crowdService.insertBoardReg(board);
		model.addAttribute("result", board);
		System.out.println("id"+board.getBoardId());
		System.out.println("제목"+board.getTitle());
		System.out.println("내용"+board.getContent());
		System.out.println("작성자"+board.getWriterId());
		return "redirect:board";
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
	
	@RequestMapping("create")
	public String create(
			@RequestParam(name="t") String title,
			Model model) throws FileNotFoundException {		
		model.addAttribute("href","createCategory");
		model.addAttribute("title",title);
		return "crowd.create";




	}
}

