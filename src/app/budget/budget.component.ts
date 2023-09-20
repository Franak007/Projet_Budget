import {Component, OnInit} from '@angular/core';
import {BudgetService} from "../budget.service";
import {BudgetLine} from "../bubget-interface";

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

  budgetLinesList: BudgetLine[] = [];

  constructor(private budget: BudgetService) {
  }

  ngOnInit() {
    this.getAllBudgetLines();
  }

  getAllBudgetLines() {
    this.budgetLinesList = this.budget.findAllBudgetLines();
  }
}
