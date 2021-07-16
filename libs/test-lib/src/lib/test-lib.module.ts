import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestCmpComponent } from './test-cmp.component';
import { LibsMaterialModule } from "@material";

@NgModule({
  imports: [CommonModule, LibsMaterialModule],
  declarations: [
    TestCmpComponent
  ],
  exports: [
    TestCmpComponent
  ],
})
export class TestLibModule {}
