package com.moida.web.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.moida.web.dao.PostsContentDao;
import com.moida.web.dao.PostsDao;
import com.moida.web.entity.Posts;
import com.moida.web.entity.PostsContent;

@Service
public class MoidaPostsService implements PostsService {

	@Autowired
	private PostsDao postsDao;
	
	@Autowired
	private PostsContentDao postsContentDao;

	@Transactional
	@Override
	public int regPosts(Posts posts, List<PostsContent> postsContentList) {
		postsDao.insert(posts);
		Posts lastPosts = postsDao.getLastPosts();
		lastPosts.setMainImg(lastPosts.getId()+lastPosts.getMainImg());
		postsDao.update(lastPosts);

		for (int i = 0; i < postsContentList.size(); i++) {
			
			postsContentList.get(i).setPostsId(lastPosts.getId());
			if(postsContentList.get(i).getSrc()!="" && postsContentList.get(i).getSrc()!=null) {
				postsContentList.get(i).setSrc(postsContentList.get(i).getPostsId()+postsContentList.get(i).getSrc()); 
			}

			postsContentDao.insert(postsContentList.get(i));
		}
		
		return lastPosts.getId();
	}

}
