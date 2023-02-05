import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  questions:any=[
    {
      "id":"One",
      "ques":"What services does MMS offer in digital marketing ?",
      "answer":"MMS offers a range of digital marketing services including search engine optimization (SEO), social media marketing, email marketing, pay-per-click advertising, and content marketing."
    },
    {
      "id":"Tow",
      "ques":"How does MMS approach digital marketing strategy for clients ?",
      "answer":"MMS approaches digital marketing strategy by first understanding the client's business goals, target audience, and competition. We then create a custom strategy that combines multiple digital marketing tactics to achieve the desired results.",
    },
    {
      "id":"Three",
      "ques":"Can MMS help with lead generation and conversion rate optimization ?",
      "answer":"Yes, MMS has experience in lead generation and conversion rate optimization. Our team will analyze your website and identify areas for improvement to increase conversions and generate more leads."
    },
    {
      "id":"Four",
      "ques":"How does MMS measure the success of digital marketing campaigns ?",
      "answer":"MMS measures the success of digital marketing campaigns through tracking and analyzing key metrics such as website traffic, engagement, lead generation, and conversions."
    },
    {
      "id":"Five",
      "ques":"What is the average cost of digital marketing services from MMS ?",
      "answer":"The cost of digital marketing services from MMS depends on the specific needs and goals of the client. We offer customized packages and work within the client's budget."
    },
    {
      "id":"Six",
      "ques":"Can MMS work with businesses in any industry ?",
      "answer":"Yes, MMS has experience working with businesses in a variety of industries and is equipped to create effective digital marketing strategies for any industry."
    },
    {
      "id":"Seven",
      "ques":"How long does it take to see results from MMS's digital marketing services ?",
      "answer":"The time it takes to see results from MMS's digital marketing services varies depending on the specific tactics used and the industry of the client. However, we always aim to deliver results as quickly as possible and work to continuously improve the performance of our campaigns."
    }
  ]
  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
