import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[urlShortenerFrontendUrlValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: UrlValidatorDirective, multi: true }]
})
export class UrlValidatorDirective implements Validator{
  @Input('urlShortenerFrontendUrlValidator') longUrl = '';

  isValidUrl(inputUrl: string){
    try {
      new URL(inputUrl);
      return true;
    } catch (err) {
      return false;
    }
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.isValidUrl(control.value) ? null : { invalidUrl: true };
  }
}
