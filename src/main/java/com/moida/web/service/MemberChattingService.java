package com.moida.web.service;

import java.util.List;


import com.moida.web.entity.MemberChat;

public interface MemberChattingService 
{
	List<MemberChat> getMemberChattingList(String friendId,String myId);
	
	List<MemberChat> getMemberAdminChatting(String myId);
	
	
	int insertMemberChatting(String myId,String friendId,String content);
	
	
	int insertRprtId(String rprtId,String myId, String rprtTitle, String rprtDetailContent);
	
	
}
