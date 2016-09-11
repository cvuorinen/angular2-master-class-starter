import { Directive } from '@angular/core';
import { NG_VALIDATORS, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[validateEmail][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useValue: EmailValidator.validateEmail,
      multi: true
    }
  ]
})
export class EmailValidator {

  public static validateEmail(control: AbstractControl) {
    if (!control.value) {
      return null;
    }

    const emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    if (!emailRegex.test(control.value)) {
      return {
        validateEmail: { valid: false }
      };
    }

    return null;
  }

}
