package com.moida.web.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.moida.web.dao.CategoryDao;
import com.moida.web.entity.Category;

@Service
public class MoidaCategoryService implements CategoryService {

	@Autowired
	private CategoryDao categoryDao;

	@Override
	public List<Category> getCategoryList() {
		 System.out.println("web.service.MoidaCategoryService -  List<Category> getCategoryList()");
		 return categoryDao.getList();
	}


}
