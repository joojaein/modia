package com.moida.web.entity;

import java.util.Date;

public class LeaderMngRequestMemberView {

   private String memberId;
   private String name;
   private int age;
   private int gender;
   private String areaSido;
   private Date reqDate;
   private int crowdId;

   public LeaderMngRequestMemberView() {
   }
	
	public LeaderMngRequestMemberView(String memberId, String name, int age, int gender, String areaSido, Date reqDate,
			int crowdId) {
		super();
		this.memberId = memberId;
		this.name = name;
		this.age = age;
		this.gender = gender;
		this.areaSido = areaSido;
		this.reqDate = reqDate;
		this.crowdId = crowdId;
	}
	
	public String getMemberId() {
		return memberId;
	}
	
	public void setMemberId(String memberId) {
		this.memberId = memberId;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public int getAge() {
		return age;
	}
	
	public void setAge(int age) {
		this.age = age;
	}
	
	public int getGender() {
		return gender;
	}
	
	public void setGender(int gender) {
		this.gender = gender;
	}
	
	public String getAreaSido() {
		return areaSido;
	}
	
	public void setAreaSido(String areaSido) {
		this.areaSido = areaSido;
	}
	
	public Date getReqDate() {
		return reqDate;
	}
	
	public void setReqDate(Date reqDate) {
		this.reqDate = reqDate;
	}
	
	public int getCrowdId() {
		return crowdId;
	}
	
	public void setCrowdId(int crowdId) {
		this.crowdId = crowdId;
	}
	
	   

}

	