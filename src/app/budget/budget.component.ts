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
  budgetLine: BudgetLine|undefined;

  constructor(private budget: BudgetService) {
  }

  ngOnInit() {
    console.log(this.budgetLinesList);
  }

  onSubmit(form: NgForm){
    console.log(form.value);
    return this.budget.addToBudgetList(form.value);
  }

  accountBalance(): number {

    const entries = this.budgetLinesList.filter(budgetLine => budgetLine.type === 'entrée');
    const expenses = this.budgetLinesList.filter(budgetLine => budgetLine.type === 'dépense');

    const totalEntries = entries.reduce((acc, transaction) => acc + transaction.amount, 0);
    const totalExpenses = expenses.reduce((acc, transaction) => acc + transaction.amount, 0);

    return totalEntries - totalExpenses;
  }

  getColor(index:number): string {
    const type = this.budgetLinesList[index].type;
    console.log(type);
    if (type == "entrée") {
      return 'lightgreen';
    } else {
      return 'palevioletred';
    }
      }
}
