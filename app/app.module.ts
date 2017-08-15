import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import '../node_modules/bootstrap/dist/css/';
import { AppComponent }  from './app.component';
import { HeaderComponent }  from './header.component';
@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, HeaderComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }