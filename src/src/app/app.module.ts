import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {GraphComponent} from "./components/graph/graph.component";
import {WindowComponent} from "./components/window/window.component";

@NgModule({
  declarations: [
    AppComponent,
    WindowComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}
