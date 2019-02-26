package com.moida.web.dao;


import java.util.List;


import com.moida.web.entity.Good;
import com.moida.web.entity.Posts;
import com.moida.web.entity.PostsListView;

public interface PostsDao {
	public int insert(Posts posts);	
	public int update(Posts posts);	
	public Posts getLastPosts();
	public List<PostsListView> getPostsListView1(Integer crowdId);
	public List<PostsListView> getPostsListView2(Integer crowdId, Integer boardId);
	public List<PostsListView> getAlbumPostsView(Integer crowdId);
	public List<PostsListView> getNoticePostsView(Integer crowdId);
	public PostsListView getPostsinfoView(Integer id);
	public int updatehit(Integer id);
	public int deletePosts(Integer id);
	public Posts getPosts(int postsId);
	public List<PostsListView> getPostsSearchListView1(Integer crowdId, String keyword);
	public List<PostsListView> getPostsSearchListView2(Integer crowdId, Integer boardId, String keyword);
	public List<PostsListView> getalbumSearchListView(Integer crowdId, String keyword);
	public int insertGood(Good good);
	public List<Good> getGood(Integer postsId);
	public int deleteGood(Good good);

	
}
