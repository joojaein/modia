package com.moida.web.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.moida.web.dao.FriendDao;
import com.moida.web.entity.AdminChatMemberView;
import com.moida.web.entity.Friend;
import com.moida.web.entity.FriendDataView;
import com.moida.web.entity.Member;
import com.moida.web.entity.MemberChat;
import com.moida.web.entity.MemberChattingViewF;

@Service
public class MoidaFriendService implements FriendService
{

	
	@Autowired
	private FriendDao friendDao;
	
	
	// 친구의 이름과 친구가 몇 명있는지 알기 위해 쓰는 메소드 이다. ( 하.... )
	@Override
	public List<Friend> getFriendList(String myId) 
	{
		// TODO Auto-generated method stub
//		System.out.println("serviceserviceserviceservice");
		
		//return friendDao.getFriendList(myId);
		return friendDao.getFriendList(myId);
	}

	
	// 위에서 가져온 친구의 이름과 사이즈를 이용해서 Member에서
	// 그 친구의 msg와 img 를 가져오기 위한 작업을 또 한다.
	@Override
	public List<FriendDataView> getFriendData(String friendId) 
	{
		// TODO Auto-generated method stub
		
//		System.out.println("친구 데이타 가져와라! -모이다프렌드서비스-");
		
		
		return friendDao.getFriendData(friendId);
	}
	
	
	
	@Override
	public int insert(String myId,String friendId) 
	{
		// TODO Auto-generated method stub
		
		return friendDao.insert(myId,friendId);
	}

	@Override
	public int delete(String myId,String friendId) {
		// TODO Auto-generated method stub
		
		
		
		return friendDao.delete(myId,friendId);
	}

	//친구와 마지막으로 대화 나눈 것을 가져오기위한 메소드

	@Override
	public List<MemberChattingViewF> getLastTalkData(String myId, String friendId) 
	{
		// TODO Auto-generated method stub
//		System.out.println("LIMIT MidaFriendService");
		
		return friendDao.getLastTalkData(myId,friendId);
	}


	//Admin과 마지막으로 대화 나눈 것을 가져오기위한 메소드
	@Override
	public List<MemberChat> getLastAdminTalkData(String myId) 
	{
		// TODO Auto-generated method stub
//		System.out.println("Admin과 대화한 마지막 내용");

		return friendDao.getLastAdminTalkData(myId);
	}


	@Override
	public List<FriendDataView> getAdminImg() 
	{
		// TODO Auto-generated method stub
//		System.out.println("Admin 이미지 내놔라");
		
		return friendDao.getAdminImg();
	}

	//내가 Admin 일때 작동하는 회원들과 나눈 마지막 대화 한줄 가져오기 메소드
	@Override
	public List<MemberChat> getImAdminLimit() 
	{
		// TODO Auto-generated method stub
//		System.out.println("나는 어디민이다.");
		
		return friendDao.getImAdminLimit();
	}

	//내가 Admin 일 경우 나에게 대화를 한번이라도 보낸 멤버의 아이디를 리턴해주는 메소드
	@Override
	public List<AdminChatMemberView> getadMemberList() 
	{
		// TODO Auto-generated method stub
//		System.out.println("나는 어디민이다. 대화멤버 리턴");

		
		return friendDao.getAdMemberList();
	}


	@Override
	public List<Friend> chkFriend(String myId, String memberId) 
	{
		// TODO Auto-generated method stub
		
		return friendDao.chkFriend(myId, memberId);
	}


	@Override
	public Member getNoFriendData(String memberId) 
	{
		// TODO Auto-generated method stub
		return friendDao.getNoFriendData(memberId);
	}


	@Override
	public FriendDataView getMyFriendData(String friendId) 
	{
		// TODO Auto-generated method stub
		return friendDao.getMyFriendData(friendId);
	}
	
	
}
