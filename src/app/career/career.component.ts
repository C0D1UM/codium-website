import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  scrollToJob() {
    $('html, body').animate({
      scrollTop: $('#jobDescriptionSection').offset().top
    }, 500);
  }

}
