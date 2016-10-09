import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { AppComponent } from './app.component';
import {GraphComponent} from "./components/graph/graph.component";
import {PrmComponent} from "./components/contentTypePRM/PrmComponent";
import {WindowComponent} from "./components/window/window.component";
import {TdmComponent} from "./components/contentTypeTDM/TdmComponent";
import {NtmComponent} from "./components/contentTypeNTM/NtmComponent";
import {TxtComponent} from "./components/contentTypeTXT/TxtComponent";
import {DataService} from "./services/DataService";
import {ParseService} from "./services/ParseService";
import {IMDBFragment} from "./components/contentTypeTDM/IMDBFragment";


@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    PrmComponent,
    TdmComponent,
    NtmComponent,
    TxtComponent,
    WindowComponent,
    GraphComponent,
    IMDBFragment
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule
  ],
  providers: [DataService, ParseService],
  bootstrap: [AppComponent]
})
export class AppModule {


}
