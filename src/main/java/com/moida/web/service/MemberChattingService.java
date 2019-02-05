package com.moida.web.service;

import java.util.List;

import com.moida.web.entity.MemberChatting;

public interface MemberChattingService 
{
	List<MemberChatting> getMemberChattingList(String friendId,String myId);
	
	int insertMemberChatting(MemberChatting memberChatting);
	
}
