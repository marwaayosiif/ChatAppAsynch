+package gov.iti.jets;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.json.*;
import jakarta.servlet.http.HttpSession;
import jakarta.websocket.OnClose;
import jakarta.websocket.OnMessage;
import jakarta.websocket.OnOpen;
import jakarta.websocket.Session;
import jakarta.websocket.server.ServerEndpoint;

@ApplicationScoped
@ServerEndpoint("/server")
public class ManyServerEndpoint {

    private final Set<Session> sessions = new HashSet<>();

    @OnOpen
    public void onOpen(Session session){
        sessions.add(session);

        List<String> connectedClients = new ArrayList<>();
        for (Session acsession : sessions) {
            try {
                connectedClients.add(builJSONFromObject(acsession));
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        session.getBasicRemote().sendText(connectedClients);
    }
    
    private String builJSONFromObject(Session session) {
        HttpSession se = (HttpSession)session;
        JsonObjectBuilder jsonBuilder = Json.createObjectBuilder();
        jsonBuilder.add("name", se.getAttribute("name").toString())
        .add("gender", se.getAttribute("gender").toString());
        return jsonBuilder.build().toString();
        }

    @OnMessage
    public void onMessage(String message, Session session){

        for (Session acsession : sessions) {
            try {
                acsession.getBasicRemote().sendText(message);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    @OnClose
    public void onClose(Session session){
        sessions.remove(session);
    }


}