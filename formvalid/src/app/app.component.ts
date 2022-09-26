import { Component,OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
     


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formvalid';
  status = 'You haven\'t signed up yet';
  name = '';
  submitted = false;
  registerForm: FormGroup;
  ontyping(event:Event) {
     
    this.name = (<HTMLInputElement>event.target).value;
  }
  signup() {
  
     this.status = 'Oops! We are working on it!';
     
  }
     
  ngOnInit() {
    this.registerForm = new FormGroup({
        firstName:new FormControl(null, Validators.required),
        lastName: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
        password:new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
}
     
get f() { return this.registerForm.controls; }
     
onSubmit() {
    this.submitted = true;
     
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
     
    alert('Your request has been submitted for approval')
}
}
     


