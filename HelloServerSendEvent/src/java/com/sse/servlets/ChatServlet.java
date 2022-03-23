/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sse.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import java.util.Vector;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author java-mona
 */
@WebServlet(name = "ChatServlet", urlPatterns = {"/ChatServlet"})
public class ChatServlet extends HttpServlet {

    List<String> messages = new Vector<String>();

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/event-stream");
        response.setCharacterEncoding("UTF-8");
        PrintWriter out = response.getWriter();
        int msgId = 0;
        String lastId = request.getHeader("Last-Event-ID");
        if (lastId != null) {
            msgId = Integer.parseInt(lastId);
            String data = "";
            if (msgId >= 0) {
                for (int i = msgId; i < messages.size(); i++) {
                    //data += messages.get(i) + "<br>";
                    out.write("data: " + messages.get(i) + "<br>\n");
                }
                msgId=messages.size();
                out.write("id: " + msgId + "\n\n");
                out.flush();
            }

        } else {
            out.write("id: " + msgId + "\n");
            out.write("data: Welcome\n\n");
            //msgId++;
            out.flush();
            //out.close();
        }
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String message = request.getParameter("msg");
        if (message != null && !message.trim().equals("")) {
            messages.add(message);
        }
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
