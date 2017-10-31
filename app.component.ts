import {Component, NgModule, VERSION} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import { TitleCasePipe } from '@angular/common'
import {FormsModule} from '@angular/forms'

declare let jsPDF;
declare let Base64;


@Component({
  selector: 'my-app',
  template: `
      <h2>{{ fullName }}</h2>
      <button (click)="transformName()">Click to Transform Name</button>
  `,
})
export class App {
    fullName: string = 'ramesh rajendran';
    constructor(private titlecasePipe:TitleCasePipe ) { }
    transformName(){
        this.fullName = this.transformToTitleCase(this.fullName); 
    }
    
    // Defining another method to make a generic function to call with any string.
    transformToTitleCase(value:string) : string {
        return this.titlecasePipe.transform(this.fullName);
    }
}

@NgModule({
  imports: [ BrowserModule,FormsModule ],
  declarations: [ App ],
  providers: [TitleCasePipe]
  bootstrap: [ App ]
})
export class AppModule {}
