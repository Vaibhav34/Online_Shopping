package com.onlineshopping.service;

import java.util.List;

import com.onlineshopping.dto.ProductDTO;
import com.onlineshopping.entity.Product;

public interface ProductService {
	public Product addProduct(ProductDTO productDto);
	public void deleteProduct(Integer prodId);
	public Product getProdById(Integer prodId);
	public List<Product> getAllProduct();
	public List<Product> findByName(String prodName);
	public Product updateProduct(ProductDTO productDto);
	

}
