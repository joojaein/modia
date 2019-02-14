package com.moida.web.service;

import java.util.List;

import com.moida.web.entity.Posts;
import com.moida.web.entity.PostsContent;

public interface PostsService {
	
	int regPosts(Posts posts, List<PostsContent> postsContentList);	
	
}
