import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {
  public logo: string = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Logo_TV_2015.png/200px-Logo_TV_2015.png";
  
  constructor() { }

  ngOnInit(): void {
  }

}
