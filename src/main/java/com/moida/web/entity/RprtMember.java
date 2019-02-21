package com.moida.web.entity;

public class RprtMember 
{
	private String rprtId;
	private String writerId;
	private String title;
	private String content;
	public RprtMember() {
		super();
		// TODO Auto-generated constructor stub
	}
	public RprtMember(String rprtId, String writerId, String title, String content) {
		super();
		this.rprtId = rprtId;
		this.writerId = writerId;
		this.title = title;
		this.content = content;
	}
	public String getRprtId() {
		return rprtId;
	}
	public void setRprtId(String rprtId) {
		this.rprtId = rprtId;
	}
	public String getWriterId() {
		return writerId;
	}
	public void setWriterId(String writerId) {
		this.writerId = writerId;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	@Override
	public String toString() {
		return "RprtMember [rprtId=" + rprtId + ", writerId=" + writerId + ", title=" + title + ", content=" + content
				+ "]";
	}
	
	
	
	
	
	
	
}
