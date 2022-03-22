package gov.iti.jets;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.StringTokenizer;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.json.*;
import jakarta.servlet.http.HttpSession;
import jakarta.websocket.OnClose;
import jakarta.websocket.OnMessage;
import jakarta.websocket.OnOpen;
import jakarta.websocket.Session;
import jakarta.websocket.server.ServerEndpoint;

@ApplicationScoped
@ServerEndpoint("/endpointServer")
public class ManyServerEndpoint {

    static private final Set<Session> sessions = new HashSet<>();
    static private final Map<Session,String> mapOfClient = new HashMap<>();

    @OnOpen
    public void onOpen(Session session) {

        System.out.println("connection stablished");

        sessions.add(session);
        
        for (String client : mapOfClient.values()) {
            try {
                System.out.println("conncted client: " + client);
                session.getBasicRemote().sendText(client);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

    }

    @OnMessage
    public void onMessage(String message, Session session) {

        System.out.println("message" + message);
        if (message.contains("gender")) {
            System.out.println("from if onMessage");
            mapOfClient.put(session, message);
            System.out.println(sessions.size());
            for (Session acsession : sessions) {
                if (!session.equals(acsession)) {
                    try {
                        acsession.getBasicRemote().sendText(message);
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                }
            }
        }

        else {
            for (Session acsession : sessions) {
                try {
                    acsession.getBasicRemote().sendText(message);
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }

    @OnClose
    public void onClose(Session session) {
        sessions.remove(session);
        for (Session acsession : sessions) {
            try {
                acsession.getBasicRemote().sendText("0"+mapOfClient.get(session));
                System.out.println("yarabb2a");
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        mapOfClient.remove(session);
    }

}