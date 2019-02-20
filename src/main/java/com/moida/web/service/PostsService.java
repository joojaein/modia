package com.moida.web.service;

import java.util.List;

import com.moida.web.entity.Posts;
import com.moida.web.entity.PostsContent;
import com.moida.web.entity.PostsInfoView;
import com.moida.web.entity.PostsListView;

public interface PostsService {
	int regPosts(Posts posts, List<PostsContent> postsContentList);
	List<PostsListView> getPostsListView1(Integer crowdId);	
	List<PostsListView> getPostsListView2(Integer crowdId, Integer boardId);
	List<PostsListView> getNoticePostsView(Integer crowdId);
	List<PostsListView> getAlbumPostsView(Integer crowdId);
	List<PostsContent> getPostsContent(Integer postsId);
	PostsInfoView getPostsinfoView(Integer id);
	int updatehit(Integer id);
	int deletePosts(Integer id);
	Posts getPosts(int postsId);
	String updatePosts(Posts posts, List<PostsContent> postsContentList);
}
