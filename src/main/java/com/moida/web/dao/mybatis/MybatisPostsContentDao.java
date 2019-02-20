package com.moida.web.dao.mybatis;


import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.moida.web.dao.PostsContentDao;
import com.moida.web.entity.PostsContent;

@Repository
public class MybatisPostsContentDao implements PostsContentDao {

	@Autowired 
	 private SqlSessionTemplate session;

	@Override
	public int insert(PostsContent postsContent) {
		PostsContentDao postsContentDao = session.getMapper(PostsContentDao.class);
		return postsContentDao.insert(postsContent);
	}
	
	@Override
	public List<PostsContent> getPostsContent(Integer postsId) {
		// TODO Auto-generated method stub
		PostsContentDao postsContentDao = session.getMapper(PostsContentDao.class);
		return postsContentDao.getPostsContent(postsId);
	}

	@Override
	public int delete(int postsId) {
		PostsContentDao postsContentDao = session.getMapper(PostsContentDao.class);
		return postsContentDao.delete(postsId);
	}




}
