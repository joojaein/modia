package com.moida.web.entity;

import java.util.Date;

public class Crowd {
	private int id;
	private String name;
	private String content;
	private String areaSido;
	private String areaSigungu;
	private String ageMin;
	private String ageMax;
	private int gender;
	private int maxPerson;
	private String img;
	private int categoryId;
	private String leaderId;
	private Date regDate;
	public Crowd() {

		// TODO Auto-generated constructor stub
	}
	public Crowd(int id, String name, String content, String areaSido, String areaSigungu, String ageMin, String ageMax,
			int gender, int maxPerson, String img, int categoryId, String leaderId, Date regDate) {
		super();
		this.id = id;
		this.name = name;
		this.content = content;
		this.areaSido = areaSido;
		this.areaSigungu = areaSigungu;
		this.ageMin = ageMin;
		this.ageMax = ageMax;
		this.gender = gender;
		this.maxPerson = maxPerson;
		this.img = img;
		this.categoryId = categoryId;
		this.leaderId = leaderId;
		this.regDate = regDate;
	}
	public Crowd(String name, String content, String areaSido, String areaSigungu, String ageMin, String ageMax,
			int gender, int maxPerson, String img, int categoryId) {
		super();
		this.name = name;
		this.content = content;
		this.areaSido = areaSido;
		this.areaSigungu = areaSigungu;
		this.ageMin = ageMin;
		this.ageMax = ageMax;
		this.gender = gender;
		this.maxPerson = maxPerson;
		this.img = img;
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
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getAreaSido() {
		return areaSido;
	}
	public void setAreaSido(String areaSido) {
		this.areaSido = areaSido;
	}
	public String getAreaSigungu() {
		return areaSigungu;
	}
	public void setAreaSigungu(String areaSigungu) {
		this.areaSigungu = areaSigungu;
	}
	public String getAgeMin() {
		return ageMin;
	}
	public void setAgeMin(String ageMin) {
		this.ageMin = ageMin;
	}
	public String getAgeMax() {
		return ageMax;
	}
	public void setAgeMax(String ageMax) {
		this.ageMax = ageMax;
	}
	public int getGender() {
		return gender;
	}
	public void setGender(int gender) {
		this.gender = gender;
	}
	public int getMaxPerson() {
		return maxPerson;
	}
	public void setMaxPerson(int maxPerson) {
		this.maxPerson = maxPerson;
	}
	public String getImg() {
		return img;
	}
	public void setImg(String img) {
		this.img = img;
	}
	public int getCategoryId() {
		return categoryId;
	}
	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}
	public String getLeaderId() {
		return leaderId;
	}
	public void setLeaderId(String leaderId) {
		this.leaderId = leaderId;
	}
	public Date getRegDate() {
		return regDate;
	}
	public void setRegDate(Date regDate) {
		this.regDate = regDate;
	}
	@Override
	public String toString() {
		return "Crowd [id=" + id + ", name=" + name + ", content=" + content + ", areaSido=" + areaSido
				+ ", areaSigungu=" + areaSigungu + ", ageMin=" + ageMin + ", ageMax=" + ageMax + ", gender=" + gender
				+ ", maxPerson=" + maxPerson + ", img=" + img + ", categoryId=" + categoryId + ", leaderId=" + leaderId
				+ ", regDate=" + regDate + "]";
	}


}