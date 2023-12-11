import { AbstractControl, ValidatorFn } from '@angular/forms';

interface ValidationItem {
  [key: string]: any;
  [index: number]: any;
}

export default class Validation {
  static match(controlName: string, checkControlName: string): ValidatorFn {
    return (controls: AbstractControl) => {
      const control = controls.get(controlName);
      const checkControl = controls.get(checkControlName);

      if (checkControl?.errors && !checkControl.errors['matching']) {
        return null;
      }

      if (control?.value !== checkControl?.value) {
        controls.get(checkControlName)?.setErrors({ matching: true });
        return { matching: true };
      } else {
        return null;
      }
    };
  }

    
  private selectComponents: any[] = [];

  [Symbol.iterator]() {
    let index = 0;
    const components = this.selectComponents;

    return {
      next: () => {
        if (index < components.length) {
          return { value: components[index++], done: false };
        } else {
          return { done: true };
        }
      },
    };

  }
  
}
