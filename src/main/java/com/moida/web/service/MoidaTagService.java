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
		return tagDao.getTagList();
	}

	@Override
	public List<Tag> getCategoryTagList(int crowdId) {
		return tagDao.getCategoryTagList(crowdId);
	}
	/*
	@Override
	public int deleteTag(int crowdId) {
		return tagDao.deleteTag(crowdId);
	}

	@Override
	public int insertTag(int crowdId, int tagId) {
		return tagDao.insertTag(crowdId, tagId);
	}
	 */
	@Override
	public int updateTag(int crowdId, String[] tagIds) {
		tagDao.deleteTag(crowdId);
		int cnt=0;
		for (int i = 0; i < tagIds.length; i++) {
			int tagId = Integer.parseInt(tagIds[i]);
			cnt+=tagDao.insertTag(crowdId, tagId);
		}
		return cnt;
	}

}
