import {Component, OnInit} from '@angular/core';
import {BudgetService} from "../budget.service";
import {BudgetLine} from "../bubget-interface";
import {BudgetLines} from "../mock-budget-list";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

  budgetLinesList: BudgetLine[] = BudgetLines;

  constructor(private budget: BudgetService) {
  }

  ngOnInit() {
    // this.getAllBudgetLines();
  }

  getAllBudgetLines() {
    this.budgetLinesList = this.budget.findAllBudgetLines();
  }

  onSubmit(form: NgForm){
    console.log(form.value);
    return this.budget.addToBudgetList(form.value);
    document.location.href=""
  }
}
