package com.moida.web.dao;

import java.util.List;

import com.moida.web.entity.Category;
import com.moida.web.entity.CategoryView;

public interface CategoryDao {
	public List<Category> getCategoryList();
	public List<CategoryView> getCategoryViewList();
	public Category getCategoryName(Integer categoryId);
}
