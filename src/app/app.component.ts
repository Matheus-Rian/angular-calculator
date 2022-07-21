import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  operationsValue = ['/', 'x', '-', '+', '='];
  currentValue = '';
  displayValueInput = '0';

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
