import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LibsMaterialModule } from "@material";
import { TestComponentComponent } from './components/test-component/test-component.component';

@NgModule({
  declarations: [AppComponent, TestComponentComponent],
  imports: [BrowserModule, BrowserAnimationsModule, LibsMaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
