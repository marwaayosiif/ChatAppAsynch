package gov.iti;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletConfig;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import jakarta.xml.ws.Dispatch;

@WebServlet("/login")
public class LoginServlet extends HttpServlet{

    ServletConfig myConfig;

    // List <String> onlineUsers = new ArrayList<>();
    
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session = request.getSession(true);
        String name = request.getParameter("name");
        String gender = request.getParameter("gender");
        String sessionId = session.getId();
        System.out.println(name+ " "+gender);
        session.setAttribute("name", name);
        session.setAttribute("gender", gender);
        session.setAttribute("date", new Date().toString());
        session.setAttribute("sessionId", session.getId());
        // onlineUsers.add()
        // myConfig.getServletContext().setAttribute("onlineUsers", );
        RequestDispatcher re = request.getRequestDispatcher("ChatServlet");
        re.forward(request, response);
    }

    // @Override
    // public void init(ServletConfig config) throws ServletException {
    //     myConfig = config;
    //     super.init(config);
    // }
}
