package com.moida.web.entity;

import java.util.Date;

public class MemberChat 
{
	private int id;
	private String content;
	private String receiverId;
	private String senderId;
	private Date regDate;
	public MemberChat() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public MemberChat(int id, String content, String receiverId, String senderId, Date regDate) {
		super();
		this.id = id;
		this.content = content;
		this.receiverId = receiverId;
		this.senderId = senderId;
		this.regDate = regDate;
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getReceiverId() {
		return receiverId;
	}
	public void setReceiverId(String receiverId) {
		this.receiverId = receiverId;
	}
	public String getSenderId() {
		return senderId;
	}
	public void setSenderId(String senderId) {
		this.senderId = senderId;
	}
	public Date getRegDate() {
		return regDate;
	}
	public void setRegDate(Date regDate) {
		this.regDate = regDate;
	}
	@Override
	public String toString() {
		return "MemberChatting [id=" + id + ", content=" + content + ", receiverId=" + receiverId + ", senderId="
				+ senderId + ", regDate=" + regDate + "]";
	}
	
	
	
	
	
}
