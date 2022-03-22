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
        System.out.println(name+ " "+gender);
        session.setAttribute("name", name);
        session.setAttribute("gender", gender);
        // request.setAttribute("name", name);
        // request.setAttribute("gender", gender);
        // RequestDispatcher requestDispatcher = request.getRequestDispatcher("chat.jsp");
        // requestDispatcher.forward(request, response);
        response.sendRedirect("chat.jsp");
    }
}
