package gov.iti.jets;

import java.io.IOException;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import jakarta.xml.ws.Dispatch;

@WebServlet("/login")
public class loginServlet extends HttpServlet{
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session = request.getSession(true);
        String name = request.getParameter("name");
        String gender = request.getParameter("gender");
        String sessionId = session.getId();
        System.out.println(name+ " "+gender);
        session.setAttribute("name", name);
        session.setAttribute("gender", gender);
        session.setAttribute("sessionId", session.getId());
        response.sendRedirect("chat.jsp");
    }
}
