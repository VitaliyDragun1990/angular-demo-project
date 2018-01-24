import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators {

  // synchronous validation function
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      return {cannotContainSpace: true};
    }
    return null;
  }

  // asynchronous validator function
  static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'mosh') {
          resolve({shouldBeUnique: true});
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }
}

