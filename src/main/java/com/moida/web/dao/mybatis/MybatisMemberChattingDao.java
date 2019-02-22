package com.moida.web.dao.mybatis;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.moida.web.dao.MemberChattingDao;
import com.moida.web.entity.MemberChat;
import com.moida.web.entity.RprtMember;

@Repository
public class MybatisMemberChattingDao implements MemberChattingDao
{

	@Autowired
	private SqlSessionTemplate session;  
	
	@Override
	public List<MemberChat> getMemberChatting(String friendid, String myid) {
		// TODO Auto-generated method stub
		
		MemberChattingDao memberChattingDao = session.getMapper(MemberChattingDao.class);
//		System.out.println("여기는 MybatisMemberChattingDao 겟멤버채팅 입니다.");
		
		return memberChattingDao.getMemberChatting(friendid, myid);
	}

	@Override
	public int insert(String myId, String friendId, String content) 
	{
		// TODO Auto-generated method stub
		
		MemberChattingDao memberChattingDao = session.getMapper(MemberChattingDao.class);
//		System.out.println("여기는 MybatisMemberChattingDao 채팅insert 입니다.");
		
		return memberChattingDao.insert(myId,friendId,content);
	}

	@Override
	public List<MemberChat> getMemberAdminChatting(String myid) 
	{
		// TODO Auto-generated method stub
		
		MemberChattingDao memberChattingDao = session.getMapper(MemberChattingDao.class);
	//	System.out.println("관리자랑 대화한 내용 내놔라 - 마바멤버채팅다오");

		
		return memberChattingDao.getMemberAdminChatting(myid);
	}

	@Override
	public int insertRprtId(String rprtId, String myId, String rprtTitle, String rprtDetailContent) 
	{
		// TODO Auto-generated method stub
		
		MemberChattingDao memberChattingDao = session.getMapper(MemberChattingDao.class);
		
		return memberChattingDao.insertRprtId(rprtId, myId, rprtTitle, rprtDetailContent);
	}
	
	@Override
	public int deleteRprtId(String rprtId, String myId) 
	{
		// TODO Auto-generated method stub
		
		MemberChattingDao memberChattingDao = session.getMapper(MemberChattingDao.class);
		
		return memberChattingDao.deleteRprtId(rprtId, myId);
	}

	@Override
	public List<RprtMember> chkRprtId(String rprtId, String myId) 
	{
		// TODO Auto-generated method stub
		
		MemberChattingDao memberChattingDao = session.getMapper(MemberChattingDao.class);
		
		return memberChattingDao.chkRprtId(rprtId, myId);
	}

	
	
	
}
