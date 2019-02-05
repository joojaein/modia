package com.moida.web.dao.mybatis;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.moida.web.dao.TagDao;
import com.moida.web.entity.Tag;

@Repository
public class MybatisTagDao implements TagDao {
	
	@Autowired 
	 private SqlSessionTemplate session;
	
	@Override
	public List<Tag> getTagList() {		
		TagDao tagDao = session.getMapper(TagDao.class);	
		return tagDao.getTagList();
	}

	@Override
	public List<Tag> getCategoryTagList(int crowdId) {
		TagDao tagDao = session.getMapper(TagDao.class);
		return tagDao.getCategoryTagList(crowdId);
	}

	@Override
	public int deleteTag(int crowdId) {
		TagDao tagDao = session.getMapper(TagDao.class);	
		return tagDao.deleteTag(crowdId);
	}

	@Override
	public int insertTag(int crowdId, int tagId) {
		TagDao tagDao = session.getMapper(TagDao.class);	
		return tagDao.insertTag(crowdId, tagId);
	}
	
	@Override
	public List<Tag> getCategoryTagNameList(Integer categoryId) {
		
		TagDao tagDao = session.getMapper(TagDao.class);
		
		return tagDao.getCategoryTagNameList(categoryId);
	}

}
