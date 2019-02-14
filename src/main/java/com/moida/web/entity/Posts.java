 package com.moida.web.entity;

import java.util.Date;

public class Posts {
	private int id;
	private int boardId;
	private String title;
	private String content;
	private String mainImg;
	private String writerId;
	private Date regDate;
	private int hit;
	
	public Posts() {
	}

	public Posts(int id, int boardId, String title, String content, String mainImg, String writerId, Date regDate, int hit) {
		super();
		this.id = id;
		this.boardId = boardId;
		this.title = title;
		this.content = content;
		this.mainImg = mainImg;
		this.writerId = writerId;
		this.regDate = regDate;
		this.hit = hit;
	}
	
	public Posts(int boardId, String title, String content, String mainImg, String writerId) {
		super();
		this.boardId = boardId;
		this.title = title;
		this.content = content;
		this.mainImg = mainImg;
		this.writerId = writerId;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getBoardId() {
		return boardId;
	}

	public void setBoardId(int boardId) {
		this.boardId = boardId;
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

	public String getMainImg() {
		return mainImg;
	}

	public void setMainImg(String mainImg) {
		this.mainImg = mainImg;
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

	public int getHit() {
		return hit;
	}

	public void setHit(int hit) {
		this.hit = hit;
	}

	
	
}
