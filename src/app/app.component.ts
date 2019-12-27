import { Component, ViewChild, AfterViewInit, ElementRef, ViewChildren, QueryList, OnInit } from '@angular/core';
import { HelloComponent } from './hello/hello.component';
import { HttpClient } from '@angular/common/http'
// import  *  as  data  from  './data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  
  userLoggedIn = true;

  name = 'Man'
  //@ViewChild(HelloComponent, {static: false}) hello: HelloComponent;

  @ViewChild('pRef', {static: false}) pRef: ElementRef;
  @ViewChildren(HelloComponent) hellos: QueryList<any>;

    ngAfterViewInit() {
    //console.log('Hello ', this.hello.name); 
    //console.log(this.pRef.nativeElement.innerHTML); 
    this.pRef.nativeElement.innerHTML = "DOM updated succesfully!!!"; 
    this.hellos.forEach(hello => console.log(hello));
  }

  // products: any = (data as any).default;
  products: any = [];

  constructor(private httpClient: HttpClient){}

  ngOnInit(){
    //console.log(data);
    this.httpClient.get("assets/data.json").subscribe(data => {
      console.log(data);
      this.products = data;
    })
  }




}
