package com.moida.web.entity;

public class AdminChatMemberView 
{
	private String receiverId;
	private String senderId;
	public AdminChatMemberView() {
		super();
		// TODO Auto-generated constructor stub
	}
	public AdminChatMemberView(String receiverId, String senderId) {
		super();
		this.receiverId = receiverId;
		this.senderId = senderId;
	}
	public String getreceiverId() {
		return receiverId;
	}
	public void setreceiverId(String receiverId) {
		this.receiverId = receiverId;
	}
	public String getSenderId() {
		return senderId;
	}
	public void setSenderId(String senderId) {
		this.senderId = senderId;
	}
	@Override
	public String toString() {
		return "AdminChatMemberView [receiverId=" + receiverId + ", senderId=" + senderId + "]";
	}
	
	
	
	
}
