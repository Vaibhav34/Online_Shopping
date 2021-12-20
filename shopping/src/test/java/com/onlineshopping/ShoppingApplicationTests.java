package com.onlineshopping;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.List;

import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.onlineshopping.dao.ProductDAO;
import com.onlineshopping.dao.UserDAO;
import com.onlineshopping.entity.Product;

@SpringBootTest
class ShoppingApplicationTests {

	@Autowired
	ProductDAO pRepo;

	@Autowired
	UserDAO uRepo;

	@Test
	@Order(1)
	void testCreateProduct() {
		Product p = new Product();
		p.setProdId(1798);
		p.setProdName("Sony earphones");
		p.setProdPrice(200.00);
		p.setProdQuantity(4);
		pRepo.save(p);
		assertNotNull(pRepo.findById(1798).get());
	}

	@Test
	@Order(2)
	void testUpdate() {

		Product p = pRepo.findById(1798).get();
		p.setProdQuantity(66);
		p.setProdPrice(800.00);
		pRepo.save(p);
		assertNotEquals(700.00, pRepo.findById(1798).get().getProdPrice());
	}

	@Test
	@Order(3)
	void testDelete() {
		pRepo.deleteById(112);
		assertThat(pRepo.existsById(112)).isFalse();
	}
	
	@SuppressWarnings("unchecked")
	@Test
	@Order(4)
	 void testReadAll () {
		List list = pRepo.findAll();
		assertThat(list).size().isPositive();
	}
	@Test
	@Order(5)
	 void testRead () {
		Product product = pRepo.findById(91).get();
		assertEquals("SetWet", product.getProdName());
	}

}
