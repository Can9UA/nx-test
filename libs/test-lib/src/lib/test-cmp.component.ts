import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'nx-test-cmp',
  template: `
    <pre>
      input1 {{ input1 }}
      input2 {{ input2 }}

      Result {{ input1 - input2 }}

      Flag: {{ flag }}

      Variant: {{ variant }}
    </pre>

    <ng-content></ng-content>

    <button (click)="emitEvent(1, 'output1: event data')"
            mat-raised-button
            mat-button
            color="primary">
      Output 1
    </button>

    <span class="px-2 d-inline-block w-25"></span>

    <button (click)="emitEvent(2, 'output2: event data');"
            mat-raised-button
            mat-button
            color="primary">
      Output 2
    </button>

    <div class="mt-2">
      <button (click)="input1 = 0; input2 = 0"
              mat-raised-button
              mat-button
              color="warn">
        Clear
      </button>
    </div>
  `,
})
export class TestCmpComponent {
  @Input() input1: any;
  @Input() input2: any;
  @Input() flag: boolean = false;
  @Input() variant: Variant = Variant.One;

  @Output() output1 = new EventEmitter();
  @Output() output2 = new EventEmitter();

  emitEvent(output: number, text: string) {
    output === 1 ? this.output1.emit(text) : this.output2.emit(text);
  }
}

export enum Variant {
  One,
  Two,
  Three
}
