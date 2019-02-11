package com.moida.web.dao.mybatis;


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

}
