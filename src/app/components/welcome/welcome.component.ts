import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor() { }
  list = [' We are a digital marketing company.','Let us help you enhance your online presence and increase your revenue.']
  ngOnInit(): void {

  }
}
