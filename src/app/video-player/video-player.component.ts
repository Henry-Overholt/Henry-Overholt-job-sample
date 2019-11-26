import { Component, OnInit } from "@angular/core";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: "app-video-player",
  templateUrl: "./video-player.component.html",
  styleUrls: ["./video-player.component.css"]
})
export class VideoPlayerComponent implements OnInit {
  videoLib: any[] = [
    {
      picture:
        "https://static-email-hosting.s3.amazonaws.com/24G_Test_Project/videos/who_is_24g.jpg",
      video:
        "https://static-email-hosting.s3.amazonaws.com/24G_Test_Project/videos/who_is_24g.mp4",
      name: "Who is 24G?",
      views: this.cookieService.get("firstViews"),
      likes: this.cookieService.get("firstLikes"),
      dislikes: this.cookieService.get("firstDislikes"),
      code: "first",
      index: 0,
      selected: true
    },
    {
      picture:
        "https://static-email-hosting.s3.amazonaws.com/24G_Test_Project/videos/ces_overview.jpg",
      video:
        "https://static-email-hosting.s3.amazonaws.com/24G_Test_Project/videos/ces_overview.mp4",
      name: "CES Overview",
      views: this.cookieService.get("secondViews"),
      likes: this.cookieService.get("secondLikes"),
      dislikes: this.cookieService.get("secondDislikes"),
      code: "second",
      index: 1,
      selected: false
    },
    {
      picture:
        "https://static-email-hosting.s3.amazonaws.com/24G_Test_Project/videos/future_of_drones.jpg",
      video:
        "https://static-email-hosting.s3.amazonaws.com/24G_Test_Project/videos/future_of_drones.mp4",
      name: "Future of Drones",
      views: this.cookieService.get("thirdViews"),
      likes: this.cookieService.get("thirdLikes"),
      dislikes: this.cookieService.get("thirdDislikes"),
      code: "third",
      index: 2,
      selected: false
    }
  ];
  videoPlaying: any = this.videoLib[0];

  constructor(private cookieService: CookieService) {}

  ngOnInit(): void {
    this.startCookies();
    console.log(this.cookieService.getAll());
  }
  startCookies() {
    //cookies are knew to me, this is incase on a new browser they get set again, incase that happens
    if (this.cookieService.get("start") != "1") {
      this.cookieService.set("start", "1");
      this.cookieService.set("firstDislikes", "0");
      this.cookieService.set("firstLikes", "0");
      this.cookieService.set("firstViews", "0");
      this.cookieService.set("secondDislikes", "0");
      this.cookieService.set("secondLikes", "0");
      this.cookieService.set("secondViews", "0");
      this.cookieService.set("thirdDislikes", "0");
      this.cookieService.set("thirdLikes", "0");
      this.cookieService.set("thirdViews", "0");
    }
  }
  handleVidClick(i: number) {
    this.videoLib.forEach(video => {
      video.selected = false;
    });
    this.videoLib[i].selected = true;
    this.videoPlaying = this.videoLib[i];
  }
  handleLike(i: number) {
    let oldLikes = parseInt(
      this.cookieService.get(`${this.videoLib[i].code}Likes`)
    );
    oldLikes++;
    let newLikes = oldLikes.toString();
    this.cookieService.set(`${this.videoLib[i].code}Likes`, newLikes);
    this.videoLib[i].likes++;
  }
  handleDislike(i: number) {
    let oldDislikes = parseInt(
      this.cookieService.get(`${this.videoLib[i].code}Dislikes`)
    );
    oldDislikes++;
    let newDislikes = oldDislikes.toString();
    this.cookieService.set(`${this.videoLib[i].code}Dislikes`, newDislikes);
    this.videoLib[i].dislikes++;
  }
  handleViews(i: number) {
    let oldViews = parseInt(
      this.cookieService.get(`${this.videoLib[i].code}Views`)
    );
    oldViews++;
    let newViews = oldViews.toString();
    this.cookieService.set(`${this.videoLib[i].code}Views`, newViews);
    this.videoLib[i].views++;
  }
}
