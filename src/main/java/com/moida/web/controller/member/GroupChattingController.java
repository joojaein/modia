package com.moida.web.controller.member;

import java.security.Principal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;
import com.moida.web.entity.GroupChat;
import com.moida.web.entity.GroupChattingListDataView;
import com.moida.web.entity.GroupImgsDataView;
import com.moida.web.service.GroupChattingService;

@Controller("groupChatting")
@RequestMapping("/crowd/")
public class GroupChattingController 
{
	
	@Autowired
	private GroupChattingService groupChattingService;
	
	@PostMapping("insert-groupChatting")
	@ResponseBody
	public int insertGroupChatting(String myId,int groupId,String content ) 
	{
		
	//	System.out.println("send : "+myId);
//		System.out.println("send : "+groupId);
//		System.out.println("send : "+content);
		
	//	System.out.println("여기는 insert 전");
		
		int affected = groupChattingService.insertGroupChatting(myId,groupId,content);
		
	//	System.out.println("여기는 insert 후");
		
		return 1;
	}
	
	@PostMapping("get-groupChattingList")
	@ResponseBody
	public String getGroupCattingList(String groupIdSt) 
	{
		//System.out.println("그룹채팅 대화를 가져오는 PostMapping : "+groupIdSt);
		int groupId = Integer.parseInt(groupIdSt);
		
			List<GroupChattingListDataView> groupChattingList = groupChattingService.groupChattingList(groupId);
		
		//	System.out.println(groupChattingList);
		
		Gson gson = new Gson();
		String json = gson.toJson(groupChattingList);
		
		return json;
	}
	
	@PostMapping("get-groupImgs")
	@ResponseBody
	public String getGroupImgs(String groupIdSt) 
	{
//		System.out.println("그룹채팅에서 쓰일 이미지 : "+groupIdSt);
		int groupId = Integer.parseInt(groupIdSt);
		
			List<GroupImgsDataView> groupChattingList = groupChattingService.getGroupImgsData(groupId);
//			System.out.println(groupChattingList.get(0).getMemberId());
//			System.out.println(groupChattingList);
		
			Gson gson = new Gson();
			String json = gson.toJson(groupChattingList);
		
			return json;
	}
	
}
