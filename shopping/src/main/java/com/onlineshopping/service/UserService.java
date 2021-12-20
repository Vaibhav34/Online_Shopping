package com.onlineshopping.service;

import java.util.List;

import com.onlineshopping.dto.UserDTO;
import com.onlineshopping.entity.Login;
import com.onlineshopping.entity.Product;
import com.onlineshopping.entity.User;

public interface UserService {

	public Boolean userRegister(User user);

	public User validateUser(Login login);

	public User getUserDetailsById(String userId);

	public Product getProdById(Integer prodId);

	public List<Product> findByName(String prodName);

	public List<Product> getAllProduct();

	public void deleteUser(String userName);

	public UserDTO updateUser(String userId, UserDTO userDTO);

	public User updateUser(User user);

}
