import { Component, OnInit } from '@angular/core';
import {HelloServiceService} from './services/hello-service.service'
@Component({
  selector: 'app-hello-proxy',
  templateUrl: './hello-proxy.component.html',
  styleUrls: ['./hello-proxy.component.less'],
  providers: [
    HelloServiceService
  ]
})
export class HelloProxyComponent implements OnInit {

  messageFromService:string;

  constructor(helloService:HelloServiceService) { 
    helloService.getMessage().subscribe( text => this.messageFromService=text)
  }

  ngOnInit() {
  }

}
