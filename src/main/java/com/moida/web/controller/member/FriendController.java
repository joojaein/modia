package com.moida.web.controller.member;

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
import com.moida.web.entity.Friend;
import com.moida.web.entity.FriendDataView;
import com.moida.web.entity.LastFriendChatView;
import com.moida.web.entity.LastFriendChattingView;
import com.moida.web.entity.Member;
import com.moida.web.entity.MemberChat;
import com.moida.web.entity.MemberChattingView;
import com.moida.web.entity.MemberChattingViewF;
import com.moida.web.service.FriendService;


@Controller("friend")
@RequestMapping("/member/")
public class FriendController 
{

	@Autowired
	private FriendService friendService;
	

	@PostMapping("get-myId")
	@ResponseBody
	public String getMyId(Principal principal) 
	{
		String gomyid=principal.getName();
		
		Gson gson = new Gson();
		String json = gson.toJson(gomyid);
		
		
		return json;
	}
	
	
	@PostMapping("get-friendList")
	@ResponseBody
	public String getFriendList(Principal principal) 
	{
		
		String myId = principal.getName();
		

		List<Friend> getFriendList = friendService.getFriendList(myId);
		
		
		
		List< List<FriendDataView> > getFriendDatas = new ArrayList<List<FriendDataView>>();
		
		for (Friend f : getFriendList)
		{
			
			
			List<FriendDataView> getFriendData=null;
			getFriendData = friendService.getFriendData(f.getFriendId());
			
			
			getFriendDatas.add(getFriendData);
		}
		

		
		
		Gson gson = new Gson();
		String json = gson.toJson(getFriendDatas);
		
		return json;
	}
	
	
	@PostMapping("get-lastTalkData")
	@ResponseBody
	public String getLastTalkData(Principal principal) 
	{
		
		String myId = principal.getName();
		
	//	System.out.println("새로 만들어진 LIMIT 여기 들어오니 ?");
	//	System.out.println("LIMIT 지금 로그인한 아이디 :"+myId);
		//내 아이디를 이용해서 친구아이디를 가져오는 것
		//List<Friend> getFriendList = friendService.getFriendList(myId);
		List<Friend> getFriendList = friendService.getFriendList(myId);
		
		//위에서 가져온 친구아이디를 이용해서 memberDao 에 들어가 member의 msg와 img를 가져오는것
		//포문을 돌리면서 한 친구의 msg img를 가져오면서 만들어 놓은 List에 넣는다.
//		System.out.println("LIMIT 친구들 갯수 : "+getFriendList.size());
		
		
		List< List<MemberChattingViewF> > getLastTalkDatas = new ArrayList<List<MemberChattingViewF>>();
		
		for (Friend f : getFriendList)
		{
			
			
		List<MemberChattingViewF> getLastTalkData=null;
	//	System.out.println("LIMIT이거 드간다 :"+f.getFriendId());
		getLastTalkData = friendService.getLastTalkData(myId, f.getFriendId());
	//		System.out.println("LIMIT나왔다");

			
			getLastTalkDatas.add(getLastTalkData);
		}
		
//		System.out.println("LIMIT 최종적으로 나온것 :"+getLastTalkDatas);

		
		
		Gson gson = new Gson();
		String json = gson.toJson(getLastTalkDatas);
		
//		System.out.println("=====JSON 가기전======");
//		System.out.println("LIMIT JSON이 간다. : "+json);
		return json;
	}
	//Admin 이미지 가져오려고... ㅠㅠ
	@PostMapping("get-adminImg")
	@ResponseBody
	public String getLastAdminImg() 
	{
		
//		System.out.println("ADMIN IMAGE 여기 들어오니 ?");
		String admin ="admin";
		//내 아이디를 이용해서 친구아이디를 가져오는 것
		//List<Friend> getFriendList = friendService.getFriendList(myId);
		List<FriendDataView> getAdminImg = friendService.getAdminImg();
		
//		System.out.println("adminIMG 최종적으로 나온것 :"+getAdminImg);

		Gson gson = new Gson();
		String json = gson.toJson(getAdminImg);
		
		return json;
	}
	
	
	//Admin과의 마지막 대화를 가져오기 위한 메소드
	@PostMapping("get-lastAdminTalkData")
	@ResponseBody
	public String getLastAdminTalkData(Principal principal) 
	{
		
		String myId = principal.getName();
		
//		System.out.println("새로 만들어진 admin 여기 들어오니 ?");
//		System.out.println("admin 지금 로그인한 아이디 :"+myId);
		//내 아이디를 이용해서 친구아이디를 가져오는 것
		//List<Friend> getFriendList = friendService.getFriendList(myId);
		List<MemberChat> getAdminChtList = friendService.getLastAdminTalkData(myId);
		
		
		
	//	System.out.println("admin 최종적으로 나온것 :"+getAdminChtList);

		
		
		Gson gson = new Gson();
		String json = gson.toJson(getAdminChtList);
		
//		System.out.println("=====JSON 가기전======");
//		System.out.println("LIMIT JSON이 간다. : "+json);
		return json;
	}
	
	
	
	// 친구 인지 아닌지 확인 해서 친구 추가인지 친구 삭제인지를 보여주는 메소드
	
	@PostMapping("chk-friend")
	@ResponseBody
	public String chkFriend(String memberId,Principal principal) 
	{
//		System.out.println("이게 언디파인???"+memberId);
		String myId = principal.getName();
	//	System.out.println(memberId);

		List<Friend> chkFriend = friendService.chkFriend(myId, memberId);
		
	//	System.out.println("친구 데이터 있는지 :"+chkFriend);
	//	System.out.println("이스엠티 : "+chkFriend.isEmpty() );
	//	chkFriend.isEmpty() 비어있으면 true // 안비어있으면 false
		Gson gson = new Gson();
		String json = null;
		
		if( chkFriend.isEmpty() ) 
		{
			Member noFriend = friendService.getNoFriendData(memberId);
			json = gson.toJson(noFriend);
		}
		else 
		{
			FriendDataView Friend = friendService.getMyFriendData(memberId);
	//		System.out.println(Friend);
			json = gson.toJson(Friend);
		}
		
		
		
		
		return json;
	}
	
	@PostMapping("shiny-chk-friend")
	@ResponseBody
	public String shinyChkFriend(String memberId,Principal principal) 
	{
//		System.out.println("이게 언디파인???"+memberId);
		String myId = principal.getName();
	//	System.out.println(memberId);

		List<Friend> chkFriend = friendService.chkFriend(myId, memberId);
		
	//	System.out.println("친구 데이터 있는지 :"+chkFriend);
	//	System.out.println("이스엠티 : "+chkFriend.isEmpty() );
	//	chkFriend.isEmpty() 비어있으면 true // 안비어있으면 false
		Gson gson = new Gson();
		String socketChkFriend = "";
		String json = null;
		
		if( chkFriend.isEmpty() ) 
		{
			socketChkFriend = "false"; //친구가 아닐때
			
		}
		else 
		{
			socketChkFriend ="true"; // 친구 일 때
		}
		
		
		json = gson.toJson(socketChkFriend);
		
		return json;
	}
	
	
	//친구 추가
	@PostMapping("add-myFriend")
	@ResponseBody
	public int addMyFriend(String selectMemberId,Principal principal) 
	{
		
//		System.out.println("친구추가");
//		
		String myId = principal.getName();
//		System.out.println(selectMemberId);

//		friend.setMemberId(myId);
//		friend.setFriendId(selectMemberId);
		
		int chkFriend = friendService.insert(myId,selectMemberId);
		
//		System.out.println("친구추가 성공");
		
		return chkFriend;
	}
	
	//친구 삭제
		@PostMapping("del-myFriend")
		@ResponseBody
		public int delMyFriend(String selectMemberId,Principal principal) 
		{
//			System.out.println("친구삭제");
			
			String myId = principal.getName();
	//		System.out.println(selectMemberId);

			
			int chkFriend = friendService.delete(myId, selectMemberId);
			
	//		System.out.println("친구삭제 성공");
			
			return chkFriend;
		}
	
		
		@PostMapping("search-friend")
		@ResponseBody
		public String searchFriend(String searchWord,Principal principal) 
		{
			
	//		System.out.println("들어오나요?? : "+searchWord);
			String myId = principal.getName();
			

			List<Friend> getFriendList = friendService.searchFriend(myId, searchWord);
			
	//		System.out.println("찾아온 친구 아이디들 : "+getFriendList);
			
			List< List<FriendDataView> > getFriendDatas = new ArrayList<List<FriendDataView>>();
			
			for (Friend f : getFriendList)
			{
				
				List<FriendDataView> getFriendData=null;
				getFriendData = friendService.getFriendData(f.getFriendId());
				
				
				getFriendDatas.add(getFriendData);
			}
			

			
			
			Gson gson = new Gson();
			String json = gson.toJson(getFriendDatas);
			
			return json;
		}
		
		
	
	////////////////////////////RE 전용/////////////////////////////////////////
//	@PostMapping("get-relastTalkData")
//	@ResponseBody
//	public String getreLastTalkData(Principal principal) 
//	{
//		
//		String myId = principal.getName();
//		
//		System.out.println("새로 만들어진 LIMIT 여기 들어오니 ?");
//		System.out.println("LIMIT 지금 로그인한 아이디 :"+myId);
//		//내 아이디를 이용해서 친구아이디를 가져오는 것
//		//List<Friend> getFriendList = friendService.getFriendList(myId);
//		List<Friend> getFriendList = friendService.getFriendList(myId);
//		
//		//위에서 가져온 친구아이디를 이용해서 memberDao 에 들어가 member의 msg와 img를 가져오는것
//		//포문을 돌리면서 한 친구의 msg img를 가져오면서 만들어 놓은 List에 넣는다.
//		System.out.println("LIMIT 친구들 갯수 : "+getFriendList.size());
//		
//		
//		List< List<MemberChattingViewF> > getLastTalkDatas = new ArrayList<List<MemberChattingViewF>>();
//		
//		for (Friend f : getFriendList)
//		{
//			
//			
//		List<MemberChattingViewF> getLastTalkData=null;
//		System.out.println("LIMIT이거 드간다 :"+f.getFriendId());
//		getLastTalkData = friendService.getLastTalkData(myId, f.getFriendId());
//			System.out.println("LIMIT나왔다");
//
//			
//			getLastTalkDatas.add(getLastTalkData);
//		}
//		
//		System.out.println("LIMIT 최종적으로 나온것 :"+getLastTalkDatas);
//
//		
//		
//		Gson gson = new Gson();
//		String json = gson.toJson(getLastTalkDatas);
//		
//		System.out.println("=====JSON 가기전======");
//		System.out.println("LIMIT JSON이 간다. : "+json);
//		return json;
//	}
//	
//	@PostMapping("get-RelastAdminTalkData")
//	@ResponseBody
//	public String getReLastAdminTalkData(Principal principal) 
//	{
//		
//		String myId = principal.getName();
//		
//		System.out.println("새로 만들어진 admin 여기 들어오니 ?");
//		System.out.println("admin 지금 로그인한 아이디 :"+myId);
//		//내 아이디를 이용해서 친구아이디를 가져오는 것
//		//List<Friend> getFriendList = friendService.getFriendList(myId);
//		List<MemberChat> getAdminChtList = friendService.getLastAdminTalkData(myId);
//		
//		
//		
//		System.out.println("admin 최종적으로 나온것 :"+getAdminChtList);
//
//		
//		
//		Gson gson = new Gson();
//		String json = gson.toJson(getAdminChtList);
//		
//		System.out.println("=====JSON 가기전======");
//		System.out.println("LIMIT JSON이 간다. : "+json);
//		return json;
//	}
	
	
	////////////////////////////////////////////////////////////////////////////////////
	
	
//----------------------------------Admin 일때 쓰는 메소드들-----------------------------------------------	
	
	//내가 Admin 일 경우 회원들과 마지막으로 대화한 한 줄을 가져오기 위한 메소드
//		@PostMapping("get-imAdminLimit")
//		@ResponseBody
//		public String getImAdminLimit() 
//		{
//			
//			System.out.println("당신은 어디민????!?!?!?!?!?!");
//			//Admin의 아이디를 이용해서 한번이라도 대화를 한 유저의 이름을 가져오는 것
//			List<AdminChatMemberView> getMemberList = friendService.getadMemberList();
//			
//			System.out.println(getMemberList);
//			
//			
//			
//	//		List<MemberChat> getImAdminLimitList = friendService.getImAdminLimit();
//			
//			
//			
//	//		System.out.println("admin 최종적으로 나온것 :"+getImAdminLimitList);
//
//			
//			
////			Gson gson = new Gson();
////			String json = gson.toJson(getAdminChtList);
////			
////			System.out.println("=====JSON 가기전======");
////			System.out.println("LIMIT JSON이 간다. : "+json);
//			return "1";
//		}
//	
	
	
	
	
	
	
}
