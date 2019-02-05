package com.moida.web.service;

import java.util.List;

import com.moida.web.entity.Tag;

public interface TagService {
	List<Tag> getTagList();
	List<Tag> getCategoryTagList(int crowdId);

	/*
	int deleteTag(int crowdId);
	int insertTag(int crowdId, int tagId);
	*/
	int updateTag(int crowdId, String[] tagIds);
}
