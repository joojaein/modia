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
import com.moida.web.entity.Friend;
import com.moida.web.entity.FriendDataView;
import com.moida.web.entity.Member;
import com.moida.web.service.FriendService;


@Controller("friend")
@RequestMapping("/member/")
public class FriendController 
{

	@Autowired
	private FriendService friendService;
	
//	@PostMapping("get-myId")
//	@ResponseBody
//	public String getMyId(Principal principal) 
//	{
//		
//		String myid;
//		
//		Gson gson = new Gson();
////		String json = gson.toJson(myid);
//		
//		
//		return json;
//	}
	
	
	@PostMapping("get-friendList")
	@ResponseBody
	public String getFriendList() 
	{
		
		//내 아이디를 이용해서 친구아이디를 가져오는 것
		//List<Friend> getFriendList = friendService.getFriendList(myId);
		List<Friend> getFriendList = friendService.getFriendList();
		
		//위에서 가져온 친구아이디를 이용해서 memberDao 에 들어가 member의 msg와 img를 가져오는것
		//포문을 돌리면서 한 친구의 msg img를 가져오면서 만들어 놓은 List에 넣는다.
		System.out.println(getFriendList.size());
		
		
		
//		for (int i = 0; i < getFriendList.size(); i++) 
//		{
//			
//			List<Member> getFriendData = friendService.getFriendData();
//		}
		
		List< List<FriendDataView> > getFriendDatas = new ArrayList<List<FriendDataView>>();
		
		for (Friend f : getFriendList)
		{
			
			
			List<FriendDataView> getFriendData=null;
			System.out.println("이거 드간다 :"+f.getFriendId());
			getFriendData = friendService.getFriendData(f.getFriendId());
			System.out.println("나왔다");
//			System.out.println(f.getMemberId());
//			System.out.println("id : "+getFriendData.get(0).getId());
//			System.out.println("img : "+getFriendData.get(0).getImg());
//			System.out.println("msg : "+getFriendData.get(0).getMsg());
			
			
			getFriendDatas.add(getFriendData);
		}
		
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
		
		return json;
	}
	
	
	
	
	
	
	
	
	
	
	
	
}
