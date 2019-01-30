package com.moida.web.dao.mybatis;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.moida.web.dao.CategoryDao;
import com.moida.web.entity.Category;

@Repository
public class MyBatisCategory implements CategoryDao{
	
	@Autowired
	private SqlSessionTemplate session;
	
	@Override
	public List<Category> getList() {
		CategoryDao category = session.getMapper(CategoryDao.class);
		System.out.println("com.moida.web.dao.mybatis.MyBatisCategory - List<Category> getList()");
		return category.getList();
	}


	
}
