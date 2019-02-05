package com.moida.web.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.moida.web.dao.TagDao;
import com.moida.web.entity.Tag;

@Service
public class MoidaTagService implements TagService {
	
	@Autowired
	private TagDao tagDao;
	
	@Override
	public List<Tag> getTagList() {
		// TODO Auto-generated method stub
		return tagDao.getTagList();
	}

	@Override
	public List<Tag> getCategoryTagNameList(Integer categoryId) {
		// TODO Auto-generated method stub
		return tagDao.getCategoryTagNameList(categoryId);
	}

}
