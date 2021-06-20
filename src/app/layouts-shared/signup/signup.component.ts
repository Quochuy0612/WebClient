import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenService } from 'app/Services/authen.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form: FormGroup;

  constructor(
    private authenService: AuthenService,
    private router: Router
  ) { }
  ngOnInit(): void {
  }

  onSignupButtonClicked(username: string, email: string, password: string, phone: string, sex: string, birthday: string, role: string) {
    this.authenService.signup(username, email, password, phone, sex, birthday, role).subscribe((res: HttpResponse<any>) => {
      this.router.navigate(['/login']);
    });
    
  }
}
