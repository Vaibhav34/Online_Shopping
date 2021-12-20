package com.onlineshopping.exception;

public class NoProductFoundException extends RuntimeException{

	public NoProductFoundException() {
		super();

	}

	public NoProductFoundException(String message, Throwable cause, boolean enableSuppression,
			boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);

	}

	public NoProductFoundException(String message, Throwable cause) {
		super(message, cause);

	}

	public NoProductFoundException(String message) {
		super(message);

	}

	public NoProductFoundException(Throwable cause) {
		super(cause);

	}
	

}
