package com.daascomputers.website.exceptionhandler;


import com.daascomputers.website.utility.RestResponseBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ExceptionHandler {

    @Autowired
    private RestResponseBuilder restResponseBuilder;

    @org.springframework.web.bind.annotation.ExceptionHandler(Exceptions.class)
    public ResponseEntity<?> handleExceptions(Exceptions ex) {
        return restResponseBuilder.error(HttpStatus.NOT_FOUND, "Not Found When Retrieve From DataBase", ex.getMessage());
    }
}
