package com.onlineshopping.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
@Entity(name="Admin_Table")
public class Admin {
	@Id
	private String adminId;
	private String adminName;
	private String password;
	
	
	public String getAdminName() {
		return adminName;
	}
	public String getAdminId() {
		return adminId;
	}
	public void setAdminId(String adminId) {
		this.adminId = adminId;
	}
	public void setAdminName(String adminName) {
		this.adminName = adminName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}

}
