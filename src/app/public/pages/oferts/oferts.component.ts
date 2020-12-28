import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-oferts',
  templateUrl: './oferts.component.html',
  styleUrls: ['./oferts.component.css']
})
export class OfertsComponent implements OnInit {

  params: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getParams();
  }

  getParams(): void {
    this.activatedRoute.params.subscribe(params => {
      this.params = params.codpr;
    });
  }

}
