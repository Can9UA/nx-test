import { Component, Input } from "@angular/core";

@Component({
  selector: 'nx-test-test-list',
  template: `
    <ul>
      <li *ngFor="let i of getArr()">
        <nx-test-cmp [input1]="btnConfig.input1"
                     [input2]="btnConfig.input2"
                     [flag]="btnConfig.flag"
                     [variant]="1">
        </nx-test-cmp>
      </li>
    </ul>
  `
})
export class TestListComponent {
  @Input() amount = 0;
  @Input() btnConfig: any;

  getArr() {
    return new Array(this.amount).map(i => '');
  }
}
