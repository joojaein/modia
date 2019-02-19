package com.moida.web.dao.mybatis;

import java.util.List;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.moida.web.dao.PostsDao;
import com.moida.web.entity.Posts;
import com.moida.web.entity.PostsInfoView;
import com.moida.web.entity.PostsListView;

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
	public List<PostsListView> getPostsListView1(Integer crowdId) {
		// TODO Auto-generated method stub
		PostsDao postsDao = session.getMapper(PostsDao.class);
		return postsDao.getPostsListView1(crowdId);
	}

	@Override
	public List<PostsListView> getPostsListView2(Integer crowdId, Integer boardId) {
		// TODO Auto-generated method stub
		PostsDao postsDao = session.getMapper(PostsDao.class);
		return postsDao.getPostsListView2(crowdId, boardId);
	}

	@Override
	public List<PostsListView> getAlbumPostsView(Integer crowdId) {
		// TODO Auto-generated method stub
		PostsDao postsDao = session.getMapper(PostsDao.class);
		
		return postsDao.getAlbumPostsView(crowdId);
	}

	@Override
	public List<PostsListView> getNoticePostsView(Integer crowdId) {
		// TODO Auto-generated method stub
		PostsDao postsDao = session.getMapper(PostsDao.class);
		return postsDao.getNoticePostsView(crowdId);
	}

	@Override
	public PostsInfoView getPostsinfoView(Integer id) {
		// TODO Auto-generated method stub
		PostsDao postsDao = session.getMapper(PostsDao.class);
		return postsDao.getPostsinfoView(id);
	}

	@Override
	public int updatehit(Integer id) {
		// TODO Auto-generated method stub
		PostsDao postsDao = session.getMapper(PostsDao.class);
		return postsDao.updatehit(id);
	}

	@Override
	public int deletePosts(Integer id) {
		// TODO Auto-generated method stub
		PostsDao postsDao = session.getMapper(PostsDao.class);
		return postsDao.deletePosts(id);
	}

}
