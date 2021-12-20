package com.onlineshopping.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name="Acount")
public class Account {
	public static final String ROLEADMIN="ADMIN";
	public static final String ROLECUSTOMER="CUSTOMER";
	
	@Id
	private String userName;
	private String userRole;
	private String userPassword;
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getUserRole() {
		return userRole;
	}
	public void setUserRole(String userRole) {
		this.userRole = userRole;
	}
	public String getUserPassword() {
		return userPassword;
	}
	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}
	@Override
	public String toString() {
		return "Account [userName=" + userName + ", userRole=" + userRole + ", userPassword=" + userPassword + "]";
	}
	
}
