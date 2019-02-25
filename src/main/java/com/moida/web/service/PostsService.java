package com.moida.web.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.moida.web.entity.Good;
import com.moida.web.entity.Posts;
import com.moida.web.entity.PostsContent;
import com.moida.web.entity.PostsListView;

public interface PostsService {
	int regPosts(Posts posts, List<PostsContent> postsContentList);
	List<PostsListView> getPostsListView1(Integer crowdId);	
	List<PostsListView> getPostsListView2(Integer crowdId, Integer boardId);
	List<PostsListView> getNoticePostsView(Integer crowdId);
	List<PostsListView> getAlbumPostsView(Integer crowdId);
	List<PostsContent> getPostsContent(Integer postsId);
	List<PostsListView> getPostsSearchListView1(@Param("crowdId") Integer crowdId, @Param("keyword") String keyword);
	List<PostsListView> getPostsSearchListView2(@Param("crowdId") Integer crowdId,@Param("boardId") Integer boardId, @Param("keyword") String keyword);
	List<PostsListView> getalbumSearchListView(@Param("crowdId") Integer crowdId,@Param("boardId") String keyword);
	PostsListView getPostsinfoView(Integer id);
	int updatehit(Integer id);
	int deletePosts(Integer id);
	Posts getPosts(int postsId);
	String updatePosts(Posts posts, List<PostsContent> postsContentList);
	int insertGood(Good good);
	int deleteGood(Good good);
	List<Good> getGood(Integer postsId);
}
