import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit{
 hide=true;
 password_value:String="";
 email_value:String="";
 email = new FormControl('', [Validators.required, Validators.email]);
 
 constructor(private router: Router,private snackBar: MatSnackBar){}

 ngOnInit()
 {
  this.password_value="";
  this.email_value="";
 }

 getErrorMessage() {
   if (this.email.hasError('required')) {
     return 'You must enter a value';
   }

   return this.email.hasError('email') ? 'Not a valid email' : '';
 }

 login()
 {
  if(this.email.value == '')
  {
    this.snackBar.open("Email Id cannot be empty !", "OK",
    {
      duration:4000,
      verticalPosition: 'top',
      horizontalPosition: 'center', 
    })
  }
  else if(this.password_value == '')
  {
    this.snackBar.open("Password cannot be empty !", "OK",
    {
      duration:4000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
    })
  }
  else
  {
      if(this.email.value == "cna.kalila@gmail.com" && this.password_value == "kalila_angular")
      {
        this.router.navigate(['/weather-dashboard']);
      }
      else
      {
        this.snackBar.open("Wrong Email Id / Password", "",
      {
        duration:4000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
      }
      );
      }
  }
 }

 reset()
 {
  this.password_value="";
  this.email_value="";
 }
}


