package com.moida.web.entity;

import java.util.Date;

public class Cmt {
	private int id;
	private int postsId;
	private String content;
	private String writerId;
	private Date regDate;
	
	public Cmt() {
		super();
		// TODO Auto-generated constructor stub
	}
	

	public Cmt(int postsId, String content, String writerId) {
		super();
		this.postsId = postsId;
		this.content = content;
		this.writerId = writerId;
	}


	public Cmt(int id, int postsId, String content, String writerId, Date regDate) {
		super();
		this.id = id;
		this.postsId = postsId;
		this.content = content;
		this.writerId = writerId;
		this.regDate = regDate;
	}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public int getPostsId() {
		return postsId;
	}


	public void setPostsId(int postsId) {
		this.postsId = postsId;
	}


	public String getContent() {
		return content;
	}


	public void setContent(String content) {
		this.content = content;
	}


	public String getWriterId() {
		return writerId;
	}


	public void setWriterId(String writerId) {
		this.writerId = writerId;
	}


	public Date getRegDate() {
		return regDate;
	}


	public void setRegDate(Date regDate) {
		this.regDate = regDate;
	}


	@Override
	public String toString() {
		return "CmtListView [id=" + id + ", postsId=" + postsId + ", content=" + content + ", writerId=" + writerId
				+ ", regDate=" + regDate + "]";
	}


}