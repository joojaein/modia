package com.moida.web.entity;

import java.util.Date;

public class Member {

   private String id;
   private String pwd;
   private String name;
   private String areaSido;
   private String email;
   private Date birth;
   private int gender;
   private String msg;
   private String img;
   private Date regDate;
   
   public Member() {
   }

   public Member(String id, String pwd, String name, String areaSido, String email, Date birth, int gender, String msg,
         String img, Date regDate) {
      super();
      this.id = id;
      this.pwd = pwd;
      this.name = name;
      this.areaSido = areaSido;
      this.email = email;
      this.birth = birth;
      this.gender = gender;
      this.msg = msg;
      this.img = img;
      this.regDate = regDate;
   }
   
   public Member(String id, String pwd, String name, String areaSido, String email, Date birth, int gender, String msg,
	         String img) {
	      super();
	      this.id = id;
	      this.pwd = pwd;
	      this.name = name;
	      this.areaSido = areaSido;
	      this.email = email;
	      this.birth = birth;
	      this.gender = gender;
	      this.msg = msg;
	      this.img = img;
	   }

   public String getId() {
      return id;
   }

   public void setId(String id) {
      this.id = id;
   }

   public String getPwd() {
      return pwd;
   }

   public void setPwd(String pwd) {
      this.pwd = pwd;
   }

   public String getName() {
      return name;
   }

   public void setName(String name) {
      this.name = name;
   }

   public String getAreaSido() {
      return areaSido;
   }

   public void setAreaSido(String areaSido) {
      this.areaSido = areaSido;
   }

   public String getEmail() {
      return email;
   }

   public void setEmail(String email) {
      this.email = email;
   }

   public Date getBirth() {
      return birth;
   }

   public void setBirth(Date birth) {
      this.birth = birth;
   }

   public int getGender() {
      return gender;
   }

   public void setGender(int gender) {
      this.gender = gender;
   }

   public String getMsg() {
      return msg;
   }

   public void setMsg(String msg) {
      this.msg = msg;
   }

   public String getImg() {
      return img;
   }

   public void setImg(String img) {
      this.img = img;
   }

   public Date getRegDate() {
      return regDate;
   }

   public void setRegDate(Date regDate) {
      this.regDate = regDate;
   }

   @Override
   public String toString() {
      return "Member [id=" + id + ", pwd=" + pwd + ", name=" + name + ", areaSido=" + areaSido + ", email=" + email
            + ", birth=" + birth + ", gender=" + gender + ", msg=" + msg + ", img=" + img + ", regDate=" + regDate
            + "]";
   }
   
   
}
