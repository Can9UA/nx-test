import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestCmpComponent } from './test-cmp.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    TestCmpComponent
  ],
  exports: [
    TestCmpComponent
  ],
})
export class TestLibModule {}
