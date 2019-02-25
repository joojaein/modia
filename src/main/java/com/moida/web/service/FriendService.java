package com.moida.web.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.moida.web.entity.AdminChatMemberView;
import com.moida.web.entity.Friend;
import com.moida.web.entity.FriendDataView;
import com.moida.web.entity.Member;
import com.moida.web.entity.MemberChat;
import com.moida.web.entity.MemberChattingViewF;

public interface FriendService 
{
	
	// ====친구의 이름 과 몇 명인지 알기위해 만든 메소드.
	//List<Friend> getFriendList(String myId);
	List<Friend> getFriendList(String myId);
	
	List<Friend> chkFriend(String myId,String memberId);
	
	List<Friend> searchFriend(String myId,String searchText);

	
	// ====위에서 구한 친구목록 및 사이즈를 이용해서 
	// ==== Member테이블에서 각 친구의 msg와 img를 가져오기 위한 메스ㅗ드 .
	List<FriendDataView> getFriendData(String friendId);
	
	//친구면 FriendDataView에서 가져오기
	FriendDataView getMyFriendData(String friendId);
	//친구 아니면 멤버로 가서 가져오기
	Member getNoFriendData(String memberId);
	
	
	// ==== 친구와 마지막으로 나눈 대화 및 이미지 등등 정보를 가져오기위한 메소드
	List<MemberChattingViewF> getLastTalkData(String myId, String friendId);
	
	//Admin과 마지막으로 대화 나눈 것을 가져오기위한 메소드
	List<MemberChat> getLastAdminTalkData(String myId);
	
	//생각해보니 Admin은 친구가아니라서 이미지를 못가져옴... ㅠ
	List<FriendDataView> getAdminImg();

	//내가 Admin이라면 회원들과 대화한 마지막 내용을 가져와야한다. 그래서 만든 메소드
	List<MemberChat> getImAdminLimit();
	
	//내가 Admin 일 경우 나에게 대화를 한번이라도 보낸 멤버의 아이디를 리턴해주는 메소드
	List<AdminChatMemberView> getadMemberList();
	
	
	
	int insert(String myId,String friendId);
	
	int delete(String myId,String friendId);

	

	
}
