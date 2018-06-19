import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Customer } from './customer';

function emailMatcher(c: AbstractControl){
  let emailControl = c.get('email');
  let confirmControl = c.get('confirmEmail');

  if(emailControl.pristine || confirmControl.pristine){
    return null;
  }

  if(emailControl.value === confirmControl.value){
    return null;
  }
  return { 'match': true };
}

function ratingRange( c: AbstractControl): {[key: string]: boolean | null {
  if(c.value != undefined && (isNaN(c.value) || c.value < 1 || c.value > 5)){
      return {'range': true};
  };
  return null;
};




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    customerForm: FormGroup;
    customer: Customer = new Customer();

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void{
      this.customerForm = this.fb.group({
        firstName: ['', [Validators.required, Validators.minLength(3)]],
        lastName: ['',[Validators.required, Validators.maxLength(25)]],
        emailGroup: this.fb.group({
            email: ['',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]],
            confirmEmail: ['', Validators.required],
        }, {validator: emailMatcher});

        phone:'',
        notifications: 'email',
        rating:['', ratingRange],
        sendCatalog: true
      });
    }

    populateTestData(): void{
      this.customerForm.patchValue({
        firstName: 'Jack',
        lastName: 'Smith',
        sendCatalog: false
      })
    }

    save(){
      console.log(this.customerForm);
      console.log('Saved: '+JSON.stringify(this.customerForm.value));
    }

    setNotification(notifyVia: string): void {
      const phoneControl = this.customerForm.get('phone');
      if(notifyVia === 'text'){
        phoneControl.setValidators(Validators.required);
      }else{
        phoneControl.clearValidators();
      }
      phoneControl.updateValueAndValidity();
    }


}
