package com.moida.web.entity;

public class FriendDataView {

	
	private String id;
	private String img;
	private String msg;
	public FriendDataView() {
		super();
		// TODO Auto-generated constructor stub
	}
	public FriendDataView(String id, String img, String msg) {
		super();
		this.id = id;
		this.img = img;
		this.msg = msg;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getImg() {
		return img;
	}
	public void setImg(String img) {
		this.img = img;
	}
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
	@Override
	public String toString() {
		return "FriendDataView [id=" + id + ", img=" + img + ", msg=" + msg + "]";
	}

	
	
	
}
