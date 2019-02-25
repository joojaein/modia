package com.moida.web.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.moida.web.dao.QnaDao;
import com.moida.web.entity.Qna;

@Service
public class MoidaQnaService implements QnaService
{

	@Autowired
	private QnaDao qnaDao;
	
	@Override
	public List<Qna> getQnaList() 
	{
		// TODO Auto-generated method stub
		
	//	System.out.println("qna 서비스");
		
		return qnaDao.getQnaList();
	}

	@Override
	public Qna getQnaLimit() 
	{
		// TODO Auto-generated method stub
		return qnaDao.getQnaLimit();
	}

	@Override
	public int insertQnaList(String title, String content) 
	{
		// TODO Auto-generated method stub
		return qnaDao.insertQnaList(title, content);
	}

	@Override
	public int deleteQnaList(int id) 
	{
		// TODO Auto-generated method stub
		return qnaDao.deleteQnaList(id);
	}

	@Override
	public int updateQnaList(int id, String title, String content) 
	{
		// TODO Auto-generated method stub
		return qnaDao.updateQnaList(id, title, content);
	}

	@Override
	public List<Qna> searchQnaList(String searchWord) 
	{
		// TODO Auto-generated method stub
		
		return qnaDao.searchQnaList(searchWord);
	}

}
