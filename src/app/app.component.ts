import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  ngOnInit() {
    $(window).on('beforeunload', () => {
      $(window).scrollTop(0);
    });
    $(document).ready(() => {
      AOS.init();
    });
  }

}
