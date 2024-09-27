package com.example.expenseTracker.ExpenseController;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.expenseTracker.Entity.Expense;
import com.example.expenseTracker.ExpenseService.ExpenseService;
import com.example.expenseTracker.RangeType.Range;

@RestController
@CrossOrigin
public class ExpenseController {

    
    private ExpenseService expenseService;

    @Autowired
  
    public ExpenseController(ExpenseService theExpenseService){
        expenseService=theExpenseService;

    }

    @GetMapping("/expense")
    public List<Expense> getExpense(){
        return expenseService.getAllExpenses();
    }

    
    @PostMapping("/expense")
    public Expense addExpense(@RequestBody Expense expense){
        return expenseService.addExpense(expense);
    }


    @PostMapping("/expense/range")
    public List<Expense> getExpensesBetween(@RequestBody Range params){
        return expenseService.getBetweenDates(params.getStartDate(), params.getEndDate());
    }

}
