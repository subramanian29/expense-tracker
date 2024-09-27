package com.example.expenseTracker.RangeType;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class Range {

    private LocalDate startDate;
    private LocalDate endDate;

}
