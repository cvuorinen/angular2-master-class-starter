import { Directive, forwardRef } from '@angular/core';
import { Validator, AbstractControl, NG_ASYNC_VALIDATORS, AsyncValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { ContactsService } from './contacts.service';

@Directive({
  selector: '[checkEmailAvailability][ngModel],[checkEmailAvailability][formControlName]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => EmailAvailabilityValidator),
      multi: true
    }
  ]
})
export class EmailAvailabilityValidator implements Validator {
  private validatorFn: AsyncValidatorFn;

  constructor(private contactsService: ContactsService) {
      this.validatorFn = EmailAvailabilityValidator.checkEmailAvailability(this.contactsService);
  }

  public validate(c: AbstractControl): {} {
    return this.validatorFn(c);
  }

  public static checkEmailAvailability(contactsServce: ContactsService): AsyncValidatorFn {
    return (c: AbstractControl) => {
      if (!c.value) {
        return Observable.of(null);
      }

      return contactsServce.isEmailAvailable(c.value)
          .map(valid => valid ? null : { checkEmailAvailability: { valid: false } });
    };
  }
}
