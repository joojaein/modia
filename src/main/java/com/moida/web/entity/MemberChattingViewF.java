package com.moida.web.entity;

import java.util.Date;

public class MemberChattingViewF 
{
	private String id;
	private String img;
	private String content;
	private String receiverId;
	private Date regDate;
	private String receiverImg;
	public MemberChattingViewF() {
		super();
		// TODO Auto-generated constructor stub
	}
	public MemberChattingViewF(String id, String img, String content, String receiverId, Date regDate,
			String receiverImg) {
		super();
		this.id = id;
		this.img = img;
		this.content = content;
		this.receiverId = receiverId;
		this.regDate = regDate;
		this.receiverImg = receiverImg;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getImg() {
		return img;
	}
	public void setImg(String img) {
		this.img = img;
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
	public Date getRegDate() {
		return regDate;
	}
	public void setRegDate(Date regDate) {
		this.regDate = regDate;
	}
	public String getReceiverImg() {
		return receiverImg;
	}
	public void setReceiverImg(String receiverImg) {
		this.receiverImg = receiverImg;
	}
	@Override
	public String toString() {
		return "MemberChattingViewF [id=" + id + ", img=" + img + ", content=" + content + ", receiverId=" + receiverId
				+ ", regDate=" + regDate + ", receiverImg=" + receiverImg + "]";
	}
	
	
	
	
	
	
}
