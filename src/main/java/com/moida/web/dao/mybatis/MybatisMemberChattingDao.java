package com.moida.web.dao.mybatis;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.moida.web.dao.MemberChattingDao;
import com.moida.web.entity.MemberChatting;

@Repository
public class MybatisMemberChattingDao implements MemberChattingDao
{

	@Autowired
	private SqlSessionTemplate session;  
	
	@Override
	public List<MemberChatting> getMemberChatting(String friendid, String myid) {
		// TODO Auto-generated method stub
		
		MemberChattingDao memberChattingDao = session.getMapper(MemberChattingDao.class);
		System.out.println("여기는 MybatisMemberChattingDao 겟멤버채팅 입니다.");
		
		return memberChattingDao.getMemberChatting(friendid, myid);
	}

	@Override
	public int insert(MemberChatting memberChatting) 
	{
		// TODO Auto-generated method stub
		
		MemberChattingDao memberChattingDao = session.getMapper(MemberChattingDao.class);
		System.out.println("여기는 MybatisMemberChattingDao 채팅insert 입니다.");
		
		return memberChattingDao.insert(memberChatting);
	}

	
	
	
}
