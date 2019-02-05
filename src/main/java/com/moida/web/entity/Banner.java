 package com.moida.web.entity;

public class Banner {
	private int id;
	private int ord;
	private String src;
	
	
	public Banner() {
	}


	public Banner(int id, int ord, String src) {
		super();
		this.id = id;
		this.ord = ord;
		this.src = src;
	}

	public Banner(int ord, String src) {
		super();
		this.ord = ord;
		this.src = src;
	}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public int getOrd() {
		return ord;
	}


	public void setOrd(int ord) {
		this.ord = ord;
	}


	public String getSrc() {
		return src;
	}


	public void setSrc(String src) {
		this.src = src;
	}
	
	
}
