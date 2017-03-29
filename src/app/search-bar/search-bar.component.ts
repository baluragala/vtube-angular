import {Component, OnInit, DoCheck, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit, DoCheck {

  searchTerm:string;

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck(){
    console.log(this.searchTerm);
  }

}
