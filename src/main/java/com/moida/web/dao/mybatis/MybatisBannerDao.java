package com.moida.web.dao.mybatis;

import java.util.List;


import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.moida.web.dao.BannerDao;
import com.moida.web.entity.Banner;

@Repository
public class MybatisBannerDao implements BannerDao {

	@Autowired 
	 private SqlSessionTemplate session;

	@Override
	public List<Banner> getBannerList() {
		
		BannerDao bannerDao = session.getMapper(BannerDao.class);
		
		return bannerDao.getBannerList();
	}


}
