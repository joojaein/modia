package com.moida.web.entity;

public class CrowdView {
	private int hit;

	public CrowdView() {
		super();
		// TODO Auto-generated constructor stub
	}

	public CrowdView(int hit) {
		super();
		this.hit = hit;
	}

	public int getHit() {
		return hit;
	}

	public void setHit(int hit) {
		this.hit = hit;
	}

	@Override
	public String toString() {
		return "CrowdView [hit=" + hit + "]";
	}
	
}
