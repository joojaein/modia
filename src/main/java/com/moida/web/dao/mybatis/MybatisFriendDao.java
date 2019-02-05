package com.moida.web.dao.mybatis;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.moida.web.dao.FriendDao;
import com.moida.web.entity.Friend;
import com.moida.web.entity.FriendDataView;

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
		System.out.println("여기는 MybatisFriendDao 겟친구리슽 입니다.");
		List<Friend> temp = friendDao.getFriendList(myId);
		
		System.out.println("temp : " + temp);
		
		return friendDao.getFriendList(myId);
	}

	@Override
	public int insert(Friend friend) 
	{
		// TODO Auto-generated method stub
		
		FriendDao friendDao = session.getMapper(FriendDao.class);

		
		return friendDao.insert(friend);
	}

	@Override
	public int delete(String myId,String friendId) {
		// TODO Auto-generated method stub
		
		FriendDao friendDao = session.getMapper(FriendDao.class);

		
		return friendDao.delete(myId,friendId);
		
	}
	
	@Override
	public List<FriendDataView> getFriendData(String friendId) 
	{
		// TODO Auto-generated method stub
		
		FriendDao friendDao = session.getMapper(FriendDao.class);
		System.out.println("다 친구를 위한거다 -여기는 마바멤버다오-");
		
		return friendDao.getFriendData(friendId);
	}

}
