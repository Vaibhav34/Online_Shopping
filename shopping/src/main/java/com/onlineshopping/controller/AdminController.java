package com.onlineshopping.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.onlineshopping.constant.Constant;
import com.onlineshopping.entity.Admin;
import com.onlineshopping.entity.Login;
import com.onlineshopping.entity.Product;
import com.onlineshopping.exception.NoUserFoundException;
import com.onlineshopping.service.AdminService;
import com.onlineshopping.service.ProductService;
import com.onlineshopping.service.UserService;

public class AdminController {
	@Autowired
	ProductService productService;

	@Autowired
	AdminService adminService;
	@Autowired
	UserService userService;

	@GetMapping("/productlist")
	public List<Product> getAllProduct() {
		return productService.getAllProduct();
	}

	@PostMapping(value = "/admin/login")
	public String login(@RequestBody Login login) throws NoUserFoundException {

		Admin admin = adminService.validateUser(login);

		boolean isValidUser = false;

		if (null != admin) {
			if ((admin.getAdminName().equals(login.getAdminName())
					&& admin.getPassword().equals(login.getPassword()))) {
				isValidUser = true;
			} else {
				throw new NoUserFoundException();
			}
		}
		return isValidUser ? Constant.SUCCESSFULLY_LOGGED_IN : Constant.LOGGED_IN_FAILED;
	}
}