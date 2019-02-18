package com.moida.web.dao.mybatis;

import java.util.List;


import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.moida.web.dao.BannerDao;
import com.moida.web.dao.CrowdDao;
import com.moida.web.dao.PostsDao;
import com.moida.web.entity.Banner;
import com.moida.web.entity.Posts;
import com.moida.web.entity.PostsView;

@Repository
public class MybatisPostsDao implements PostsDao {

	@Autowired 
	 private SqlSessionTemplate session;

	@Override
	public int insert(Posts posts) {
		PostsDao postsDao = session.getMapper(PostsDao.class);
		return postsDao.insert(posts);
	}
	
	@Override
	public int update(Posts posts) {
		PostsDao postsDao = session.getMapper(PostsDao.class);
		return postsDao.update(posts);
	}

	@Override
	public Posts getLastPosts() {
		PostsDao postsDao = session.getMapper(PostsDao.class);
		return postsDao.getLastPosts();

	}

	@Override
	public List<PostsView> getPostsView1(Integer crowdId) {
		// TODO Auto-generated method stub
		PostsDao postsDao = session.getMapper(PostsDao.class);
		return postsDao.getPostsView1(crowdId);
	}

	@Override
	public List<PostsView> getPostsView2(Integer crowdId, Integer boardId) {
		// TODO Auto-generated method stub
		PostsDao postsDao = session.getMapper(PostsDao.class);
		return postsDao.getPostsView2(crowdId, boardId);
	}

	@Override
	public List<PostsView> getAlbumPostsView(Integer crowdId) {
		// TODO Auto-generated method stub
		PostsDao postsDao = session.getMapper(PostsDao.class);
		
		return postsDao.getAlbumPostsView(crowdId);
	}

	@Override
	public List<PostsView> getNoticePostsView(Integer crowdId) {
		// TODO Auto-generated method stub
		PostsDao postsDao = session.getMapper(PostsDao.class);
		return postsDao.getNoticePostsView(crowdId);
	}

}
