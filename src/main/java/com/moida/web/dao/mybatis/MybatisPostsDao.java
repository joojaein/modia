package com.moida.web.dao.mybatis;

import java.util.List;


import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.moida.web.dao.BannerDao;
import com.moida.web.dao.PostsDao;
import com.moida.web.entity.Banner;
import com.moida.web.entity.Posts;

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

}
