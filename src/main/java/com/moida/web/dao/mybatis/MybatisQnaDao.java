package com.moida.web.dao.mybatis;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.moida.web.dao.QnaDao;
import com.moida.web.entity.Qna;

@Repository
public class MybatisQnaDao implements QnaDao
{

	@Autowired
	private SqlSessionTemplate session;
	
	@Override
	public List<Qna> getQnaList() 
	{
		// TODO Auto-generated method stub
		//System.out.println("qna 다오");
		QnaDao qnaDao = session.getMapper(QnaDao.class);
		
		
		return qnaDao.getQnaList();
	}

	@Override
	public Qna getQnaLimit() 
	{
		// TODO Auto-generated method stub
		QnaDao qnaDao = session.getMapper(QnaDao.class);
		
		return qnaDao.getQnaLimit();
	}

	@Override
	public int insertQnaList(String title, String content) 
	{
		// TODO Auto-generated method stub
		QnaDao qnaDao = session.getMapper(QnaDao.class);
		
		return qnaDao.insertQnaList(title, content);
	}

	@Override
	public int deleteQnaList(int id) 
	{
		// TODO Auto-generated method stub
		QnaDao qnaDao = session.getMapper(QnaDao.class);
		
		return qnaDao.deleteQnaList(id);
	}

	@Override
	public int updateQnaList(int id, String title, String content) 
	{
		// TODO Auto-generated method stub
		QnaDao qnaDao = session.getMapper(QnaDao.class);
		
		return qnaDao.updateQnaList(id, title, content);
	}

	@Override
	public List<Qna> searchQnaList(String searchWord) 
	{
		// TODO Auto-generated method stub
		
		QnaDao qnaDao = session.getMapper(QnaDao.class);
		
		return qnaDao.searchQnaList(searchWord);
	}

}
