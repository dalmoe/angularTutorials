import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import {FormValidators} from './form-validators';

@Component({
  selector: 'new-password',
  templateUrl:'app/new-password.component.html',
})

export class NewPasswordComponent{
  form: FormGroup;

  constructor(fb: FormBuilder){
    this.form = fb.group({
      password: ['', Validators.required],
      newPassword: ['', Validators.required,],
      confirmPassword: ['', Validators.required]
      }, {validator: FormValidators.passwordsMatch
    });
  }
 onSubmit(){
    if(this.form.controls['password'].value != '1234'){
      console.log();
      this.form.controls['password'].setErrors({
        incorrectPassword: true
      })
    }
    if(this.form.valid)
      alert("Password successfully changed!");
  }
}
