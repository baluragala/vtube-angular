import {Component, OnInit, ViewEncapsulation, Input} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {

  @Input()
  title: string;
  @Input()
  videoUrl: string;
  @Input()
  description: string;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {

  }

}
