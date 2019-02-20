package com.moida.web.dao;

import java.util.List;

import com.moida.web.entity.Cmt;
import com.moida.web.entity.CmtListView;
import com.moida.web.entity.Cmtcnt;

public interface CmtDao {

	public List<CmtListView> getCmtList(Integer postsId);

	public int insertCmt(Cmt cmt);

	public Cmt getCmtLastregDate(int id);

	public Cmtcnt getCmthit(Integer postsId);

}
