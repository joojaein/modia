package com.moida.web.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.moida.web.entity.MemberChat;
import com.moida.web.entity.RprtMember;

public interface MemberChattingDao 
{

	List<MemberChat> getMemberChatting(String friendid,String myid);
	
	
	List<MemberChat> getMemberAdminChatting(String myid);
	
	int insert(@Param("myId") String myId,
			@Param("friendId") String friendId,
			@Param("content") String content);
	
	
	List<RprtMember> chkRprtId(@Param("rprtId") String rprtId,@Param("myId") String myId);
	
	
	
	
	int insertRprtId(RprtMember rprtMember);
//					@Param("rprtId") String rprtId,
//					@Param("myId") String myId,
//					@Param("rprtTitle") String rprtTitle,
//					@Param("rprtDetailContent") String rprtDetailContent);
	
	int deleteRprtId(String rprtId, String myId );
	
	
}
