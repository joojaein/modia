package com.moida.web.entity;

import java.util.Date;

public class PostsView {
	private int id;
	private int boardId;
	private String title;
	private String content;
	private String mainImg;
	private String writerId;
	private Date regDate;
	private int hit;
	private int postsId;
	private String name;
	private int type;
	private int crowdId;
	
	public PostsView() {
		super();
		// TODO Auto-generated constructor stub
	}
	public PostsView(int id, int boardId, String title, String content, String mainImg, String writerId,
			Date regDate, int hit, int postsId, String name, int type, int crowdId) {
		super();
		this.id = id;
		this.boardId = boardId;
		this.title = title;
		this.content = content;
		this.mainImg = mainImg;
		this.writerId = writerId;
		this.regDate = regDate;
		this.hit = hit;
		this.postsId = postsId;
		this.name = name;
		this.type = type;
		this.crowdId = crowdId;
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
	public int getPostsId() {
		return postsId;
	}
	public void setPostsId(int postsId) {
		this.postsId = postsId;
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
	@Override
	public String toString() {
		return "postsListView [id=" + id + ", boardId=" + boardId + ", title=" + title + ", content=" + content
				+ ", mainImg=" + mainImg + ", writerId=" + writerId + ", regDate=" + regDate + ", hit=" + hit
				+ ", postsId=" + postsId + ", name=" + name + ", type=" + type + ", crowdId=" + crowdId + "]";
	}
	
}
