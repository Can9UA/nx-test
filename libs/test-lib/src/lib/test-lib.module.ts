import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestCmpComponent } from './test-cmp.component';
import { LibsMaterialModule } from "@material";
import { TestListComponent } from './list/test-list.component';

@NgModule({
  imports: [CommonModule, LibsMaterialModule],
  declarations: [
    TestCmpComponent,
    TestListComponent
  ],
  exports: [
    TestCmpComponent,
    TestListComponent
  ],
})
export class TestLibModule {}
