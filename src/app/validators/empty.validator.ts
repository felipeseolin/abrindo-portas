import {AbstractControl, ValidatorFn} from '@angular/forms';

export function emptyValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const isEmpty = String(control.value).trim().length <= 0;
    return isEmpty ? {'empty': {value: control.value}} : null;
  };
}
