package com.moida.web.entity;

public class CrowdTag {
	
	private int crowdId;
	private int tagId;
	
	
	public CrowdTag() {
		super();
		// TODO Auto-generated constructor stub
	}


	public CrowdTag(int crowdId, int tagId) {
		super();
		this.crowdId = crowdId;
		this.tagId = tagId;
	}


	public int getCrowdId() {
		return crowdId;
	}


	public void setCrowdId(int crowdId) {
		this.crowdId = crowdId;
	}


	public int getTagId() {
		return tagId;
	}


	public void setTagId(int tagId) {
		this.tagId = tagId;
	}


	@Override
	public String toString() {
		return "CrowdTag [crowdId=" + crowdId + ", tagId=" + tagId + "]";
	}
}
