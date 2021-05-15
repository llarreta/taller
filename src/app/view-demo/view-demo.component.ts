import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './view-demo.component.html',
  styleUrls: ['./view-demo.component.css']
})
export class ViewDemoComponent implements OnInit {

  constructor( protected router:Router) { 
    console.log('viewdemo constructor');

  }

  ngOnInit(): void {
  }

  onClick(){
    console.log('ejecutando redirect en view demo');
    this.router.navigate(['/'])
  }

}
