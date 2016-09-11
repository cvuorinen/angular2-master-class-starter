import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, Validator } from '@angular/forms';

@Directive({
  selector: '[validateEmail][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => EmailValidator),
      multi: true
    }
  ]
})
export class EmailValidator implements Validator {
  public validate(c: AbstractControl): {} {
    return EmailValidator.validateEmail(c);
  }

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
