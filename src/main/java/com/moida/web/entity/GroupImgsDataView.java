package com.moida.web.entity;

public class GroupImgsDataView 
{
	private String memberId;
	private int crowdId;
	private String img;
	public GroupImgsDataView() {
		super();
		// TODO Auto-generated constructor stub
	}
	public GroupImgsDataView(String memberId, int crowdId, String img) {
		super();
		this.memberId = memberId;
		this.crowdId = crowdId;
		this.img = img;
	}
	public String getMemberId() {
		return memberId;
	}
	public void setMemberId(String memberId) {
		this.memberId = memberId;
	}
	public int getCrowdId() {
		return crowdId;
	}
	public void setCrowdId(int crowdId) {
		this.crowdId = crowdId;
	}
	public String getImg() {
		return img;
	}
	public void setImg(String img) {
		this.img = img;
	}
	@Override
	public String toString() {
		return "GroupImgsDataView [memberId=" + memberId + ", crowdId=" + crowdId + ", img=" + img + "]";
	}
	
	
	
	
	
	
	
}
