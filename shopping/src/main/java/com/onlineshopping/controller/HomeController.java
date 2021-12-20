package com.onlineshopping.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.onlineshopping.entity.Product;
import com.onlineshopping.service.ProductService;
import com.onlineshopping.service.UserService;

@RestController
public class HomeController {

	@Autowired
	UserService userService;

	@Autowired
	ProductService productService;

	@GetMapping("/")
	public String home(Map<String, Object> map) {
		return "home";
	}

	@GetMapping("/productlists")
	public List<Product> getAllProduct() {
		return productService.getAllProduct();
	}

}