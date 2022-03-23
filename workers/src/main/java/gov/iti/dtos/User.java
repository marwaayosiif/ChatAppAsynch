package gov.iti.dtos;

public class User {
    public String name;
    public String gender;
    public String date;
    public String sessionId;
    public User(String name, String gender, String date ,String session) {
        this.name = name;
        this.gender = gender;
        this.date = date;
        this.sessionId = session;
    }
}
