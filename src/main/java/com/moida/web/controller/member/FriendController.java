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
		
//		System.out.println("지금 로그인한 아이디 :"+myId);
		//내 아이디를 이용해서 친구아이디를 가져오는 것
		//List<Friend> getFriendList = friendService.getFriendList(myId);
		List<Friend> getFriendList = friendService.getFriendList(myId);
		
		//위에서 가져온 친구아이디를 이용해서 memberDao 에 들어가 member의 msg와 img를 가져오는것
		//포문을 돌리면서 한 친구의 msg img를 가져오면서 만들어 놓은 List에 넣는다.
	//	System.out.println(getFriendList.size());
		
		
		
//		for (int i = 0; i < getFriendList.size(); i++) 
//		{
//			
//			List<Member> getFriendData = friendService.getFriendData();
//		}
		
		List< List<FriendDataView> > getFriendDatas = new ArrayList<List<FriendDataView>>();
		
		for (Friend f : getFriendList)
		{
			
			
			List<FriendDataView> getFriendData=null;
	//		System.out.println("이거 드간다 :"+f.getFriendId());
			getFriendData = friendService.getFriendData(f.getFriendId());
//			System.out.println("나왔다");
//			System.out.println(f.getMemberId());
//			System.out.println("id : "+getFriendData.get(0).getId());
//			System.out.println("img : "+getFriendData.get(0).getImg());
//			System.out.println("msg : "+getFriendData.get(0).getMsg());
			
			
			getFriendDatas.add(getFriendData);
		}
		
//		System.out.println("최종적으로 나온것 :"+getFriendDatas);
//		System.out.println("나왔는데 왜지"+getFriendDatas);
//		
//		for (int i = 0; i < getFriendDatas.size(); i++) 
//		{
//			System.out.println("--------------------------");
//			System.out.println("id : "+getFriendDatas.get(i).get(0).getId());
//			System.out.println("img : "+getFriendDatas.get(i).get(0).getImg());
//			System.out.println("msg : "+getFriendDatas.get(i).get(0).getMsg());
//			System.out.println("--------------------------");
//			
//		}
		
		
		Gson gson = new Gson();
		String json = gson.toJson(getFriendDatas);
		
//		System.out.println("=====JSON 가기전======");
//		System.out.println(json);
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
