import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenService } from 'app/Services/authen.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(
    private authenService: AuthenService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }
  roles;
  isSubmitted = false;
  loginForm: FormGroup;
  get formControls() { return this.loginForm.controls; }
  ngOnInit(): void {
    if (window.localStorage.getItem("user-name")) {
      this.router.navigate(['/home']);
    }
    this.loginForm = this.formBuilder.group({
      identifier: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  onLoginButtonClicked(identifier: string, password: string) {
    this.authenService.login(identifier, password).subscribe((res: HttpResponse<any>) => {
      this.router.navigate(['/home']);
    });
  };
}