package com.moida.web.entity;

public class CategoryView {
	
	private String name;
	private int categoryId;
	private int rank;
	
	public CategoryView() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	public CategoryView(String name, int categoryId, int rank) {
		super();
		this.name = name;
		this.categoryId = categoryId;
		this.rank = rank;
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



	@Override
	public String toString() {
		return "CategoryView [name=" + name + ", categoryId=" + categoryId + ", rank=" + rank + "]";
	}
	

}
