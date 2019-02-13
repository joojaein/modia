package com.moida.web.dao.mybatis;


import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.moida.web.dao.ScheduleDao;
import com.moida.web.entity.Schedule;

@Repository
public class MybatisScheduleDao implements ScheduleDao {

	@Autowired 
	 private SqlSessionTemplate session;

	@Override
	public Schedule getRecentlySchedule(int crowdId) {
		
		ScheduleDao scheduleDao = session.getMapper(ScheduleDao.class);
		return scheduleDao.getRecentlySchedule(crowdId);
	}
}
