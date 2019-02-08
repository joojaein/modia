package com.moida.web.dao;

import java.util.List;

import com.moida.web.entity.MemberChatting;

public interface MemberChattingDao 
{

	List<MemberChatting> getMemberChatting(String friendid,String myid);
	
	int insert(MemberChatting memberChatting);
	
}
