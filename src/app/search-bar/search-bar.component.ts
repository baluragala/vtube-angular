import {Component, OnInit, DoCheck, ViewEncapsulation, Output, EventEmitter} from '@angular/core';
import {FormControl} from "@angular/forms";
import {YoutubeService} from "../youtube.service";
import {Observable} from "rxjs";
import "rxjs/add/operator/debounceTime"
import "rxjs/add/operator/switchMap"
import "rxjs/add/operator/distinctUntilChanged"

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit, DoCheck {

  searchTerm: FormControl = new FormControl();
  results: Observable<any>;
  @Output()
  onSearchResultEvent: EventEmitter<any> = new EventEmitter();

  constructor(youtubeService: YoutubeService) {
    //observable of results

    //input value change observable
    this.searchTerm.valueChanges
      .debounceTime(500) //delay for 300ms before we request service for API call
      .distinctUntilChanged()
      .switchMap(query => youtubeService.search(query))
      .subscribe(data => this.onSearchResultEvent.emit(data));

    //switchMap flattens the async and cancels the pending request if a new value is requested
  }

  ngOnInit() {
    this.searchTerm.setValue("angular 4");
  }

  ngDoCheck() {
    console.log(this.searchTerm);
  }


}
