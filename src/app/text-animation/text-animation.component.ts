import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { 
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  query,
  stagger
} from '@angular/animations';

@Component({
  selector: 'app-text-animation',
  templateUrl: './text-animation.component.html',
  styleUrls: ['./text-animation.component.css'],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1,
        transform: "translateX(0)"
      })),
      state('hide',   style({
        opacity: 0,
        transform: "translateX(-100%)"
      })),
      transition('show => hide', animate('1500ms ease-out')),
      transition('hide => show', animate('1500ms ease-in'))
    ])
  ]
})
export class TextAnimationComponent {

  state = 'hide'
  
  constructor(public el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const componentPosition = this.el.nativeElement.offsetTop
      const scrollPosition = window.pageYOffset+500

      if (scrollPosition >= componentPosition) {
        this.state = 'show'
      } else {
        this.state = 'hide'
      }

    }

}

