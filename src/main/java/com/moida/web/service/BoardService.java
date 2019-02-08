package com.moida.web.service;

import java.util.List;

import com.moida.web.entity.Board;

public interface BoardService {
	
	List<Board> getBoardListType1(int crowdId);
	int insertBoardType1(Board board);
	int updateBoard(int boardId, String name);
	int deleteBoard(int boardId);
}
