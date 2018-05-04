import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLogoColor = true;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe(val => {
      $('#navbarSupportedContent').removeClass('collapsed').removeClass('show');
    });
    $(document).ready(() => {
      $(window).scroll(function () {
        const scroll = $(window).scrollTop();
        if (scroll > 300) {
          $('.navbar').css('background', 'rgba(21, 39, 61, 0.9)');
          $('nav').css('padding-top', '10px');
          $('#logoWhite').css('display', 'block');
          $('#logoColor').css('display', 'none');
        } else {
          $('.navbar').css('background', 'transparent');
          $('nav').css('padding-top', '40px');
          $('#logoWhite').css('display', 'none');
          $('#logoColor').css('display', 'block');
        }
      });
    });
  }

}
