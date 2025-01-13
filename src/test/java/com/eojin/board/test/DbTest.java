package com.eojin.board.test;

import org.junit.Test;

import java.sql.Connection;
import java.sql.DriverManager;

public class DbTest {
    private static final String DRIVER = "com.mysql.cj.jdbc.Driver";
    private static final String URL = "jdbc:mysql://localhost:3306/dev";
    private static final String USER = "ejDev";
    private static final String PASSWORD = "ej12345678";

    @Test
    public void dbConnection() throws Exception {
        // DBMS에게 DB 연결 드라이버 위치를 알려주기 위함.
        Class.forName(DRIVER);
        try {
            Connection connection = DriverManager.getConnection(URL, USER, PASSWORD);
            System.out.println(connection);
        } catch (Exception e) {
            e.printStackTrace();
        }


    }
}
