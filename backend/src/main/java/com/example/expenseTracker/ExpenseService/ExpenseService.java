package com.example.expenseTracker.ExpenseService;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.expenseTracker.Entity.Expense;
import com.example.expenseTracker.ExpenseDAO.ExpenseDAO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Service
@NoArgsConstructor
@AllArgsConstructor
@Data
public class ExpenseService {

    @Autowired
    private ExpenseDAO expenseDAO;

    public List<Expense> getAllExpenses(){
        return expenseDAO.findAll();
    }

    public List<Expense> getBetweenDates(LocalDate start, LocalDate end){
        return expenseDAO.getBetweenDates(start, end);
    }

    public Expense addExpense(Expense expense){
        return expenseDAO.save(expense);
    }



}
