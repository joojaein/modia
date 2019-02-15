package com.moida.web.service;

import java.io.IOException;
import java.security.Principal;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;


@ServerEndpoint("/chat-server")
public class WebsocketEndPoint
{
//	private Map<String, Session> users = new ConcurrentHashMap<>();
	
	private static List<String> sessionid = new ArrayList();
	private static List<Session> sessions = new ArrayList();
	private static Map<String,Session > sessionmap = new HashMap<String, Session>();
	
	@PostMapping
	@ResponseBody
	
	
	@OnOpen      
	public void onOpen(Session session) throws IOException 
	{
		
		System.out.println("onOpend::");
		session.getBasicRemote().sendText("connected");
		System.out.println(session);
		sessionid.add(session.getId());
		sessions.add(session);
		sessionmap.put(session.getId(), session);
//		System.out.println("입장 시 선물해주는 세션아이디라는데 : "+session.getId());
		
		System.out.println("지금 채팅서버에 들어와있는 세션들 : "+sessionid);
	}
	
	@OnClose
	public void onClose() 
	{
		System.out.println("onClose:");
	}
	
	@OnMessage  //메세지가 왔는지 안왔는지 알려주는 어노테이션이다.
	public void onMessage(String msg, Session session) throws IOException
	{
//		System.out.println("지금 채팅서버에 들어와있는 세션들 : "+sessionid);
//		System.out.println("메시지를 보내는 선물해주는 세션아이디라는데 : "+session.getId());
//		System.out.println("이게 나오는건가? : "+msg);
		//session.getBasicRemote().sendText(msg);
		for (Session sess : sessions) 
		{
			
			
			if(sess.isOpen()) 
			{
			System.out.println("세션이 있는 유저 세션 : "+sess.getId());
//			System.out.println("세션이 있는 유저의 아이디 : "+sess.getUserPrincipal().getName());
			sess.getBasicRemote().sendText(msg);
			}
			else 
			{
				sess.close();
			}
	
		}
//		for (String str : sessionmap.keySet()) 
//		{
//			if(sessionmap.get(str).isOpen()) 
//			{
//			sessionmap.get(str).getBasicRemote().sendText(msg);
//			}
//			else 
//			{
//				sessionmap.remove(str);
//			}
//		}
	}
	
	@OnError
	public void onError(Throwable t) 
	{
		System.out.println("onError:" + t.getMessage());
	}
	
//	private void log(String logmsg) 
//	{
//		System.out.println( new Date() + " : " + logmsg );
//	}
//	
	
}
