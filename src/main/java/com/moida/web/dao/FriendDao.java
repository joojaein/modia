package com.moida.web.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.moida.web.entity.AdminChatMemberView;
import com.moida.web.entity.Friend;
import com.moida.web.entity.FriendDataView;
import com.moida.web.entity.Member;
import com.moida.web.entity.MemberChat;
import com.moida.web.entity.MemberChattingViewF;

public interface FriendDao 
{

	//List<Friend> getFriendList(String myId);
	List<Friend> getFriendList(String myId);
	
	//친구 검색
	List<Friend> searchFriend(@Param("myId") String myId,@Param("searchText") String searchText);
	
	List<Friend> chkFriend(@Param("myId") String myId, @Param("memberId") String memberId);
	
	int insert(@Param("memberId") String myId,@Param("friendId") String friendId);
	
	int delete(@Param("memberId") String myId,@Param("friendId") String friendId);
	
	// friend를 위해
	List<FriendDataView> getFriendData(@Param("id") String friendId);
	
	
	
	//친구 임
	FriendDataView getMyFriendData(@Param("id") String friendId);
	//친구 아님
	Member getNoFriendData(@Param("id") String memberId);
	
	
		
	// 친구와 마지막으로 나눈 대화를 가져오기 위해 
	List<MemberChattingViewF> getLastTalkData(@Param("myId")String myId, @Param("friendId")String friendId);

	// Admin과 마지막으로 나눈 대화를 가져오기 위해 
	List<MemberChat> getLastAdminTalkData(@Param("myId")String myId);
	
	//Admin 이미지 내놔라
	List<FriendDataView> getAdminImg();

	//내가 Admin 이면 회원들과 마지막으로 나눈 대화를 가져오려고 만든 메소드
	List<MemberChat> getImAdminLimit();

	//내가 Admin 일 경우 나에게 한번이라도 채팅을 한 멤버의 아이드를 리턴하기 위해 만든 메소드
	List<AdminChatMemberView> getAdMemberList();


}
