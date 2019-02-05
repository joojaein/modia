package com.moida.web.dao.mybatis;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.moida.web.dao.FriendDao;
import com.moida.web.entity.Friend;

@Repository
public class MybatisFriendDao implements FriendDao
{
	@Autowired
	private SqlSessionTemplate session;
	
	
	@Override
	public List<Friend> getFriendList() 
	{
		// TODO Auto-generated method stub
		
		FriendDao friendDao = session.getMapper(FriendDao.class);
		System.out.println("여기는 MybatisFriendDao 겟친구리슽 입니다.");
		List<Friend> temp = friendDao.getFriendList();
		
		System.out.println("temp : " + temp);
		
		return friendDao.getFriendList();
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

}
