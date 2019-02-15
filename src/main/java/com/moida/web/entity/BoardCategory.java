package com.moida.web.entity;

public class BoardCategory {
	
	private int id;
	private String name;
	private int type;
	private int crowdId;
	
	public BoardCategory() {
		// TODO Auto-generated constructor stub
	}

	public BoardCategory(int id, String name, int type, int crowdId) {
		super();
		this.id = id;
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
		return "BoardCategory [id=" + id + ", name=" + name + ", type=" + type + ", crowdId=" + crowdId + "]";
	}
	
	
}
