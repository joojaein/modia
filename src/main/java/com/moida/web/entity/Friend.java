package com.moida.web.entity;

public class Friend 
{
	private String friendId;
	private String memberId;
	public Friend() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Friend(String friendId, String memberId) {
		super();
		this.friendId = friendId;
		this.memberId = memberId;
	}
	public String getFriendId() {
		return friendId;
	}
	public void setFriendId(String friendId) {
		this.friendId = friendId;
	}
	public String getMemberId() {
		return memberId;
	}
	public void setMemberId(String memberId) {
		this.memberId = memberId;
	}
	@Override
	public String toString() {
		return "Friend [friendId=" + friendId + ", memberId=" + memberId + "]";
	}

	
	
	
	
	
	
}
