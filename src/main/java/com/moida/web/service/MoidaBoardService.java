package com.moida.web.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.moida.web.dao.BannerDao;
import com.moida.web.dao.BoardDao;
import com.moida.web.entity.Banner;
import com.moida.web.entity.Board;

@Service
public class MoidaBoardService implements BoardService {

	@Autowired
	private BoardDao boardDao;

	@Override
	public List<Board> getBoardListType1(int crowdId) {		
		return boardDao.getBoardListType1(crowdId);
	}
	
	@Override
	public Board getBoardType0(int crowdId) {		
		return boardDao.getBoardType0(crowdId);
	}	
	
	@Override
	public Board getBoardType2(int crowdId) {		
		return boardDao.getBoardType2(crowdId);
	}

	@Override
	public int insertBoardType1(Board board) {
		return boardDao.insertBoardType1(board);
	}

	@Override
	public int updateBoard(int boardId, String name) {
		return boardDao.updateBoard(boardId, name);
	}

	@Override
	public int deleteBoard(int boardId) {
		return boardDao.deleteBoard(boardId);
	}

}
