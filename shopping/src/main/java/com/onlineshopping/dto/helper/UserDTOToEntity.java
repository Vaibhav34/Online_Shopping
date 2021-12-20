package com.onlineshopping.dto.helper;

import org.springframework.stereotype.Component;

import com.onlineshopping.dto.UserDTO;
import com.onlineshopping.entity.User;

@Component
public class UserDTOToEntity {
	public User convertUserDTOToEntity(UserDTO userDto, User user) {
		user.setPassword(userDto.getPassword());
		user.setuFirstName(userDto.getUserFirstName());
		user.setuLastName(userDto.getUserLastName());
		
		return user;
	}
}
