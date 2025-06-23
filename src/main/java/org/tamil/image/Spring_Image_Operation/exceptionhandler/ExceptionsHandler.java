package org.tamil.image.Spring_Image_Operation.exceptionhandler;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.tamil.image.Spring_Image_Operation.utility.RestResponseBuilder;

@RestControllerAdvice
@AllArgsConstructor
public class ExceptionsHandler {
    @Autowired
    private RestResponseBuilder responseBuilder;

    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<?> handlerRunTimeException(RuntimeException runtimeException){
           return responseBuilder.error(HttpStatus.BAD_REQUEST,runtimeException.getMessage(),runtimeException);
    }
}
