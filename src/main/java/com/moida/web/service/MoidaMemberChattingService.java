package com.moida.web.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.moida.web.dao.MemberChattingDao;
import com.moida.web.entity.MemberChat;
import com.moida.web.entity.RprtMember;

@Service
public class MoidaMemberChattingService implements MemberChattingService 
{

	@Autowired
	private MemberChattingDao memberChattingDao;
	
	
	@Override
	public List<MemberChat> getMemberChattingList(String friendId, String myId) 
	{
		// TODO Auto-generated method stub
		
	//	System.out.println("여기는 memberChattingService 겟멤버채팅List 입니다.");
		
		
		return memberChattingDao.getMemberChatting(friendId, myId);
	}

	@Override
	public List<MemberChat> getMemberAdminChatting(String myId) 
	{
		// TODO Auto-generated method stub
//		System.out.println("관리자와의 대화목록 가져오기");

		
		
		return memberChattingDao.getMemberAdminChatting(myId);
	}
	

	@Override
	public int insertMemberChatting(String myId, String friendId, String content) {
		// TODO Auto-generated method stub
		
//		System.out.println("여기는 insertMemberChatting");

		
		return memberChattingDao.insert(myId,friendId,content);
	}

	@Override
	public int insertRprtId(String rprtId, String myId, String rprtTitle, String rprtDetailContent) 
	{
		// TODO Auto-generated method stub;
		
		return memberChattingDao.insertRprtId(rprtId, myId, rprtTitle, rprtDetailContent);
	}

	@Override
	public List<RprtMember> chkRprtId(String rprtId, String myId) 
	{
		// TODO Auto-generated method stub
		
		return memberChattingDao.chkRprtId(rprtId, myId);
	}

	@Override
	public int deleteRprtId(String rprtId, String myId) 
	{
		// TODO Auto-generated method stub
		
		return memberChattingDao.deleteRprtId(rprtId, myId);
	}


	


	

	
	
	
	
	
}
