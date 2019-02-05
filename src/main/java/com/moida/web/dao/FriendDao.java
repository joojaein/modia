package com.moida.web.dao;

import java.util.List;

import com.moida.web.entity.Friend;

public interface FriendDao 
{

	//List<Friend> getFriendList(String myId);
	List<Friend> getFriendList();
	
	int insert(Friend friend);
	
	int delete(String myId,String friendId);
}
