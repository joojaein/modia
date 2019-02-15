package com.moida.web.dao;


import java.util.List;

import com.moida.web.entity.Posts;
import com.moida.web.entity.PostsView;

public interface PostsDao {
	public int insert(Posts posts);	
	public int update(Posts posts);	
	public Posts getLastPosts();
	public List<PostsView> getPostsView1(Integer crowdId);
	public List<PostsView> getPostsView2(Integer crowdId, Integer boardId);
	public List<PostsView> getAlbumPostsView(Integer crowdId);
	public List<PostsView> getNoticePostsView(Integer crowdId); 
}
