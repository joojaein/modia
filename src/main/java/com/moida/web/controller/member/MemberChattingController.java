package com.moida.web.controller.member;

import java.security.Principal;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;
import com.moida.web.entity.FriendDataView;
import com.moida.web.entity.Member;
import com.moida.web.entity.MemberChat;
import com.moida.web.entity.RprtMember;
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
	
	
	@PostMapping("chk-rprtId")
	@ResponseBody
	public String chkRprtId(String rprtId,Principal principal) 
	{
		
		String myId = principal.getName();
		System.out.println("들어오는 신고아이디"+rprtId);
		//String rprtId = "jaein";
		
		String chk ="";
		
		List<RprtMember>  chkRprt =  memberChattingService.chkRprtId(rprtId, myId);
		
		
		System.out.println("DB에서 나오는 없는 신고 데이터 : "+chkRprt);
		
//		chkFriend.isEmpty() 비어있으면 true // 안비어있으면 false
//			Gson gson = new Gson();
//			String json = null;
			
			if( chkRprt.isEmpty() ) 
			{
				chk = "신고 추가";
			}
			else 
			{
				chk = "신고 해제";
			}
		
		
		
		return chk;
	}
	
	@PostMapping("insert-rprtId")
	@ResponseBody
	public String insertRprtId(String rprtId,String rprtTitle,String rprtDetailContent,Principal principal ) 
	{
		
//		System.out.println("send : "+rprtId);
//		System.out.println("send : "+rprtTitle);
//		System.out.println("send : "+rprtDetailContent);
		String myId = principal.getName();
		
	//	System.out.println("여기는 insert 전");
		
		
		int affected = memberChattingService.insertRprtId(rprtId, myId, rprtTitle, rprtDetailContent);
		
//		System.out.println("여기는 신고 후");
		
		return "신고 insert 완료";
	}
	
	@PostMapping("delete-rprtId")
	@ResponseBody
	public String deleteRprtId(String rprtId,Principal principal ) 
	{
		

		String myId = principal.getName();
		
		System.out.println("여기는 delete 전");
		System.out.println("들어오는 신고아이디"+rprtId);
		
		int affected = memberChattingService.deleteRprtId(rprtId, myId);
		
		System.out.println("여기는 신고 후");
		
		return "신고 delete 완료";
	}
	
	
	//승래꺼
//	@RequestMapping("checkId")
//	@ResponseBody
//	public String checkId(Principal principal,String url,HttpServletRequest request, HttpSession session) {
//		String answer = "";
//		if(principal == null) {
//			request.getSession(true).setAttribute("preurl", url);
//			answer = "no";
//		}else {
//			request.getSession(true).setAttribute("preurl", url);
//			String preurl = (String)session.getAttribute("preurl");
//			answer = preurl;
//		}
//		return answer;
//	}
}
