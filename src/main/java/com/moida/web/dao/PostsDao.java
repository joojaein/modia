package com.moida.web.dao;

import com.moida.web.entity.Posts;

public interface PostsDao {
	public int insert(Posts posts);	
	public int update(Posts posts);	
	public Posts getLastPosts();
}
