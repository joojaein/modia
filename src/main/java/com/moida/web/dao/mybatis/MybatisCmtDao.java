package com.moida.web.dao.mybatis;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.moida.web.dao.CmtDao;
import com.moida.web.entity.Cmt;
import com.moida.web.entity.CmtListView;
import com.moida.web.entity.Cmtcnt;

@Repository
public class MybatisCmtDao implements CmtDao{
	
	@Autowired 
	 private SqlSessionTemplate session;

	@Override
	public List<CmtListView> getCmtList(Integer postsId) {
		// TODO Auto-generated method stub
		CmtDao cmtDao = session.getMapper(CmtDao.class);
		return cmtDao.getCmtList(postsId);
	}

	@Override
	public int insertCmt(Integer postsId, String content, String writerId) {
		// TODO Auto-generated method stub
		CmtDao cmtDao = session.getMapper(CmtDao.class);
		System.out.println("다온데 들어오나");
		return cmtDao.insertCmt(postsId, content, writerId);
	}

	@Override
	public Cmt getCmtLastregDate(int id) {
		// TODO Auto-generated method stub
		CmtDao cmtDao = session.getMapper(CmtDao.class);
		return cmtDao.getCmtLastregDate(id);
	}

	@Override
	public Cmtcnt getCmthit(Integer postsId) {
		// TODO Auto-generated method stub
		CmtDao cmtDao = session.getMapper(CmtDao.class);
		return cmtDao.getCmthit(postsId);
	}

	@Override
	public int deleteCmt(Integer id) {
		// TODO Auto-generated method stub
		CmtDao cmtDao = session.getMapper(CmtDao.class);
		return cmtDao.deleteCmt(id);
	}

	@Override
	public int updateCmt(Integer id, String content) {
		// TODO Auto-generated method stub
		CmtDao cmtDao = session.getMapper(CmtDao.class);
		return cmtDao.updateCmt(id, content);
	}

	@Override
	public Cmt getresetComment(Integer postsId, String writerId) {
		// TODO Auto-generated method stub
		CmtDao cmtDao = session.getMapper(CmtDao.class);
		return cmtDao.getresetComment(postsId, writerId);
	}

	
}
