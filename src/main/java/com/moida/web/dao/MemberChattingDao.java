package com.moida.web.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.moida.web.entity.MemberChat;

public interface MemberChattingDao 
{

	List<MemberChat> getMemberChatting(String friendid,String myid);
	
	
	List<MemberChat> getMemberAdminChatting(String myid);
	
	int insert(@Param("myId") String myId,
			@Param("friendId") String friendId,
			@Param("content") String content);
	
}
