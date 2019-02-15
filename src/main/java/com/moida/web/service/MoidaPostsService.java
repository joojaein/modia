package com.moida.web.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.moida.web.dao.PostsContentDao;
import com.moida.web.dao.PostsDao;
import com.moida.web.entity.Posts;
import com.moida.web.entity.PostsContent;
import com.moida.web.entity.PostsView;

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

	@Override
	public List<PostsView> getPostsView1(Integer crowdId) {
		// TODO Auto-generated method stub
		
		return postsDao.getPostsView1(crowdId);
	}
	
	@Override
	public List<PostsView> getPostsView2(Integer crowdId, Integer boardId) {
		// TODO Auto-generated method stub
		
		return postsDao.getPostsView2(crowdId, boardId);
	}

	public List<PostsView> getAlbumPostsView(Integer crowdId) {
		// TODO Auto-generated method stub
		return postsDao.getAlbumPostsView(crowdId);
	}

	public List<PostsView> getNoticePostsView(Integer crowdId) {
		// TODO Auto-generated method stub
		return postsDao.getNoticePostsView(crowdId);
	}

}
