package com.moida.web.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.moida.web.dao.BannerDao;
import com.moida.web.entity.Banner;

@Service
public class MoidaBannerService implements BannerService {

	@Autowired
	private BannerDao bannerDao;

	@Override
	public List<Banner> getBannerList() {
		return bannerDao.getBannerList();
	}

	@Override
	public int insert(Banner banner) {
		return bannerDao.insert(banner);
	}

	@Override
	public int delete() {
		return bannerDao.delete();
	}

}
