import { Injectable } from '@angular/core';
import {BudgetLine} from "./bubget-interface";
import {BudgetLines} from "./mock-budget-list";

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor() { }

  findAllBudgetLines(): BudgetLine[] {
    return BudgetLines;
  }

  addToBudgetList(budgetLine: BudgetLine){
    BudgetLines.push(budgetLine);
  }
}
