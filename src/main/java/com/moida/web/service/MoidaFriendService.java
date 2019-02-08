package com.moida.web.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.moida.web.dao.FriendDao;
import com.moida.web.entity.Friend;
import com.moida.web.entity.FriendDataView;

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
		System.out.println("serviceserviceserviceservice");
		
		//return friendDao.getFriendList(myId);
		return friendDao.getFriendList(myId);
	}

	
	// 위에서 가져온 친구의 이름과 사이즈를 이용해서 Member에서
	// 그 친구의 msg와 img 를 가져오기 위한 작업을 또 한다.
	@Override
	public List<FriendDataView> getFriendData(String friendId) 
	{
		// TODO Auto-generated method stub
		
		System.out.println("친구 데이타 가져와라! -모이다프렌드서비스-");
		
		
		return friendDao.getFriendData(friendId);
	}
	
	
	
	@Override
	public int insert(Friend friend) 
	{
		// TODO Auto-generated method stub
		
		return friendDao.insert(friend);
	}

	@Override
	public int delete(String myId,String friendId) {
		// TODO Auto-generated method stub
		
		
		
		return friendDao.delete(myId,friendId);
	}



	
	
}
