import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  defaultSubscriptions = 'Advanced';
  user = {
    username: '',
    email: '',
    subscriptions: '',
    password: '',
  };
  validFields = {
    username: false,
    email: false,
    subscriptions: false,
    password: false,
  };

  submitted = false;

  onSubmit(signupForm: NgForm) {
    this.submitted = true;
    this.user.username = signupForm.value.userData?.username || '';
    this.validFields.username =
      //@ts-ignore
      signupForm.form.controls['userData'].controls['username'].valid;
    this.user.email = signupForm.value.userData?.email || '';
    this.validFields.email =
      //@ts-ignore
      signupForm.form.controls['userData'].controls['email'].valid;
    this.user.subscriptions = signupForm.value.userData?.subscriptions || '';
    this.validFields.subscriptions = //@ts-ignore
      signupForm.form.controls['userData'].controls['subscriptions'].valid;
    this.user.password = signupForm.value.userData?.password || '';
    this.validFields.password = //@ts-ignore
      signupForm.form.controls['userData'].controls['password'].valid;
    signupForm.reset();

    signupForm.form.patchValue({
      userData: {
        subscriptions: this.defaultSubscriptions,
      },
    });
  }
}
