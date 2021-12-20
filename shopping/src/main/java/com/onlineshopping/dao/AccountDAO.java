package com.onlineshopping.dao;

import org.springframework.data.repository.CrudRepository;

import com.onlineshopping.entity.Account;

public interface AccountDAO extends CrudRepository<Account, String> {

}
