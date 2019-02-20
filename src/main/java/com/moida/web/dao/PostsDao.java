package com.moida.web.dao;


import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.moida.web.entity.Posts;
import com.moida.web.entity.PostsInfoView;
import com.moida.web.entity.PostsListView;

public interface PostsDao {
	public int insert(Posts posts);	
	public int update(Posts posts);	
	public Posts getLastPosts();
	public List<PostsListView> getPostsListView1(Integer crowdId);
	public List<PostsListView> getPostsListView2(Integer crowdId, Integer boardId);
	public List<PostsListView> getAlbumPostsView(Integer crowdId);
	public List<PostsListView> getNoticePostsView(Integer crowdId);
	public PostsInfoView getPostsinfoView(Integer id);
	public int updatehit(Integer id);
	public int deletePosts(Integer id);
	public Posts getPosts(int postsId);

	
}
