import { Component } from '@angular/core';

@Component({
  selector: 'nx-test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  input1 = 50;
  input2 = 75;

  output1($event: any) {
    console.log($event);
  }

  output2($event: any) {
    console.log($event);
  }
}
