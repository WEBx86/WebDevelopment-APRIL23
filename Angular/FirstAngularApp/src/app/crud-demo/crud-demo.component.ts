import { Component } from '@angular/core';

@Component({
  selector: 'app-crud-demo',
  templateUrl: './crud-demo.component.html',
  styleUrls: ['./crud-demo.component.css']
})
export class CRUDDemoComponent {

  EnteredValues: string[] = ["Sangli"];
  cityNames: string = '';

  addValues() {
    this.EnteredValues.push(this.cityNames);
  }

  removeValues() {
    this.EnteredValues.pop();
  }
}
