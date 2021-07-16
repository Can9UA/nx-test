import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LibsMaterialModule } from "@material";
import { TestLibModule } from "@test-lib";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LibsMaterialModule,
    TestLibModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
