package com.moida.web.dao;

import java.util.List;

import com.moida.web.entity.Board;
import com.moida.web.entity.BoardCategory;
import com.moida.web.entity.PostsView;

public interface BoardDao {
	public List<Board> getBoardListType1(int crowdId);
	public Board getBoardType0(int crowdId);
	public Board getBoardType2(int crowdId);
	public int insertBoardType1(Board board);
	public int updateBoard(int boardId, String name);
	public int deleteBoard(int boardId);
	public PostsView getBoardViewList(Integer crowdId);
	public PostsView getBoardViewList(Integer crowdId, Integer categoryId);
	public List<BoardCategory> getBoardCategoryList(Integer crowdId);
	public List<Board> getBoardList(Integer crowdId);
	
}
