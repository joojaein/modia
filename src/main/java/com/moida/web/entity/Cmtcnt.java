package com.moida.web.entity;

public class Cmtcnt {
	private int hit;

	public Cmtcnt() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Cmtcnt(int hit) {
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
		return "Cmtcnt [hit=" + hit + "]";
	}
	
}
