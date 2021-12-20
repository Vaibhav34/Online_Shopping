package com.onlineshopping.controller;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.onlineshopping.constant.Constant;
import com.onlineshopping.dao.ProductDAO;
import com.onlineshopping.dao.UserDAO;
import com.onlineshopping.dto.UserDTO;
import com.onlineshopping.dto.UserDetailsRequestModel;
import com.onlineshopping.dto.UserRest;
import com.onlineshopping.entity.Login;
import com.onlineshopping.entity.OperationStatusModel;
import com.onlineshopping.entity.User;
import com.onlineshopping.exception.EmailException;
import com.onlineshopping.exception.NoUserFoundException;
import com.onlineshopping.exception.RecordAlreadyExistException;
import com.onlineshopping.service.ProductService;
import com.onlineshopping.service.UserService;

import com.onlineshopping.utils.RequestOperationName;
import com.onlineshopping.utils.RequestOperationResult;

@RestController
public class UserController {

	@Autowired
	UserService userService;

	@Autowired
	UserDAO userdao;
	@Autowired
	ProductDAO productdao;
	@Autowired
	ProductService productService;

	@PostMapping("/user/registration")
	public String addUser(@RequestBody User user) {
		
		
		
		if (user.getUserEmail().isEmpty() || user.getUserEmail().isBlank()
				|| !user.getUserEmail().matches("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")) {
			throw new EmailException(Constant.MISSING_REQUIRED_FIELDS);
		}

		else {
			Boolean isUserAdded;
			try {
				
				isUserAdded = userService.userRegister(user);
				if (Boolean.TRUE.equals(isUserAdded)) {
					return Constant.USER_REGISTERED_SUCCESSFULLY;
					
				} 
				
				return Constant.UNABLE_TO_REGISTER;
				
			} catch (Exception ex) {
				throw new RecordAlreadyExistException(Constant.RECORD_ALREADY_EXIST);
			}

		}
	}

	@PostMapping(value = "/user/loginpage")
	public String login(@RequestBody Login login) throws NoUserFoundException {

		User user = userService.validateUser(login);

		boolean isValidUser = false;

		if (null != user) {
			if ((user.getUserName().equals(login.getUserName()) && user.getPassword().equals(login.getPassword()))) {
				isValidUser = true;
			} else {
				
				 throw new NoUserFoundException();
			}

		}

		return isValidUser ? Constant.SUCCESSFULLY_LOGGED_IN : Constant.LOGGED_IN_FAILED;
	}


	@PutMapping(path = "/userupdate/{userId}")
	public UserRest updateUser(@PathVariable("userId") String userId, @RequestBody UserDetailsRequestModel userDetails)
			throws NoUserFoundException {
		if (userDetails.getUserEmail().isEmpty()) {
			throw new NoUserFoundException(Constant.MISSING_REQUIRED_FIELDS);
		}

		UserRest userRest = new UserRest();

		UserDTO userDTO = new UserDTO();
		BeanUtils.copyProperties(userDetails, userDTO);

		UserDTO updatedUserDTO = userService.updateUser(userId, userDTO);
		BeanUtils.copyProperties(updatedUserDTO, userRest);
		return userRest;
	}

	@DeleteMapping(path = "/{userName}")
	public OperationStatusModel deleteUser(@PathVariable("userName") String userName) {
		OperationStatusModel operationStatusModel = new OperationStatusModel();
		operationStatusModel.setOperationName(RequestOperationName.DELETE.name());

		userService.deleteUser(userName);

		operationStatusModel.setOperationResult(RequestOperationResult.SUCCESS.name());
		return operationStatusModel;
	}
	

}
