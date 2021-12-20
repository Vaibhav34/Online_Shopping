package com.onlineshopping.dto.helper;

import org.springframework.stereotype.Component;

import com.onlineshopping.dto.ProductDTO;
import com.onlineshopping.entity.Product;

@Component
public class ProductDTOToEntity {
	
	public Product convertProductDTOToEntity(ProductDTO productDto, Product product) {
		product.setProdId(productDto.getProdId());
		product.setProdName(productDto.getProdName());
		product.setProdPrice(productDto.getProdPrice());
		product.setProdQuantity(product.getProdQuantity());
		
		return product;
			
	}

}
