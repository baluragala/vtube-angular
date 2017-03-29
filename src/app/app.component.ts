import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {YOUTUBE_RESPONSE} from '../data';
import {YoutubeService} from './youtube.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  videos: any;
  selectedVideoUrl: string;
  selectedVideoTitle: string;
  selectedVideoDescription: string;

  ngOnInit() {
    //this.videos = YOUTUBE_RESPONSE.items;
    //this.updateState(this.videos[0]);
  }

  onSelectedVideoEvent(video) {
    this.updateState(video);
  }

  onSearchResult(videos) {
    this.videos = videos;
    console.log(videos);
    this.updateState(videos[0])
  }

  updateState(video) {
    this.selectedVideoTitle = video.snippet.title;
    this.selectedVideoDescription = video.snippet.description;
    this.selectedVideoUrl = `https://www.youtube.com/embed/${video.id.videoId}`;

  }
}
