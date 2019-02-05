package com.moida.web.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.moida.web.entity.Friend;
import com.moida.web.entity.FriendDataView;

public interface FriendDao 
{

	//List<Friend> getFriendList(String myId);
	List<Friend> getFriendList(String myId);
	
	int insert(Friend friend);
	
	int delete(String myId,String friendId);
	
	// friend를 위해
		List<FriendDataView> getFriendData(@Param("id") String friendId);
}
