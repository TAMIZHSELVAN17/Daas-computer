package org.tamil.image.Spring_Image_Operation.utility;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

@Component
public class RestResponseBuilder {
public <T> ResponseEntity<ResponseStructure<T>> success(HttpStatus status, String messgae, T data){
    return ResponseEntity.status(status)
            .body(
                    ResponseStructure.<T>builder()
                            .status(status.value())
                            .message(messgae)
                            .data(data)
                            .build()
            );
}

public <T> ResponseEntity<ErrorStructure<T>> error(HttpStatus status,String message,T rootcause){
    return ResponseEntity.status(status)
            .body(
                    ErrorStructure.<T>builder()
                            .status(status.value())
                            .message(message)
                            .rootCause(rootcause)
                            .build()
            );
}
}
