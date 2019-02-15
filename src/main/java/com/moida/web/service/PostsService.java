package com.moida.web.service;

import java.util.List;

import com.moida.web.entity.Posts;
import com.moida.web.entity.PostsContent;
import com.moida.web.entity.PostsView;

public interface PostsService {
	int regPosts(Posts posts, List<PostsContent> postsContentList);
	List<PostsView> getPostsView1(Integer crowdId);	
	List<PostsView> getPostsView2(Integer crowdId, Integer boardId);
	List<PostsView> getNoticePostsView(Integer crowdId);
}
