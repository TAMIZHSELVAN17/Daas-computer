package com.daascomputers.website.repositroy;

import com.daascomputers.website.entities.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerJPA extends JpaRepository<Customer, Integer> {

}
