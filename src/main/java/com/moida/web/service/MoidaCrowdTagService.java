package com.moida.web.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.moida.web.dao.CrowdTagDao;
import com.moida.web.entity.CrowdTag;

@Service
public class MoidaCrowdTagService implements CrowdTagService {
	
	@Autowired
	private CrowdTagDao crowdTagDao;
	
	@Override
	public List<CrowdTag> getCrowdTagList() {
		
		return crowdTagDao.getCrowdTagList();
	}

}
