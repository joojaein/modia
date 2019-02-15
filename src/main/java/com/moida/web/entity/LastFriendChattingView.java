package com.moida.web.entity;

import java.util.Date;

public class LastFriendChattingView 
{
	private String id;
	private String friendId;
	private String senderId;
	private String receiverId;
	private Date regDate;
	private String content;
	private String img;
	
	public LastFriendChattingView() {
		super();
		// TODO Auto-generated constructor stub
	}
	public LastFriendChattingView(String id, String friendId, String senderId, String receiverId, Date regDate,
			String content, String img) {
		super();
		this.id = id;
		this.friendId = friendId;
		this.senderId = senderId;
		this.receiverId = receiverId;
		this.regDate = regDate;
		this.content = content;
		this.img = img;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getFriendId() {
		return friendId;
	}
	public void setFriendId(String friendId) {
		this.friendId = friendId;
	}
	public String getSenderId() {
		return senderId;
	}
	public void setSenderId(String senderId) {
		this.senderId = senderId;
	}
	public String getReceiverId() {
		return receiverId;
	}
	public void setReceiverId(String receiverId) {
		this.receiverId = receiverId;
	}
	public Date getRegDate() {
		return regDate;
	}
	public void setRegDate(Date regDate) {
		this.regDate = regDate;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getImg() {
		return img;
	}
	public void setImg(String img) {
		this.img = img;
	}
	@Override
	public String toString() {
		return "LastFriendChattingView [id=" + id + ", friendId=" + friendId + ", senderId=" + senderId
				+ ", receiverId=" + receiverId + ", regDate=" + regDate + ", content=" + content + ", img=" + img + "]";
	}
	
	
	
	
}
