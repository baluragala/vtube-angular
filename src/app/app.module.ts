import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {SearchBarComponent} from './search-bar/search-bar.component';
import {VideoDetailComponent} from './video-detail/video-detail.component';
import {VideoItemComponent} from './video-item/video-item.component';
import {YoutubeService} from './youtube.service'

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    VideoDetailComponent,
    VideoItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
