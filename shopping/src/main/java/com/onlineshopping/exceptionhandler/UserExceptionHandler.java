package com.onlineshopping.exceptionhandler;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.onlineshopping.constant.Constant;
import com.onlineshopping.exception.EmailException;
import com.onlineshopping.exception.NoProductFoundException;
import com.onlineshopping.exception.NoUserFoundException;
import com.onlineshopping.exception.RecordAlreadyExistException;
import com.onlineshopping.exception.UserNotExitException;


@RestControllerAdvice
public class UserExceptionHandler {
	//create const.

	@ExceptionHandler(NoUserFoundException.class)
	public ResponseEntity<Object> handleNonExistingEmployee(NoUserFoundException exception) {
		return new ResponseEntity<>(Constant.PLEASE_ENTER_VALID_USERNAME_PASSWORD, HttpStatus.NOT_FOUND);
	}

	@ExceptionHandler(NoProductFoundException.class)
	public ResponseEntity<Object> handleNonExistingEmployee(NoProductFoundException exception) {
		return new ResponseEntity<>("Product Not found", HttpStatus.NOT_FOUND);
	}
	@ExceptionHandler(UserNotExitException.class)
	public ResponseEntity<Object> handleNonExistingUser(NoUserFoundException exception) {
		return new ResponseEntity<>("Please enter valid user id", HttpStatus.NOT_FOUND);
	}
	
	@ExceptionHandler(RecordAlreadyExistException.class)
	public ResponseEntity<Object> handleNonExistingUser(RecordAlreadyExistException exception) {
		return new ResponseEntity<>("Record already exist!", HttpStatus.NOT_FOUND);
	}
	@ExceptionHandler(EmailException.class)
	public ResponseEntity<Object> handleNonExistingUser(EmailException exception) {
		return new ResponseEntity<>("Please Enter Valid Email!", HttpStatus.NOT_FOUND);
	}
}
