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
  inverseNavbarColor = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe(val => {
      this.inverseNavbarColor = (this.router.url === '/people/list');
      this.checkInverseNavbar();
      $('#navbarSupportedContent').removeClass('collapsed').removeClass('show');
    });
  }

  checkInverseNavbar() {
    $('.nav-link').css('color', '#15273d');
    if (this.inverseNavbarColor) {
      $(window).scroll(function () {
        const scroll = $(window).scrollTop();
        if (scroll > 200) {
          $('.navbar').css('background', 'rgba(21, 39, 61, 0.9)');
          $('nav').css('padding-top', '10px');
          $('#logoWhite').css('display', 'block');
          $('#logoColor').css('display', 'none');
          $('.nav-link').css('color', '#ffffff');
        } else {
          $('.navbar').css('background', 'transparent');
          $('nav').css('padding-top', '40px');
          $('#logoWhite').css('display', 'none');
          $('#logoColor').css('display', 'block');
          $('.nav-link').css('color', '#15273d');
        }
      });
    } else {
      $('.nav-link').css('color', '#ffffff');
      $(window).scroll(function () {
        const scroll = $(window).scrollTop();
        if (scroll > 200) {
          $('.navbar').css('background', 'rgba(21, 39, 61, 0.9)');
          $('nav').css('padding-top', '10px');
          $('#logoWhite').css('display', 'block');
          $('#logoColor').css('display', 'none');
          $('.nav-link').css('color', '#ffffff');
        } else {
          $('.navbar').css('background', 'transparent');
          $('nav').css('padding-top', '40px');
          $('#logoWhite').css('display', 'none');
          $('#logoColor').css('display', 'block');
          $('.nav-link').css('color', '#ffffff');
        }
      });
    }
  }
}
