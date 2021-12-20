package com.onlineshopping.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.onlineshopping.dao.AdminDao;
import com.onlineshopping.dao.ProductDAO;
import com.onlineshopping.dao.UserDAO;
import com.onlineshopping.entity.Admin;
import com.onlineshopping.entity.Login;
import com.onlineshopping.entity.Product;
import com.onlineshopping.entity.User;
import com.onlineshopping.exception.NoUserFoundException;

public class AdminServiceImpl implements AdminService {

	@Autowired
	ProductDAO productDao;
	@Autowired
	UserDAO userDao;
	@Autowired
	AdminDao admindao;
	
	@Override
	public Product addProduct(Product product) {
		return productDao.save(product);
		
	}
	@Override
	public void deleteProduct(Integer prodId) {

		productDao.deleteById(prodId);
	}

	@Override
	public Product getProdById(Integer prodId) {

		
		return productDao.findById(prodId).orElseThrow(NoUserFoundException::new);
	}

	@Override
	public List<Product> getAllProduct() {
		
		return productDao.findAll();
	

	}

	@Override
	public Product updateProduct(Product product) {
		
		
		Integer productId = product.getProdId();
		
		Product pd = productDao.findById(productId).get();
		
		pd.setProdPrice(product.getProdPrice());
		pd.setProdQuantity(product.getProdQuantity());
		
		return productDao.save(pd);	
	}

	@Override
	public User getUserDetailsById(Integer userId) {
		
		
	return null;
	}

	@Override
	public User getAllUserDetails(User user) {
		
		return null;
	}

	@Override
	public Admin validateUser(Login login) {
		return admindao.findById(login.getAdminName()).orElseThrow(NoUserFoundException::new);
	}

	@Override
	public String updateProductByName(String prodName) {
		
		return null;
	}



}
