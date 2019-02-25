package com.moida.web.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.moida.web.dao.PostsContentDao;
import com.moida.web.dao.PostsDao;
import com.moida.web.entity.Good;
import com.moida.web.entity.Posts;
import com.moida.web.entity.PostsContent;
import com.moida.web.entity.PostsInfoView;
import com.moida.web.entity.PostsListView;

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
		if(!lastPosts.getMainImg().equals("")) {
			lastPosts.setMainImg(lastPosts.getId()+lastPosts.getMainImg());
			postsDao.update(lastPosts);			
		}

		for (int i = 0; i < postsContentList.size(); i++) {
			
			postsContentList.get(i).setPostsId(lastPosts.getId());
			if(postsContentList.get(i).getSrc()!="" && postsContentList.get(i).getSrc()!=null) {
				postsContentList.get(i).setSrc(postsContentList.get(i).getPostsId()+postsContentList.get(i).getSrc()); 
			}

			postsContentDao.insert(postsContentList.get(i));
		}
		
		return lastPosts.getId();
	}
	
	@Transactional
	@Override
	public String updatePosts(Posts posts, List<PostsContent> postsContentList) {
		// TODO Auto-generated method stub
		postsDao.update(posts);
	
		postsContentDao.delete(posts.getId());
		
		for (int i = 0; i < postsContentList.size(); i++) {
			postsContentList.get(i).setPostsId(posts.getId());
			if(postsContentList.get(i).getSrc()!="" && postsContentList.get(i).getSrc()!=null) {
				postsContentList.get(i).setSrc(postsContentList.get(i).getPostsId()+postsContentList.get(i).getSrc()); 
			}

			postsContentDao.insert(postsContentList.get(i));
		}
		
		return 1+"";
	}


	@Override
	public List<PostsListView> getPostsListView1(Integer crowdId) {
		// TODO Auto-generated method stub
		
		return postsDao.getPostsListView1(crowdId);
	}
	
	@Override
	public List<PostsListView> getPostsListView2(Integer crowdId, Integer boardId) {
		// TODO Auto-generated method stub
		
		return postsDao.getPostsListView2(crowdId, boardId);
	}
	
	@Override
	public List<PostsListView> getAlbumPostsView(Integer crowdId) {
		// TODO Auto-generated method stub
		return postsDao.getAlbumPostsView(crowdId);
	}
	
	@Override
	public List<PostsListView> getNoticePostsView(Integer crowdId) {
		// TODO Auto-generated method stub
		return postsDao.getNoticePostsView(crowdId);
	}
	
	@Override
	public List<PostsContent> getPostsContent(Integer postsId) {
		// TODO Auto-generated method stub
		return postsContentDao.getPostsContent(postsId);
	}

	@Override
	public PostsListView getPostsinfoView(Integer id) {
		// TODO Auto-generated method stub
		return postsDao.getPostsinfoView(id);
	}
	@Override
	public int updatehit(Integer id) {
		// TODO Auto-generated method stub
		return postsDao.updatehit(id);
	}
	@Override
	public int deletePosts(Integer id) {
		// TODO Auto-generated method stub
		return postsDao.deletePosts(id);
	}

	@Override
	public Posts getPosts(int postsId) {
		return postsDao.getPosts(postsId);
	}
	@Override
	public List<PostsListView> getPostsSearchListView1(Integer crowdId, String keyword) {
		// TODO Auto-generated method stub
		return postsDao.getPostsSearchListView1(crowdId,keyword);
	}

	@Override
	public List<PostsListView> getPostsSearchListView2(Integer crowdId, Integer boardId, String keyword) {
		// TODO Auto-generated method stub
		return postsDao.getPostsSearchListView2(crowdId, boardId, keyword);
	}
	
	@Override
	public List<PostsListView> getalbumSearchListView(Integer crowdId, String keyword) {
		// TODO Auto-generated method stub
		return postsDao.getalbumSearchListView(crowdId, keyword);
	}
	
	@Override
	public int insertGood(Good good) {
		// TODO Auto-generated method stub
		return postsDao.insertGood(good);
	}
	
	@Override
	public List<Good> getGood(Integer postsId) {
		// TODO Auto-generated method stub
		return postsDao.getGood(postsId);
	}

	public int deleteGood(Good good) {
		// TODO Auto-generated method stub
		return postsDao.deleteGood(good);
	}
	
}
