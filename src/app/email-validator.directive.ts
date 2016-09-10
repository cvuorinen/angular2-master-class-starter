import { Directive } from '@angular/core';
import { Control } from '@angular/common';
import { NG_VALIDATORS } from '@angular/forms';

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

  public static validateEmail(c: Control) {
    if (!c.value) {
      return null;
    }

    const emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    if (!emailRegex.test(c.value)) {
      return {
        validateEmail: { valid: false }
      };
    }

    return null;
  }

}
