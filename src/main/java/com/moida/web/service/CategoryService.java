package com.moida.web.service;

import java.util.List;

import com.moida.web.entity.Category;
import com.moida.web.entity.CategoryView;

public interface CategoryService {
	
	List<Category> getCategoryList();
	List<CategoryView> getCategoryViewList();
	Category getCategoryName(Integer categoryId);

}
