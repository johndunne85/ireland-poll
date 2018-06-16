import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder } from '@angular/forms';
import { Customer } from './customer';

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
        firstName: '',
        lastName: '',
        email: '',
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


}
