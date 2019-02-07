package com.moida.web.entity;

import java.util.Date;

public class LeaderMngChartView {

   private int crowdId;
   private int hitCnt;
   private int regCnt;
   private Date date;

   public LeaderMngChartView() {
   }
	
	public LeaderMngChartView(int crowdId, int hitCnt, int regCnt, Date date) {
		super();
		this.crowdId = crowdId;
		this.hitCnt = hitCnt;
		this.regCnt = regCnt;
		this.date = date;
	}
	
	public int getCrowdId() {
		return crowdId;
	}
	
	public void setCrowdId(int crowdId) {
		this.crowdId = crowdId;
	}
	
	public int getHitCnt() {
		return hitCnt;
	}
	
	public void setHitCnt(int hitCnt) {
		this.hitCnt = hitCnt;
	}
	
	public int getRegCnt() {
		return regCnt;
	}
	
	public void setRegCnt(int regCnt) {
		this.regCnt = regCnt;
	}
	
	public Date getDate() {
		return date;
	}
	
	public void setDate(Date date) {
		this.date = date;
	}
	   
	   
}

	