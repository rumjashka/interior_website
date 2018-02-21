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
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1,
        transform: "rotate(0deg)"
      })),
      state('hide',   style({
        opacity: 0,
        transform: "rotate(7deg)"
      })),
      transition('show => hide', animate('1500ms ease-out')),
      transition('hide => show', animate('1500ms ease-in'))
    ])
  ]
})


export class PhotoComponent {
@Input('photo') photo: string;
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