import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent implements OnInit {
  services:any=[
    {
      "title":"Digital Marketing",
      "desc":"Digital marketing offers numerous benefits for businesses, including increased brand awareness, improved engagement and customer loyalty, and a higher return on investment. By utilizing digital channels such as website, email, social media and search engines, businesses can reach a wider audience and drive growth.",
      "image":"marketing.png"
    }
    ,
    {
      "title":"Ui/Ux",
      "desc":"As a UI/UX specialist, I offer a range of services to enhance your digital presence and create engaging user experiences. From conducting user research and creating wireframes, to designing and testing interfaces, I am dedicated to delivering effective and user-friendly solutions for your business.",
      "image":"design.png"
    },
    {
      "title":"Search Optimization",
      "desc":"Our search engine optimization (SEO) services help businesses improve their online visibility, increase organic traffic, and reach their target audience. Our customized approach ensures measurable results and long-term success, providing a strong return on investment for our clients.",
      "image":"seo.png"
    },
    {
      "title":"Development",
      "desc":"Our custom app development services, including eCommerce shops, portfolios, desktop apps, and Android apps, are designed to help businesses reach success. Our team of experts creates tailored solutions that optimize processes, improve efficiency, and drive growth for our clients.",
      "image":"coding.png"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
