package com.moida.web.dao.mybatis;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.moida.web.dao.CrowdTagDao;
import com.moida.web.entity.CrowdTag;

@Repository
public class MybatisCrowdTagDao implements CrowdTagDao {
	
	@Autowired
	private SqlSessionTemplate session;
	
	@Override
	public List<CrowdTag> getCrowdTagList() {
		
		CrowdTagDao crowdTagDao = session.getMapper(CrowdTagDao.class);
		
		return crowdTagDao.getCrowdTagList();
	}

}
