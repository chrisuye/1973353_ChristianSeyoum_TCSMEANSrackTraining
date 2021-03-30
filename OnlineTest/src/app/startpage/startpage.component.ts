import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.css']
})
export class StartpageComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  startTest() {
    this.router.navigate(["test"]);
  }
}
