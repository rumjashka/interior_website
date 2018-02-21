import { Component, OnInit } from '@angular/core';


import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    trigger('popOverState', [
      state('show', style({
        opacity: 1
      })),
      state('hide',   style({
        opacity: 0
      })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
    ])
  ]
})
export class ContactComponent  {

  show = false;

  constructor() { }

  get stateName() {
    return this.show ? 'show' : 'hide'
  }
  get stateName2() {
    return this.show ?  'hide' : 'show'
  }

  toggle() {
    this.show = !this.show;
  }

}
