import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: string;
  pass: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    if(this.user == "root" && this.pass == "toor"){
      console.log('Logged!');
      this.router.navigateByUrl('/main');
    }
  }  

}
