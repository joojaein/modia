package com.moida.web.service;

import java.util.List;

import com.moida.web.entity.Friend;
import com.moida.web.entity.FriendDataView;

public interface FriendService 
{
	
	// ====친구의 이름 과 몇 명인지 알기위해 만든 메소드.
	//List<Friend> getFriendList(String myId);
	List<Friend> getFriendList(String myId);
	
	// ====위에서 구한 친구목록 및 사이즈를 이용해서 
	// ==== Member테이블에서 각 친구의 msg와 img를 가져오기 위한 메스ㅗ드 .
	List<FriendDataView> getFriendData(String friendId);
	
	
	int insert(Friend friend);
	
	int delete(String myId,String friendId);
}
