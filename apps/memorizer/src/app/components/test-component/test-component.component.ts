import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'nx-test-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss']
})
export class TestComponentComponent implements OnInit {
  @Input() input1: any;
  @Input() input2: any;

  @Output() output1 = new EventEmitter();
  @Output() output2 = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
