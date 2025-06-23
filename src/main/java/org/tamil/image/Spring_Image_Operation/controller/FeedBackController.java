package org.tamil.image.Spring_Image_Operation.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.tamil.image.Spring_Image_Operation.entities.FeedBack;
import org.tamil.image.Spring_Image_Operation.service.FeedBackService;
import org.tamil.image.Spring_Image_Operation.utility.ResponseStructure;
import org.tamil.image.Spring_Image_Operation.utility.RestResponseBuilder;

@RestController
@CrossOrigin
@RequestMapping("api")
public class FeedBackController {
@Autowired
private FeedBackService feedBackService;

@Autowired
private RestResponseBuilder responseBuilder;

    @PostMapping("/feedback")
    public ResponseEntity<ResponseStructure<FeedBack>>  addFeed(@RequestPart FeedBack feedBack, @RequestPart MultipartFile image){
        FeedBack saved=feedBackService.addFind(feedBack,image);
        return responseBuilder.success(HttpStatus.CREATED,"User FeeeBack Created",saved);
}

@GetMapping("/feedback/{userId}")
public ResponseEntity<FeedBack> getFeed(@PathVariable int userId){
        FeedBack data=feedBackService.getFeed(userId);
       return ResponseEntity.ok()
                .contentType(MediaType.valueOf(data.getImageType()))
                .body(data);
}

}