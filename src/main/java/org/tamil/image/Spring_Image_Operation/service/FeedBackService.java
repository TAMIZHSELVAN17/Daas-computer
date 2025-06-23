package org.tamil.image.Spring_Image_Operation.service;

import org.springframework.web.multipart.MultipartFile;
import org.tamil.image.Spring_Image_Operation.entities.FeedBack;

public interface FeedBackService {
    public FeedBack addFind(FeedBack feedBack, MultipartFile image);

    public FeedBack getFeed(int userID);
}
