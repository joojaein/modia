package com.moida.web.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.moida.web.entity.Qna;

public interface QnaService 
{
	// 모든 질문들을 불러오는 서비스
	List<Qna> getQnaList();
	
	// 방금 insert 한 질문 한개를 가져오는 서비스
	Qna getQnaLimit();
	
	// 추가버튼 클릭시 사용할 insert 서비스
	int insertQnaList(String title, String content);
	
	// X 버튼 클릭 시 사용할 delete 서비스
	int deleteQnaList(@Param("id") int id);
	
	// Setting 버튼 클릭 시 사용 할 update 서비스
	int updateQnaList(int id,
					  String title,
					  String content);
	
	//타이틀 검색을 위한 select 서비스
	List<Qna> searchQnaList(String searchWord);
	
}
