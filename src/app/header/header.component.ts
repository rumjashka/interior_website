import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    ngOnInit(): void {
      // When the user scrolls down 20px from the top of the document, slide down the navbar
      window.onscroll = function() {scrollFunction()};
      
      function scrollFunction() {
          if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
              document.getElementById("header").style.top = "-100px";
          } else {
              document.getElementById("header").style.top = "0";
          }
      }
    }
  }
  
