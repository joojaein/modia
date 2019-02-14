package com.moida.web.controller.admin;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;
import com.moida.web.entity.AdminChatMemberView;
import com.moida.web.entity.MemberChat;
import com.moida.web.entity.MemberChattingViewF;
import com.moida.web.service.FriendService;
import com.moida.web.service.MemberChattingService;

@Controller("adminfriend")
@RequestMapping("/admin/")
public class AdminChatMemberController 
{
	
	@Autowired
	private FriendService friendService;

	@Autowired
	private MemberChattingService memberChattingService;
	
	
	@PostMapping("get-myId")
	@ResponseBody
	public String getMyId(Principal principal) 
	{
		String gomyid=principal.getName();
		
		Gson gson = new Gson();
		String json = gson.toJson(gomyid);
		
		
		return json;
	}
	
	
//----------------------------------Admin 일때 쓰는 메소드들-----------------------------------------------	
	
	//내가 Admin 일 경우 회원들과 마지막으로 대화한 한 줄을 가져오기 위한 메소드
		@PostMapping("get-imAdminLimit")
		@ResponseBody
		public String getImAdminLimit() 
		{
			
//			System.out.println("당신은 어디민????!?!?!?!?!?!");
			//Admin의 아이디를 이용해서 한번이라도 대화를 한 유저의 이름을 가져오는 것
			List<AdminChatMemberView> getMemberList = friendService.getadMemberList();
			
//			System.out.println(getMemberList);
			
			List<List<MemberChattingViewF>> getAdminLimitDatas = new ArrayList<List<MemberChattingViewF>>();
			
			String admin = "admin";
			
			
			for (AdminChatMemberView mm : getMemberList) 
			{
				List<MemberChattingViewF> getAdminLimitData = null;
//				System.out.println("AdminLimit 들어가는 : "+ mm.getSenderId());
				getAdminLimitData = friendService.getLastTalkData(admin, mm.getSenderId());
//				System.out.println("AdminLimit 나왔다");
				
				getAdminLimitDatas.add(getAdminLimitData);
			}
			
//			System.out.println("최종적으로 나온 친구 : "+getAdminLimitDatas);
			
			
			
	//		System.out.println("admin 최종적으로 나온것 :"+getImAdminLimitList);

			
			
			Gson gson = new Gson();
			String json = gson.toJson(getAdminLimitDatas);
			
//			System.out.println("=====JSON 가기전======");
//			System.out.println("LIMIT JSON이 간다. : "+json);
			return json;
		}
	
		
		// 내가 ADMIN일 경우 선택한 회원과의 대화목록을 가져올때 사용하는 메소드
		@PostMapping("get-adminMember-Chatting")
		@ResponseBody
		public String getAdminMemberChatting(String friendId) 
		{
//			System.out.println("ADMIN 전용 채팅 인데 왓나"+friendId);
			
			String myid = "admin";
			
			List<MemberChat> memberChattingList = memberChattingService.getMemberChattingList(friendId,myid);
			
//			System.out.println("AAAAAA   나왔나?");
			
//			System.out.println(memberChattingList);
			
			
			Gson gson = new Gson();
			String json = gson.toJson(memberChattingList);
			
			return json;
		}
		
		@PostMapping("insert-admin-memberChatting")
		@ResponseBody
		public String insertMemberChatting(String myId,String friendId,String content ) 
		{
			
//			System.out.println("send : "+myId);
//			System.out.println("send : "+friendId);
//			System.out.println("send : "+content);
			
//			System.out.println("여기는 insert 전");
			
			int affected = memberChattingService.insertMemberChatting(myId,friendId,content);
			
//			System.out.println("여기는 insert 후");
			
			return "채팅 insert 완료";
		}
	
////////////  re 시리즈
		
//		@PostMapping("Reget-imAdminLimit")
//		@ResponseBody
//		public String RegetImAdminLimit() 
//		{
//			
//			System.out.println("당신은 어디민????!?!?!?!?!?!");
//			//Admin의 아이디를 이용해서 한번이라도 대화를 한 유저의 이름을 가져오는 것
//			List<AdminChatMemberView> getMemberList = friendService.getadMemberList();
//			
//			System.out.println(getMemberList);
//			
//			List<List<MemberChattingViewF>> getAdminLimitDatas = new ArrayList<List<MemberChattingViewF>>();
//			
//			String admin = "admin";
//			
//			
//			for (AdminChatMemberView mm : getMemberList) 
//			{
//				List<MemberChattingViewF> getAdminLimitData = null;
//				System.out.println("AdminLimit 들어가는 : "+ mm.getSenderId());
//				getAdminLimitData = friendService.getLastTalkData(admin, mm.getSenderId());
//				System.out.println("AdminLimit 나왔다");
//				
//				getAdminLimitDatas.add(getAdminLimitData);
//			}
//			
//			System.out.println("최종적으로 나온 친구 : "+getAdminLimitDatas);
//			
//			
//			
//	//		System.out.println("admin 최종적으로 나온것 :"+getImAdminLimitList);
//
//			
//			
//			Gson gson = new Gson();
//			String json = gson.toJson(getAdminLimitDatas);
//			
//			System.out.println("=====JSON 가기전======");
//			System.out.println("LIMIT JSON이 간다. : "+json);
//			return json;
//		}
//		
//		
		
		
}
