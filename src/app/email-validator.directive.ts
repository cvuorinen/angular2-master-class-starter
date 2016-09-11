import { Directive } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, AsyncValidatorFn, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { ContactsService } from './contacts.service';
import { Observable } from 'rxjs/Rx';

@Directive({
  selector: '[validateEmail][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useValue: EmailValidator.validateEmail,
      multi: true
    },
    {
      provide: NG_ASYNC_VALIDATORS,
      useValue: EmailValidator.checkEmailAvailability,
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

  public static checkEmailAvailability(contactsServce: ContactsService): AsyncValidatorFn {
    return (control: AbstractControl) => {
        if (!control.value) {
            return Observable.of(null);
        }

        return contactsServce.isEmailAvailable(control.value)
            .map(valid => valid ? null : { checkEmailAvailability: { valid: false } });
    };
  }

}
