import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { Contact } from '../models/contact';
import { COUNTRIES_DATA } from '../data/countries-data';
import { EmailValidator } from '../email-validator.directive';

@Component({
  selector: 'trm-contacts-creator',
  templateUrl: 'contacts-creator.component.html',
  styleUrls: ['contacts-creator.component.css']
})
export class ContactsCreatorComponent implements OnInit {
  @Output() public save = new EventEmitter<Contact>();
  @Output() public cancel = new EventEmitter<void>();

  public form: FormGroup;
  public nameField: AbstractControl;
  public emailField: AbstractControl;

  public countries = COUNTRIES_DATA;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.form = this.formBuilder.group({
          name: ['', [
              Validators.required,
              Validators.minLength(3)
          ]],
          email: ['', [
              EmailValidator.validateEmail
          ]],
          phone: '',
          birthday: '',
          website: '',
          address: this.formBuilder.group({
              street: '',
              zip: '',
              city: '',
              country: ''
          })
      });

      this.nameField = this.form.controls['name'];
      this.emailField = this.form.controls['email'];
  }

  public isInvalid(control: AbstractControl): boolean {
      return control.invalid && control.touched;
  }

  public submit() {
      if (this.form.valid) {
          return this.save.emit(this.form.value);
      }

      this.nameField.markAsTouched();
  }

}
