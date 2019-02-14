package com.moida.web.entity;

import java.util.Date;

public class LeaderMngMemberView {

   private String memberId;
   private int crowdId;
   private int groupRole;
   private Date regDate;
   private Date recently;

   public LeaderMngMemberView() {
   }
	
	public LeaderMngMemberView(String memberId, int crowdId, int groupRole, Date regDate, Date recently) {
		super();
		this.memberId = memberId;
		this.crowdId = crowdId;
		this.groupRole = groupRole;
		this.regDate = regDate;
		this.recently = recently;
	}
	
	public String getMemberId() {
		return memberId;
	}
	
	public void setMemberId(String memberId) {
		this.memberId = memberId;
	}
	
	public int getCrowdId() {
		return crowdId;
	}
	
	public void setCrowdId(int crowdId) {
		this.crowdId = crowdId;
	}
	
	public int getGroupRole() {
		return groupRole;
	}
	
	public void setGroupRole(int groupRole) {
		this.groupRole = groupRole;
	}
	
	public Date getRegDate() {
		return regDate;
	}
	
	public void setRegDate(Date regDate) {
		this.regDate = regDate;
	}
	
	public Date getRecently() {
		return recently;
	}
	
	public void setRecently(Date recently) {
		this.recently = recently;
	}

   

}

	