 package com.moida.web.entity;

public class Board {
	private int id;
	private String name;
	private int type;
	private int crowdId;
	
	public Board() {
	}

	public Board(int id, String name, int type, int crowdId) {
		super();
		this.id = id;
		this.name = name;
		this.type = type;
		this.crowdId = crowdId;
	}

	public Board(String name, int crowdId) {
		super();
		this.name = name;
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

	
	
}
