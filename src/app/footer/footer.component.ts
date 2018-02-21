import { Component, OnInit, HostListener, ElementRef, Input } from '@angular/core';
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
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  animations: [
    trigger('scrollAnimation', [
      transition('hide => show', [
        query('.block', style({ opacity: 0 })),
        query('.block', stagger(400, [
          animate('1s ease-in-out', style({ opacity: 1 })),
        ])),
      ])
    ])
  ]
})




export class FooterComponent {
  state = 'hide'

  constructor(public el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop
    const scrollPosition = window.pageYOffset + 700

    if (scrollPosition >= componentPosition) {
      this.state = 'show'
    } else {
      this.state = 'hide'
    }
  }
}


  