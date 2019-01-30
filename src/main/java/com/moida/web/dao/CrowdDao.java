package com.moida.web.dao;

import java.util.List;

import com.moida.web.entity.Category;
import com.moida.web.entity.CrowdSimpleDataView;

public interface CrowdDao {

	List<CrowdSimpleDataView> getSimpleList();
	
   }
