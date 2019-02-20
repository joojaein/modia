package com.moida.web.service;

import java.util.List;

import com.moida.web.entity.Board;
import com.moida.web.entity.BoardCategory;
import com.moida.web.entity.PostsListView;

public interface BoardService {
	
	List<Board> getBoardListType0(Integer crowdId);
	List<Board> getBoardListType1(int crowdId);
	Board getBoardType0(int crowdId);
	Board getBoardType2(int crowdId);
	int insertBoardType1(Board board);
	int updateBoard(int boardId, String name);
	int deleteBoard(int boardId);
	PostsListView getBoardViewList(Integer crowdId);
	PostsListView getBoardViewList(Integer crowdId, Integer categoryId);
	List<Board> getBoardList(Integer crowdId);
	List<BoardCategory> getBoardCategoryList(Integer crowdId);
	
}
