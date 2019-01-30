package com.moida.web.controller.member;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

@Controller("memberCrowd")
@RequestMapping("/crowd/")
public class CrowdController {

	@RequestMapping("notice")
	public String notice() {		

		return "crowd.notice";
	}
	
	@RequestMapping("board")
	public String board() {		
		
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
	
	@RequestMapping("create")
	public String create(
			@RequestParam(name="t") String title,
			Model model) throws FileNotFoundException {		
		model.addAttribute("href","createCategory");
		model.addAttribute("title",title);
		return "crowd.create";
	}
}