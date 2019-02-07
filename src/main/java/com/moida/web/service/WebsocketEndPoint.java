package com.moida.web.service;

import java.io.IOException;
import java.util.Date;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;


@ServerEndpoint("/chat-server")
public class WebsocketEndPoint
{
//	private Map<String, Session> users = new ConcurrentHashMap<>();
	
	@OnOpen      
	public void onOpen(Session session) throws IOException 
	{
		System.out.println("onOpend::");
		session.getBasicRemote().sendText("connected");
	}
	
	@OnClose
	public void onClose() 
	{
		System.out.println("onClose:");
	}
	
	@OnMessage  //메세지가 왔는지 안왔는지 알려주는 어노테이션이다.
	public void onMessage(String msg, Session session)
	{
		System.out.println(msg);
	}
	
	@OnError
	public void onError(Throwable t) 
	{
		System.out.println("onError:" + t.getMessage());
	}
	
	private void log(String logmsg) 
	{
		System.out.println( new Date() + " : " + logmsg );
	}
	
	
}
