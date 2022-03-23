package gov.iti;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.*;

import com.google.gson.Gson;

import gov.iti.dtos.User;
// import dtos.MessageDto;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

public class ChatServlet extends HttpServlet {

    List<String> allMessages = new ArrayList<>();

    List<String> onlineUsers = new ArrayList<>();

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("text/event-stream");
        response.setCharacterEncoding("UTF-8");
        PrintWriter out = response.getWriter();
        int msgId = 0;
        int userId = 0;
        String lastId = request.getHeader("Last-Event-ID");
        if (lastId != null) {
            msgId = Integer.parseInt(lastId);
            userId = Integer.parseInt(lastId);
            String data = "";
            if (msgId >= 0) {

                for (int i = msgId; i < allMessages.size(); i++) {
                    out.write("data: " + allMessages.get(i) + "\n");
                }
                msgId = allMessages.size();
                out.write("id: " + msgId + "\n\n");
                out.flush();
            }
            if (userId >= 0) {

                for (int i = userId; i < onlineUsers.size(); i++) {
                    out.write("users: " + onlineUsers.get(i) + "\n");
                }
                userId = onlineUsers.size();
                out.write("id: " + userId+ "\n\n");
                out.flush();
            }

        } else {
            out.write("id: " + msgId + "\n");
            out.write("data: Welcome\n\n");
            out.flush();
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // String username = request.getParameter("username");
        String message = request.getParameter("data");
        if (message == null) {
            HttpSession httpSession = request.getSession();
            onlineUsers.add(builGsonFromObject(
                    new User((String) httpSession.getAttribute("name"), (String) httpSession.getAttribute("gender"),
                            (String) httpSession.getAttribute("date"), (String) httpSession.getAttribute("session"))));
            for (String msg : onlineUsers) {
                System.out.println(msg);
            }
            response.sendRedirect("chat.jsp");
        } else {

            if (!message.isBlank()) {
                allMessages.add(message);
            }

            for (String msg : allMessages) {
                System.out.println(msg);
            }
        }
    }

    private String builGsonFromObject(User messageDto) {
        Gson gsonUser = new Gson();
        return gsonUser.toJson(messageDto);
    }

}
