package com.onlineshopping.service;

import java.util.List;

import com.onlineshopping.entity.Admin;
import com.onlineshopping.entity.Login;
import com.onlineshopping.entity.Product;
import com.onlineshopping.entity.User;

public interface AdminService {
	public Admin validateUser(Login login);

	public Product addProduct(Product product);

	public void deleteProduct(Integer prodId);

	public Product getProdById(Integer prodId);

	public List<Product> getAllProduct();

	public Product updateProduct(Product product);

	public User getUserDetailsById(Integer userId);

	public User getAllUserDetails(User user);

	public String updateProductByName(String prodName);
}
