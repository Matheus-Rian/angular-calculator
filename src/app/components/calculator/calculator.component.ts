import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})

export class CalculatorComponent implements OnInit {
  numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  operationsValue = ['/', 'x', '-', '+', '='];
  currentValue = '';
  displayValueInput = '0';

  constructor() { }

  ngOnInit(): void {
  }

  handleAddValuesInput(value: string) {
    if (value === '=')
      return this.result();

    this.currentValue += value;
    this.displayValueInput = this.currentValue;
  }

  result() {
    if (this.currentValue)
      this.displayValueInput = eval(this.currentValue);
  }

  resetValue() {
    this.currentValue = '';
    this.displayValueInput = '0';
  }

}
