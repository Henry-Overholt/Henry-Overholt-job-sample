import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { VideoPlayerComponent } from "./video-player/video-player.component";
import { CookieService } from "ngx-cookie-service";

@NgModule({
  declarations: [AppComponent, VideoPlayerComponent],
  imports: [BrowserModule],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {}
