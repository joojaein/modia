package com.moida.web.entity;

import java.util.Date;

public class Schedule{
	
	private int id;
	private int crowdId;
	private Date date;	
	private String title;
	private String content;
	
	public Schedule() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Schedule(int id, int crowdId, Date date, String title, String content) {
		super();
		this.id = id;
		this.crowdId = crowdId;
		this.date = date;
		this.title = title;
		this.content = content;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getCrowdId() {
		return crowdId;
	}

	public void setCrowdId(int crowdId) {
		this.crowdId = crowdId;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
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
		return "Schedule [id=" + id + ", crowdId=" + crowdId + ", date=" + date + ", title=" + title + ", content="
				+ content + "]";
	}

	
	
}
