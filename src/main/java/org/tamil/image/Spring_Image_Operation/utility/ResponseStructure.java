package org.tamil.image.Spring_Image_Operation.utility;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ResponseStructure<T> {
    private int status;
    private String message;
    private T data;
}
