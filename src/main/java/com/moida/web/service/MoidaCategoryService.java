package com.moida.web.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.moida.web.dao.CategoryDao;
import com.moida.web.entity.Category;
import com.moida.web.entity.CategoryView;

@Service
public class MoidaCategoryService implements CategoryService {
	
	@Autowired
	private CategoryDao categoryDao;


	@Override
	public List<Category> getCategoryList() {
		// TODO Auto-generated method stub
		return categoryDao.getCategoryList();
	}

	@Override
	public List<CategoryView> getCategoryViewList() {
		// TODO Auto-generated method stub
		return categoryDao.getCategoryViewList();
	}

	@Override
	public Category getCategoryName(Integer categoryId) {
		// TODO Auto-generated method stub
		return categoryDao.getCategoryName(categoryId);
	}

}
