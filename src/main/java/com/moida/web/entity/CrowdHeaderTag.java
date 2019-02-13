package com.moida.web.entity;

public class CrowdHeaderTag {
	
	private int id;
	private String name;
	private int type;
	private int crowdId;
	private int cid;
	private String mainname;
	public CrowdHeaderTag() {
		super();
		// TODO Auto-generated constructor stub
	}
	public CrowdHeaderTag(int id, String name, int type, int crowdId, int cid, String mainname) {
		super();
		this.id = id;
		this.name = name;
		this.type = type;
		this.crowdId = crowdId;
		this.cid = cid;
		this.mainname = mainname;
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
	public int getCid() {
		return cid;
	}
	public void setCid(int cid) {
		this.cid = cid;
	}
	public String getMainname() {
		return mainname;
	}
	public void setMainname(String mainname) {
		this.mainname = mainname;
	}
	@Override
	public String toString() {
		return "CrowdHeaderTag [id=" + id + ", name=" + name + ", type=" + type + ", crowdId=" + crowdId + ", cid="
				+ cid + ", mainname=" + mainname + "]";
	}

}
