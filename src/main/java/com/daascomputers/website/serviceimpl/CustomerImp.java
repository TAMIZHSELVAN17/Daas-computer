package com.daascomputers.website.serviceimpl;

import com.daascomputers.website.entities.Customer;
import com.daascomputers.website.exceptionhandler.Exceptions;
import com.daascomputers.website.repositroy.CustomerJPA;
import com.daascomputers.website.service.CustomerService;
import com.daascomputers.website.tools.EmailService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class CustomerImp implements CustomerService {

    @Autowired
    private CustomerJPA customerJPA;

    @Autowired
    private EmailService emailService;

    private Customer findTheCustomer(int id) {
        return customerJPA.findById(id)
                .orElseThrow(() -> new Exceptions("Customer not found with id: " + id));
    }


    @Override
    public Customer customerInfo(Customer customer) {
        customerJPA.save(customer);
        Customer saved = findTheCustomer(customer.getCustomerID());

        String subject = "New Customer Inquiry: " + saved.getName();
        String body = "You've received a new message from " + saved.getName() + "\n\n" +
                "Email: " + saved.getEmail() + "\n" +
                "Mobile: " + saved.getMobile() + "\n" +
                "Message: " + saved.getMessage();

        emailService.sendEmail("oniononion9345@gmail.com", subject, body);

        return saved;
    }
}
