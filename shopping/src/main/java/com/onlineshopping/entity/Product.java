package com.onlineshopping.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name="produt_details")
public class Product {
	
	@Id
	private Integer prodId;
	private String prodName;
	private Double prodPrice;
	private Integer prodQuantity;
	public Integer getProdQuantity() {
		return prodQuantity;
	}
	public void setProdQuantity(Integer prodQuantity) {
		this.prodQuantity = prodQuantity;
	}
	public Integer getProdId() {
		return prodId;
	}
	public void setProdId(Integer prodId) {
		this.prodId = prodId;
	}
	public String getProdName() {
		return prodName;
	}
	public void setProdName(String prodName) {
		this.prodName = prodName;
	}
	public Double getProdPrice() {
		return prodPrice;
	}
	public void setProdPrice(Double prodPrice) {
		this.prodPrice = prodPrice;
	}
	
}
