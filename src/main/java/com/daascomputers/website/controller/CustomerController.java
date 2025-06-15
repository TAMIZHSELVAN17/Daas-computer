package com.daascomputers.website.controller;


import com.daascomputers.website.entities.Customer;
import com.daascomputers.website.service.CustomerService;
import com.daascomputers.website.utility.ResponseStructure;
import com.daascomputers.website.utility.RestResponseBuilder;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/customers")
@CrossOrigin
@AllArgsConstructor
public class CustomerController {
    @Autowired
    private final RestResponseBuilder restResponseBuilder;

    @Autowired
    private CustomerService customerService;


    @PostMapping("/contact")
    public ResponseEntity<ResponseStructure<Customer>> customerInfo(@Valid @RequestBody Customer customer) {
        Customer savedCustomer = customerService.customerInfo(customer);
        return restResponseBuilder.success(HttpStatus.CREATED, "Customer Details Sent", savedCustomer);
    }
}