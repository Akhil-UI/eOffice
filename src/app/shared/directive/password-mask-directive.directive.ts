import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPasswordMask]'
})
export class PasswordMaskDirective {

  constructor(private el: ElementRef<HTMLInputElement>) {}

  @HostListener('input')
  onInput(): void {
    this.el.nativeElement.value = this.maskPassword(this.el.nativeElement.value);
  }

  private maskPassword(value: string): string {
    // Replace each character with an asterisk
    return value.replace(/./g, '*');
  }
}
