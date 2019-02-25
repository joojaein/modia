package com.moida.web.dao.mybatis;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.moida.web.dao.FriendDao;
import com.moida.web.entity.AdminChatMemberView;
import com.moida.web.entity.Friend;
import com.moida.web.entity.FriendDataView;
import com.moida.web.entity.Member;
import com.moida.web.entity.MemberChat;
import com.moida.web.entity.MemberChattingViewF;

@Repository
public class MybatisFriendDao implements FriendDao
{
	@Autowired
	private SqlSessionTemplate session;
	
	
	@Override
	public List<Friend> getFriendList(String myId) 
	{
		// TODO Auto-generated method stub
		
		FriendDao friendDao = session.getMapper(FriendDao.class);
	//	System.out.println("여기는 MybatisFriendDao 겟친구리슽 입니다.");
		List<Friend> temp = friendDao.getFriendList(myId);
		
	//	System.out.println("temp : " + temp);
		
		return friendDao.getFriendList(myId);
	}

	@Override
	public int insert(String myId,String friendId) 
	{
		// TODO Auto-generated method stub
		
		FriendDao friendDao = session.getMapper(FriendDao.class);

		
		return friendDao.insert(myId,friendId);
	}

	@Override
	public int delete(String myId,String friendId) 
	{
		// TODO Auto-generated method stub
		
		FriendDao friendDao = session.getMapper(FriendDao.class);

		
		return friendDao.delete(myId,friendId);
	}
	
	@Override
	public List<FriendDataView> getFriendData(String friendId) 
	{
		// TODO Auto-generated method stub
		
		FriendDao friendDao = session.getMapper(FriendDao.class);
//		System.out.println("다 친구를 위한거다 -여기는 마바멤버다오-");
		
		return friendDao.getFriendData(friendId);
	}

	//친구와의 마지막으로 대화 나눈 것을 가져오기위한 메소드
	@Override
	public List<MemberChattingViewF> getLastTalkData(String myId, String friendId) 
	{
		// TODO Auto-generated method stub
		FriendDao friendDao = session.getMapper(FriendDao.class);
	//	System.out.println("친구와의 마지막 대화");
		
		
		return friendDao.getLastTalkData(myId, friendId);
	}

	//Admin과 마지막으로 대화 나눈 것을 가져오기위한 메소드
	@Override
	public List<MemberChat> getLastAdminTalkData(String myId) {
		// TODO Auto-generated method stub
		FriendDao friendDao = session.getMapper(FriendDao.class);
	//	System.out.println("Admin과의 마지막 대화");
		
		return friendDao.getLastAdminTalkData(myId);
	}

	@Override
	public List<FriendDataView> getAdminImg() 
	{
		// TODO Auto-generated method stub
		
		FriendDao friendDao =session.getMapper(FriendDao.class);
	//	System.out.println("Admin 이미지 내놔 난 DAO");
		return friendDao.getAdminImg();
	}
	
	//내가 Admin 이면 회원들과 마지막으로 나눈 대화를 가져오려고 만든 메소드
	@Override
	public List<MemberChat> getImAdminLimit() 
	{
		// TODO Auto-generated method stub
		
		FriendDao friendDao =session.getMapper(FriendDao.class);
//		System.out.println("마지막이다 admin이다.");
		
		return friendDao.getImAdminLimit();
	}

	
	//내가 Admin 일 경우 나에게 한번이라도 채팅을 한 멤버의 아이드를 리턴하기 위해 만든 메소드
	@Override
	public List<AdminChatMemberView> getAdMemberList() 
	{
		// TODO Auto-generated method stub
		FriendDao friendDao =session.getMapper(FriendDao.class);
//		System.out.println("너의 이름은 admin일때 멤버아이디를 반환해라");
		return friendDao.getAdMemberList();
	}

	@Override
	public List<Friend> chkFriend(String myId, String memberId) 
	{
		// TODO Auto-generated method stub
		
		FriendDao friendDao =session.getMapper(FriendDao.class);
		
		return friendDao.chkFriend(myId, memberId);
	}

	@Override
	public Member getNoFriendData(String memberId) 
	{
		// TODO Auto-generated method stub
		
		FriendDao friendDao =session.getMapper(FriendDao.class);
		
		return friendDao.getNoFriendData(memberId);
	}

	@Override
	public FriendDataView getMyFriendData(String friendId) 
	{
		// TODO Auto-generated method stub
		
		FriendDao friendDao =session.getMapper(FriendDao.class);
		
		return friendDao.getMyFriendData(friendId);
	}

	@Override
	public List<Friend> searchFriend(String myId, String searchText) 
	{
		// TODO Auto-generated method stub
		
		FriendDao friendDao =session.getMapper(FriendDao.class);
		
		return friendDao.searchFriend(myId, searchText);
	}
	
	

}
