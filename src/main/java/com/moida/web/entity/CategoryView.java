package com.moida.web.entity;

public class CategoryView {
	
	private String name;
	private int categoryId;
	private int rank;
	private int id;
	
	public CategoryView() {
		super();
		// TODO Auto-generated constructor stub
	}

	public CategoryView(String name, int categoryId, int rank, int id) {
		super();
		this.name = name;
		this.categoryId = categoryId;
		this.rank = rank;
		this.id = id;
	}
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}

	public int getRank() {
		return rank;
	}

	public void setRank(int rank) {
		this.rank = rank;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	@Override
	public String toString() {
		return "CategoryView [name=" + name + ", categoryId=" + categoryId + ", rank=" + rank + ", id=" + id + "]";
	}
}
