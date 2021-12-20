package com.onlineshopping.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.onlineshopping.dto.ProductDTO;
import com.onlineshopping.entity.Product;
import com.onlineshopping.exception.NoProductFoundException;
import com.onlineshopping.service.ProductService;

@RestController
public class ProductController {

	@Autowired
	ProductService productService;

	@GetMapping("/productlist")
	public List<Product> getAllProduct() {
		return productService.getAllProduct();
	}

	@PostMapping(value = "/addprodlist")
	public Product addProduct(@RequestBody ProductDTO productDto) {
		return productService.addProduct(productDto);
	}

	@GetMapping("/admin/productById/{prodId}")
	public ResponseEntity<Product> getProductById(@PathVariable Integer prodId) {
		Product product = productService.getProdById(prodId);

		if (product != null) {
			return new ResponseEntity<>(product, HttpStatus.OK);
		} else {
			throw new NoProductFoundException();
		}

	}

	@PutMapping("/admin/updateprod")
	public Product updateProduct(@RequestBody ProductDTO productDto) {
		return productService.updateProduct(productDto);

	}
	
	@GetMapping("/searchproduct/{prodName}")
	public ResponseEntity<List<Product>> getProductByName(@PathVariable("prodName") String prodName) {
		return new ResponseEntity<>(productService.findByName(prodName), HttpStatus.OK);

	}

}
