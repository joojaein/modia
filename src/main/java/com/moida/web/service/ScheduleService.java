package com.moida.web.service;

import com.moida.web.entity.Schedule;

public interface ScheduleService {
	Schedule getRecentlySchedule(int crowdId);

}
