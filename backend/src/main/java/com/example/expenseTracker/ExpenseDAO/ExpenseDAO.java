package com.example.expenseTracker.ExpenseDAO;

import org.springframework.stereotype.Repository;

import com.example.expenseTracker.Entity.Expense;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

@Repository
public interface ExpenseDAO extends JpaRepository<Expense,Integer>{

    @Query(value="select * from expense where date between ?1 and ?2",nativeQuery=true)
    public List<Expense> getBetweenDates(LocalDate start, LocalDate end);


}
