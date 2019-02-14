package com.moida.web.dao.mybatis;

import java.util.List;


import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.moida.web.dao.CategoryDao;
import com.moida.web.entity.Category;
import com.moida.web.entity.CategoryView;

@Repository
public class MybatisCategoryDao implements CategoryDao {

	@Autowired 
	private SqlSessionTemplate session;
	 
	
	@Override
	public List<Category> getCategoryList() {
		
		CategoryDao categoryDao = session.getMapper(CategoryDao.class);
		
		return categoryDao.getCategoryList();
	}


	@Override
	public List<CategoryView> getCategoryViewList() {
		
		CategoryDao categoryDao = session.getMapper(CategoryDao.class);
		
		return categoryDao.getCategoryViewList();
	}


	@Override
	public Category getCategoryName(Integer categoryId) {
		
		CategoryDao categoryDao = session.getMapper(CategoryDao.class);
		
		return categoryDao.getCategoryName(categoryId);
	}


}
