import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'taller';

  formGroup: FormGroup;
  username: String;

  constructor( protected router:Router, private formBuilder: FormBuilder){
    
  }
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      username: new FormControl('',  Validators.required),
  });
  }

  onClick(){
    console.log('ejecutando redirect');
    this.router.navigate(['/view'])
  }

  onSubmit(){
    console.log('ejecutando submit');
    console.log('username:' + this.formGroup.get('username').value);
    this.username = this.formGroup.get('username').value;
  }

}
