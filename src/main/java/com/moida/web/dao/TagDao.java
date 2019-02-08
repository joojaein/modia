package com.moida.web.dao;

import java.util.List;

import com.moida.web.entity.Tag;

public interface TagDao {
	public List<Tag> getTagList();
	public List<Tag> getCategoryTagList(int crowdId);
	
	public int deleteTag(int crowdId);
	public int insertTag(int crowdId, int tagId);
	
	public List<Tag> getCategoryTagNameList(Integer categoryId);

}
