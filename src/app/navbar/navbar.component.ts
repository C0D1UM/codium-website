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

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(val => {
      $('#navbarSupportedContent').removeClass('collapsed').removeClass('show');
    });
  }

}
