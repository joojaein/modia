package com.moida.web.controller.member;

import java.security.Principal;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;
import com.moida.web.entity.MemberChat;
import com.moida.web.service.MemberChattingService;

@Controller("memberChatting")
@RequestMapping("/member/")
public class MemberChattingController 
{
	
	@Autowired
	private MemberChattingService memberChattingService;
	
	
	// 접속한 본인과 친구의 아이디를 이용해서 그 친구와 한 대화목록을 가져오기 위한 POST
	@PostMapping("get-memberChatting")
	@ResponseBody
	public String getMemberChatting(String friendId, Principal principal) 
	{
//		System.out.println("왓나"+friendId);
		
		String myid = principal.getName();
		
		List<MemberChat> memberChattingList = memberChattingService.getMemberChattingList(friendId,myid);
		
//		System.out.println("나왔나?");
		
//		System.out.println(memberChattingList);
		
		
		Gson gson = new Gson();
		String json = gson.toJson(memberChattingList);
		
		return json;
	}
	
	
	
	// 접속한 본인과 친구의 아이디를 이용해서 그 친구와 한 대화목록을 가져오기 위한 POST
		@PostMapping("getMemberChatList")
		@ResponseBody
		public String getMemberChatList(String friendId, Principal principal) 
		{
	//		System.out.println("여기는 chat리스트를 가져올 post 이다.");
	//		System.out.println("왓나"+friendId);
			
			String myid = principal.getName();
			
			List<MemberChat> memberChattingList = memberChattingService.getMemberChattingList(friendId,myid);
			
//			System.out.println("나왔나?");
			
//			System.out.println(memberChattingList);
			
			
			Gson gson = new Gson();
			String json = gson.toJson(memberChattingList);
			
			return json;
		}
		
		// 접속한 본인과 친구의 아이디를 이용해서 그 친구와 한 대화목록을 가져오기 위한 POST2
		@PostMapping("get-memberChatting2")
		@ResponseBody
		public String getMemberChatting2(String friendId, Principal principal) 
		{
	//		System.out.println("222222222왓나"+friendId);
			
			String myid = principal.getName();
			
			List<MemberChat> memberChattingList = memberChattingService.getMemberChattingList(friendId,myid);
			
//			System.out.println("나왔나?");
			
//			System.out.println(memberChattingList);
			
			
			Gson gson = new Gson();
			String json = gson.toJson(memberChattingList);
			
			return json;
		}
	
		// 접속한 본인과 관리자와의 대화목록을 가져오기 위한 POST333 
				@PostMapping("get-memberAdminChatting")
				@ResponseBody
				public String getMemberAdminChatting(Principal principal) 
				{
	//				System.out.println("333333333333333왓나"+"admin");
					String admin = "admin";
					
					String myid = principal.getName();
					
					List<MemberChat> memberChattingList = memberChattingService.getMemberChattingList(myid,admin);
					
	//				System.out.println("나왔나?");
					
	//				System.out.println(memberChattingList);
					
					
					Gson gson = new Gson();
					String json = gson.toJson(memberChattingList);
					
					return json;
				}
				
			// 접속한 사람이 Admin 일때 쓰는 대화한 모든 회원 들의 대화 리스트 

		
	@PostMapping("insert-memberChatting")
	@ResponseBody
	public String insertMemberChatting(String myId,String friendId,String content ) 
	{
		
	//	System.out.println("send : "+myId);
	//	System.out.println("send : "+friendId);
	//	System.out.println("send : "+content);
		
	//	System.out.println("여기는 insert 전");
		
		int affected = memberChattingService.insertMemberChatting(myId,friendId,content);
		
	//	System.out.println("여기는 insert 후");
		
		return "채팅 insert 완료";
	}
	
}