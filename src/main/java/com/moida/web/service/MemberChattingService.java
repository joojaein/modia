package com.moida.web.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.moida.web.entity.MemberChat;
import com.moida.web.entity.RprtMember;

public interface MemberChattingService 
{
	List<MemberChat> getMemberChattingList(String friendId,String myId);
	
	List<MemberChat> getMemberAdminChatting(String myId);
	
	
	int insertMemberChatting(String myId,String friendId,String content);
	
	List<RprtMember> chkRprtId(String rprtId, String myId);
	
	int insertRprtId(String rprtId,String myId, String rprtTitle, String rprtDetailContent);
	
	int deleteRprtId(String rprtId, String myId);
	
	
	
}
