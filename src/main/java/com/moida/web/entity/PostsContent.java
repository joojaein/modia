 package com.moida.web.entity;

public class PostsContent {
	private int id;
	private int postsId;
	private String src;
	private String text;
	private int ord;
	
	public PostsContent() {
	}

	public PostsContent(int id, int postsId, String src, String text, int ord) {
		super();
		this.id = id;
		this.postsId = postsId;
		this.src = src;
		this.text = text;
		this.ord = ord;
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

	public String getSrc() {
		return src;
	}

	public void setSrc(String src) {
		this.src = src;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public int getOrd() {
		return ord;
	}

	public void setOrd(int ord) {
		this.ord = ord;
	}

	@Override
	public String toString() {
		return "PostsContent [id=" + id + ", postsId=" + postsId + ", src=" + src + ", text=" + text + ", ord=" + ord
				+ "]";
	}

	
	
	
}
