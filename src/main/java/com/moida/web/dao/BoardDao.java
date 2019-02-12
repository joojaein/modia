package com.moida.web.dao;

import java.util.List;

import com.moida.web.entity.Board;

public interface BoardDao {
	public List<Board> getBoardListType1(int crowdId);
	public Board getBoardType2(int crowdId);
	public int insertBoardType1(Board board);
	public int updateBoard(int boardId, String name);
	public int deleteBoard(int boardId);
	
}
