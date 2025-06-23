package org.tamil.image.Spring_Image_Operation.serviceimpl;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.tamil.image.Spring_Image_Operation.entities.FeedBack;
import org.tamil.image.Spring_Image_Operation.repository.FeedBackRepository;
import org.tamil.image.Spring_Image_Operation.service.FeedBackService;

import java.io.IOException;


@Service
@AllArgsConstructor
public class FeedBackServiceImpl implements FeedBackService{
@Autowired
private FeedBackRepository feedBackRepository;

    @Override
    public FeedBack addFind(FeedBack feedBack, MultipartFile image){
       feedBack.setImageName(image.getOriginalFilename());
       feedBack.setImageType(image.getContentType());
       try {
           feedBack.setImageData(image.getBytes());
       } catch (IOException e) {
           throw new RuntimeException("Exception invoked while storing image Byte format");
       }
       return feedBackRepository.save(feedBack);
    }

    @Override
    public FeedBack getFeed(int userID) {
          return feedBackRepository.findById(userID).orElseThrow(
                  ()->new RuntimeException("Failed to Get the OBJ from Database")
          );



    }
}