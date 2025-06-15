package com.daascomputers.website.tools;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
@Slf4j
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

//    @Value("${spring.mail.username}")
//    private String fromEmail;


    public void sendEmail(String toEmail, String subject, String body) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("tamild1702003@gmail.com");
        message.setTo(toEmail);
        message.setSubject(subject);
        message.setText(body);

        try {
            mailSender.send(message);
            log.info("Email sent successfully to {}", toEmail);
        } catch (Exception ex) {
            log.error("Email not sent uccessfully to {}",toEmail,ex);
        }
    }
}