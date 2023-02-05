import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tw-section',
  templateUrl: './tw-section.component.html',
  styleUrls: ['./tw-section.component.scss']
})
export class TwSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  list = ['Let us help you enhance your online presence and increase your revenue.']

}
