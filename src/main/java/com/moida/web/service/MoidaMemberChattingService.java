package com.moida.web.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.moida.web.dao.MemberChattingDao;
import com.moida.web.entity.MemberChatting;

@Service
public class MoidaMemberChattingService implements MemberChattingService 
{

	@Autowired
	private MemberChattingDao memberChattingDao;
	
	
	@Override
	public List<MemberChatting> getMemberChattingList(String friendId, String myId) 
	{
		// TODO Auto-generated method stub
		
		System.out.println("여기는 memberChattingService 겟멤버채팅List 입니다.");
		
		
		return memberChattingDao.getMemberChatting(friendId, myId);
	}


	@Override
	public int insertMemberChatting(MemberChatting memberChatting) {
		// TODO Auto-generated method stub
		
		System.out.println("여기는 memberChattingService insert멤버채팅 입니다.");

		
		memberChattingDao.insert(memberChatting);
		
		return 1;
	}


	

	
	
	
	
	
}
