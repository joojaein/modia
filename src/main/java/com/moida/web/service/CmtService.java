package com.moida.web.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.moida.web.entity.Cmt;
import com.moida.web.entity.CmtListView;
import com.moida.web.entity.Cmtcnt;

public interface CmtService {

	int insertCmt(@Param("postsId") Integer postsId,@Param("content") String content,@Param("writerId") String writerId);
	List<CmtListView> getCmtList(Integer postsId);
	Cmtcnt getCmthit(Integer postsId);
	int deleteCmt(Integer id);
	int updateCmt(Integer id, String content);
	Cmt getresetComment(Integer postsId, String writerId);
}
