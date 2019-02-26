package com.moida.web.entity;

public class Good {
	private String memberId;
	private int postsId;

	public Good() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	public Good(String memberId, int postsId) {
		super();
		this.memberId = memberId;
		this.postsId = postsId;
	}

	public String getMemberId() {
		return memberId;
	}

	public void setMemberId(String memberId) {
		this.memberId = memberId;
	}

	public int getPostsId() {
		return postsId;
	}

	public void setPostsId(int postsId) {
		this.postsId = postsId;
	}

	@Override
	public String toString() {
		return "Good [memberId=" + memberId + ", postsId=" + postsId + "]";
	}
	
}
