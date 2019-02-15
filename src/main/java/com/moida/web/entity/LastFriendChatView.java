package com.moida.web.entity;

import java.util.Date;

public class LastFriendChatView 
{
	private String id;
	private String friendId;
	private String senderId;
	private String receiverId;
	private Date regDate;
	private String content;
	private String receiverimg;
	private String senderimg;
	public LastFriendChatView() {
		super();
		// TODO Auto-generated constructor stub
	}
	public LastFriendChatView(String id, String friendId, String senderId, String receiverId, Date regDate,
			String content, String receiverimg, String senderimg) {
		super();
		this.id = id;
		this.friendId = friendId;
		this.senderId = senderId;
		this.receiverId = receiverId;
		this.regDate = regDate;
		this.content = content;
		this.receiverimg = receiverimg;
		this.senderimg = senderimg;
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
	public String getReceiverimg() {
		return receiverimg;
	}
	public void setReceiverimg(String receiverimg) {
		this.receiverimg = receiverimg;
	}
	public String getSenderimg() {
		return senderimg;
	}
	public void setSenderimg(String senderimg) {
		this.senderimg = senderimg;
	}
	@Override
	public String toString() {
		return "LastFriendChatView [id=" + id + ", friendId=" + friendId + ", senderId=" + senderId + ", receiverId="
				+ receiverId + ", regDate=" + regDate + ", content=" + content + ", receiverimg=" + receiverimg
				+ ", senderimg=" + senderimg + "]";
	}
	
	
	
	
}
