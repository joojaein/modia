package com.moida.web.entity;

import java.util.Date;

public class CrowdBoard {
	private int id;
	private String name;
	private int type;
	private int crowdId;
	private int boardId;
	private String title;
	private String content;
	private String writerId;
	private Date regDate;
	private int hit;
	
	public CrowdBoard() {
		super();
		// TODO Auto-generated constructor stub
	}

	public CrowdBoard(int boardId, String title, String content, String writerId) {
		super();
		this.boardId = boardId;
		this.title = title;
		this.content = content;
		this.writerId = writerId;
	}

	public CrowdBoard(int id, String name, int type, int crowdId, int boardId, String title, String content,
			String writerId, Date regDate, int hit) {
		super();
		this.id = id;
		this.name = name;
		this.type = type;
		this.crowdId = crowdId;
		this.boardId = boardId;
		this.title = title;
		this.content = content;
		this.writerId = writerId;
		this.regDate = regDate;
		this.hit = hit;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getType() {
		return type;
	}

	public void setType(int type) {
		this.type = type;
	}

	public int getCrowdId() {
		return crowdId;
	}

	public void setCrowdId(int crowdId) {
		this.crowdId = crowdId;
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

	@Override
	public String toString() {
		return "CrowdNotice [id=" + id + ", name=" + name + ", type=" + type + ", crowdId=" + crowdId + ", boardId="
				+ boardId + ", title=" + title + ", content=" + content + ", writerId=" + writerId + ", regDate="
				+ regDate + ", hit=" + hit + "]";
	}
	
	

}
