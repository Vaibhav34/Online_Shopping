package com.onlineshopping.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.onlineshopping.entity.Admin;

public interface AdminDao extends JpaRepository<Admin, String>{

}
