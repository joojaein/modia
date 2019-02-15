 package com.moida.web.entity;

public class RprtCrowd {
	private int crowdId;
	private String writerId;
	private String title;
	private String content;
	
	public RprtCrowd() {
	}

	public RprtCrowd(int crowdId, String writerId, String title, String content) {
		super();
		this.crowdId = crowdId;
		this.writerId = writerId;
		this.title = title;
		this.content = content;
	}
	
	public RprtCrowd(int crowdId, String writerId) {
		super();
		this.crowdId = crowdId;
		this.writerId = writerId;
	}

	public int getCrowdId() {
		return crowdId;
	}

	public void setCrowdId(int crowdId) {
		this.crowdId = crowdId;
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

	
}
