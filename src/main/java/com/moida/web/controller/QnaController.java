package com.moida.web.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;
import com.moida.web.entity.Qna;
import com.moida.web.service.QnaService;

@Controller("Question")
public class QnaController 
{

	@Autowired
	private QnaService qnaService;
	
	@PostMapping("/get-qna-list")
	@ResponseBody
	public String getQnaList() 
	{
//		System.out.println("모두가져가는 큐엔에이 들어옴");
		List<Qna> qnaList = qnaService.getQnaList();
//		System.out.println("모두가져가는 큐엔에이 데이터 out");
		
		Gson gson = new Gson();
		String json = gson.toJson(qnaList);
		
		return json;
	}
	
	
	@PostMapping("/delete-qna-list")
	@ResponseBody
	public int deleteQnaList(String idd) 
	{
		int id = Integer.parseInt(idd);
	//	System.out.println("아나 :"+idd);
		
	//	System.out.println("삭제하는 큐엔에이 들어옴");
		int affect = qnaService.deleteQnaList(id);
	//	System.out.println("모두가져가는 큐엔에이 데이터 out");
		
		
		return affect;
	}
	
	@PostMapping("/update-qna-list")
	@ResponseBody
	public int updateQnaList(String idd,String title,String content) 
	{
		int id = Integer.parseInt(idd);
//		System.out.println("id :"+idd);
//		System.out.println("title :"+title);
//		System.out.println("content :"+content);
		
//		System.out.println("수정하는 큐엔에이 들어옴");
		int affect = qnaService.updateQnaList(id, title, content);
//		System.out.println("수정하는 큐엔에이 out");
		
		
		return affect;
	}
	
	@PostMapping("/insert-qna-list")
	@ResponseBody
	public String insertQnaList(String title,String content) 
	{
		
//		System.out.println("title :"+title);
//		System.out.println("content :"+content);
		
//		System.out.println("인서트하는 큐엔에이 들어옴");
		int affect = qnaService.insertQnaList(title, content);
//		System.out.println("인서트하는 큐엔에이 out");
		
//		System.out.println("리밋 전");
		Qna qnaLimit = qnaService.getQnaLimit();
//		System.out.println("리밋 후");
//		System.out.println(qnaLimit);
		
		Gson gson = new Gson();
		String json = gson.toJson(qnaLimit);
		
		return json;
	}
	
	@PostMapping("/search-qna-list")
	@ResponseBody
	public String searchQnaList(String searchWord) 
	{
		
//		System.out.println("searchWord :"+searchWord);
		
//		System.out.println("서치 전");
		List<Qna> searchQnaList = qnaService.searchQnaList(searchWord);
//		System.out.println("서치 후");
//		System.out.println(searchQnaList);
		
		Gson gson = new Gson();
		String json = gson.toJson(searchQnaList);
		
		return json;
	}
	
}
