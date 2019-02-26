package com.moida.web.dao.mybatis;

import java.util.List;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.moida.web.dao.PostsDao;
import com.moida.web.entity.Good;
import com.moida.web.entity.Posts;
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
	public PostsListView getPostsinfoView(Integer id) {
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

	@Override
	public Posts getPosts(int postsId) {
		PostsDao postsDao = session.getMapper(PostsDao.class);
		return postsDao.getPosts(postsId);
	}

	@Override
	public List<PostsListView> getPostsSearchListView1(Integer crowdId, String keyword) {
		// TODO Auto-generated method stub
		PostsDao postsDao = session.getMapper(PostsDao.class);
		return postsDao.getPostsSearchListView1(crowdId, keyword);
	}
	
	@Override
	public List<PostsListView> getPostsSearchListView2(Integer crowdId, Integer boardId,  String keyword) {
		// TODO Auto-generated method stub
		PostsDao postsDao = session.getMapper(PostsDao.class);
		return postsDao.getPostsSearchListView2(crowdId, boardId, keyword);
	}

	@Override
	public List<PostsListView> getalbumSearchListView(Integer crowdId, String keyword) {
		// TODO Auto-generated method stub
		PostsDao postsDao = session.getMapper(PostsDao.class);
		return postsDao.getalbumSearchListView(crowdId, keyword);
	}

	@Override
	public int insertGood(Good good) {
		// TODO Auto-generated method stub
		PostsDao postsDao = session.getMapper(PostsDao.class);
		return postsDao.insertGood(good);
	}

	@Override
	public List<Good> getGood(Integer postsId) {
		// TODO Auto-generated method stub
		PostsDao postsDao = session.getMapper(PostsDao.class);
		return postsDao.getGood(postsId);
	}

	@Override
	public int deleteGood(Good good) {
		// TODO Auto-generated method stub
		PostsDao postsDao = session.getMapper(PostsDao.class);
		return postsDao.deleteGood(good);
	}

}
