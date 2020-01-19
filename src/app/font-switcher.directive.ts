import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFontSwitcher]'
})
export class FontSwitcherDirective {

  constructor(private elem: ElementRef) {
    this.elem.nativeElement.style.fontFamily = 'Andale Mono';
    this.elem.nativeElement.style.fontSize = '20px';
   }
   @HostListener('mouseenter') onmouseenter(){
    this.fontChange('Arial');
  }
  @HostListener('mouseleave') onmouseleave(){
    this.fontChange('Andale Mono');
  }

   private fontChange(action: string){
    this.elem.nativeElement.style.fontFamily = action;
    this.elem.nativeElement.style.transitionDuration = '0.5s';
  }
}
