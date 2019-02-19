package com.moida.web.entity;

import java.util.Date;

public class GroupChattingListDataView 
{
	private int id;
	private String content;
	private int receiverGroupId;
	private String senderId;
	private Date regDate;
	private String img;
	public GroupChattingListDataView() {
		super();
		// TODO Auto-generated constructor stub
	}
	public GroupChattingListDataView(int id, String content, int receiverGroupId, String senderId, Date regDate,
			String img) {
		super();
		this.id = id;
		this.content = content;
		this.receiverGroupId = receiverGroupId;
		this.senderId = senderId;
		this.regDate = regDate;
		this.img = img;
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
	public int getReceiverGroupId() {
		return receiverGroupId;
	}
	public void setReceiverGroupId(int receiverGroupId) {
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
	public String getImg() {
		return img;
	}
	public void setImg(String img) {
		this.img = img;
	}
	@Override
	public String toString() {
		return "GroupChattingListDataView [id=" + id + ", content=" + content + ", receiverGroupId=" + receiverGroupId
				+ ", senderId=" + senderId + ", regDate=" + regDate + ", img=" + img + "]";
	}
	
	
	
}
