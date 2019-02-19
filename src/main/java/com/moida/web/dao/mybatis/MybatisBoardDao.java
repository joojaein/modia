package com.moida.web.dao.mybatis;

import java.util.List;


import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.moida.web.dao.BoardDao;
import com.moida.web.entity.Board;
import com.moida.web.entity.BoardCategory;
import com.moida.web.entity.PostsListView;

@Repository
public class MybatisBoardDao implements BoardDao {

	@Autowired 
	 private SqlSessionTemplate session;

	@Override
	public List<Board> getBoardListType1(int crowdId) {
		BoardDao boardDao = session.getMapper(BoardDao.class);
		return boardDao.getBoardListType1(crowdId);
	}
	
	@Override
	public Board getBoardType0(int crowdId) {
		BoardDao boardDao = session.getMapper(BoardDao.class);
		return boardDao.getBoardType0(crowdId);
	}
	
	@Override
	public Board getBoardType2(int crowdId) {
		BoardDao boardDao = session.getMapper(BoardDao.class);
		return boardDao.getBoardType2(crowdId);
	}
	
	@Override
	public int insertBoardType1(Board board) {
		BoardDao boardDao = session.getMapper(BoardDao.class);
		return boardDao.insertBoardType1(board);
	}

	@Override
	public int updateBoard(int boardId, String name) {
		BoardDao boardDao = session.getMapper(BoardDao.class);
		return boardDao.updateBoard(boardId, name);
	}

	@Override
	public int deleteBoard(int boardId) {
		BoardDao boardDao = session.getMapper(BoardDao.class);
		return boardDao.deleteBoard(boardId);
	}

	@Override
	public PostsListView getBoardViewList(Integer crowdId) {
		// TODO Auto-generated method stub
		BoardDao boardDao = session.getMapper(BoardDao.class);
		return boardDao.getBoardViewList(crowdId);
	}

	@Override
	public PostsListView getBoardViewList(Integer crowdId, Integer categoryId) {
		// TODO Auto-generated method stub
		BoardDao boardDao = session.getMapper(BoardDao.class);
		return boardDao.getBoardViewList(crowdId, categoryId);
	}

	@Override
	public List<BoardCategory> getBoardCategoryList(Integer crowdId) {
		// TODO Auto-generated method stub
		BoardDao boardDao = session.getMapper(BoardDao.class);
		return boardDao.getBoardCategoryList(crowdId);
	}

	@Override
	public List<Board> getBoardList(Integer crowdId) {
		// TODO Auto-generated method stub
		BoardDao boardDao = session.getMapper(BoardDao.class);
		return boardDao.getBoardList(crowdId);
	}

	@Override
	public List<Board> getBoardListType0(Integer crowdId) {
		// TODO Auto-generated method stub
		BoardDao boardDao = session.getMapper(BoardDao.class);
		return boardDao.getBoardListType0(crowdId);
	}

}
