package org.tamil.image.Spring_Image_Operation.entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Builder
@Data
public class FeedBack {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer userId;

    @NotBlank(message = "User Should not be Null")
    private String name;

    @NotNull(message = "Give the Rating Upto 1 to 5")
    private Integer rating;

    @NotBlank(message = "comment should be manditory")
    private String comment;


    private String imageName;
    private String imageType;
    @Lob
    private byte[] imageData;

   @JsonFormat(shape = JsonFormat.Shape.STRING,pattern = "dd-MMM-yyyy")
    private LocalDate localDate;

   @PrePersist
    public void onCreate(){
    this.localDate=LocalDate.now();
}
}
