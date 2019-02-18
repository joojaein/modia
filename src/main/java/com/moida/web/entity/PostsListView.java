package com.moida.web.entity;

import java.util.Date;

public class PostsListView {
	private int id;
	private int boardId;
	private String title;
	private String content;
	private String mainImg;
	private String writerId;
	private Date regDate;
	private int hit;
	private int type;
	private int crowdId;
	private int cmtCnt;
	private String img;
	
	public PostsListView() {
		super();
		// TODO Auto-generated constructor stub
	}

	public PostsListView(int id, int boardId, String title, String content, String mainImg, String writerId,
			Date regDate, int hit, int type, int crowdId, int cmtCnt, String img) {
		super();
		this.id = id;
		this.boardId = boardId;
		this.title = title;
		this.content = content;
		this.mainImg = mainImg;
		this.writerId = writerId;
		this.regDate = regDate;
		this.hit = hit;
		this.type = type;
		this.crowdId = crowdId;
		this.cmtCnt = cmtCnt;
		this.img = img;
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

	public int getCmtCnt() {
		return cmtCnt;
	}

	public void setCmtCnt(int cmtCnt) {
		this.cmtCnt = cmtCnt;
	}

	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}

	@Override
	public String toString() {
		return "PostsListView [id=" + id + ", boardId=" + boardId + ", title=" + title + ", content=" + content
				+ ", mainImg=" + mainImg + ", writerId=" + writerId + ", regDate=" + regDate + ", hit=" + hit
				+ ", type=" + type + ", crowdId=" + crowdId + ", cmtCnt=" + cmtCnt + ", img=" + img + "]";
	}
	
}
