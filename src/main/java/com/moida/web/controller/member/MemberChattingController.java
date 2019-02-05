package com.moida.web.controller.member;

import java.security.Principal;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;
import com.moida.web.entity.MemberChatting;
import com.moida.web.service.MemberChattingService;

@Controller("memberChatting")
@RequestMapping("/member/")
public class MemberChattingController 
{
	
	@Autowired
	private MemberChattingService memberChattingService;
	
	
	
	@PostMapping("get-memberChatting")
	@ResponseBody
	public String getMemberChatting(String friendId) 
	{
		System.out.println("왓나"+friendId);
		
		String myid = "chlwl";
		
		List<MemberChatting> memberChattingList = memberChattingService.getMemberChattingList(friendId,myid);
		
		System.out.println("나왔나?");
		
		System.out.println(memberChattingList);
		
		
		Gson gson = new Gson();
		String json = gson.toJson(memberChattingList);
		
		return json;
	}
	
	@PostMapping("insert-memberChatting")
	@ResponseBody
	public String insertMemberChatting(MemberChatting memberChatting,String content,String friendId, Principal principal) 
	{
		
		
		memberChatting.setContent(content);
		memberChatting.setSenderId(principal.getName());
		memberChatting.setReceiverId(friendId);
		
		int affected = memberChattingService.insertMemberChatting(memberChatting);
		
		
		
		return "채팅 insert 완료";
	}
	
}
