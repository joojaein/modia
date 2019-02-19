package com.moida.web.entity;

import java.util.Date;

public class GroupChat 
{
	private String id;
	private String content;
	private String receiverGroupId;
	private String senderId;
	private Date regDate;
	public GroupChat() {
		super();
		// TODO Auto-generated constructor stub
	}
	public GroupChat(String id, String content, String receiverGroupId, String senderId, Date regDate) {
		super();
		this.id = id;
		this.content = content;
		this.receiverGroupId = receiverGroupId;
		this.senderId = senderId;
		this.regDate = regDate;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getReceiverGroupId() {
		return receiverGroupId;
	}
	public void setReceiverGroupId(String receiverGroupId) {
		this.receiverGroupId = receiverGroupId;
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
		return "GroupChat [id=" + id + ", content=" + content + ", receiverGroupId=" + receiverGroupId + ", senderId="
				+ senderId + ", regDate=" + regDate + "]";
	}
	
	
}
