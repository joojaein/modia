package com.moida.web.entity;

public class Tag {
	private int categoryId;
	private int id;
	private String name;
	
	public Tag() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Tag(int categoryId, int id, String name) {
		super();
		this.categoryId = categoryId;
		this.id = id;
		this.name = name;
	}

	public int getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
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

	@Override
	public String toString() {
		return "Tag [categoryId=" + categoryId + ", id=" + id + ", name=" + name + "]";
	}
	
	
}
