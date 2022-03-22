package gov.iti.jets;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
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

    private final Set<Session> sessions = new HashSet<>();
    static List<String> connectedClients = new ArrayList<>();
    // private String client;

    @OnOpen
    public void onOpen(Session session) {
        // add mySession to sessions set
        // get all current connected clients
        // notify all the clients with my state

        System.out.println("connection stablished");

        sessions.add(session);

        System.out.println(connectedClients.size());
        for (String client : connectedClients) {
            try {
                System.out.println("conncted client: " + client);
                session.getBasicRemote().sendText(client);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

    }

    // private String builJSONFromObject(Session session) {
    // System.out.println("hey marwa");
    // HttpSession se = (HttpSession) session;
    // System.out.println("name " + se.getAttribute("name"));
    // System.out.println("gender " + se.getAttribute("gender"));
    // JsonObjectBuilder jsonBuilder = Json.createObjectBuilder();
    // jsonBuilder.add("name", se.getAttribute("name").toString())
    // .add("gender", se.getAttribute("gender").toString());
    // return jsonBuilder.build().toString();
    // }

    @OnMessage
    public void onMessage(String message, Session session) {

        System.out.println("message" + message);
        if (message.contains("gender")) {
            // will be the message that contains user's data
            System.out.println("from if onMessage");
            connectedClients.add(message);
            System.out.println(connectedClients.size());
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
    }

}