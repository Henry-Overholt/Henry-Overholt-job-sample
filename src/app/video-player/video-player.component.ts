import { Component, OnInit } from "@angular/core";
import { url } from "inspector";

@Component({
  selector: "app-video-player",
  templateUrl: "./video-player.component.html",
  styleUrls: ["./video-player.component.css"]
})
export class VideoPlayerComponent implements OnInit {
  user: string = "Henry";
  videoPlaying: any = {
    picture: "video 1",
    video: "",
    name: "No video has been selected",
    views: 0,
    likes: 0,
    dislikes: 0,
    index: 0,
    selected: false
  };
  videoLib: any[] = [
    {
      picture:
        "https://static-email-hosting.s3.amazonaws.com/24G_Test_Project/videos/who_is_24g.jpg",
      video:
        "https://static-email-hosting.s3.amazonaws.com/24G_Test_Project/videos/who_is_24g.mp4",
      name: "Who is 24G?",
      views: 0,
      likes: 0,
      dislikes: 0,
      index: 0,
      selected: false
    },
    {
      picture:
        "https://static-email-hosting.s3.amazonaws.com/24G_Test_Project/videos/ces_overview.jpg",
      video:
        "https://static-email-hosting.s3.amazonaws.com/24G_Test_Project/videos/ces_overview.mp4",
      name: "CES Overview",
      views: 0,
      likes: 0,
      dislikes: 0,
      index: 1,
      selected: false
    },
    {
      picture:
        "https://static-email-hosting.s3.amazonaws.com/24G_Test_Project/videos/future_of_drones.jpg",
      video:
        "https://static-email-hosting.s3.amazonaws.com/24G_Test_Project/videos/future_of_drones.mp4",
      name: "Future of Drones",
      views: 0,
      likes: 0,
      dislikes: 0,
      index: 2,
      selected: false
    }
  ];

  constructor() {}

  ngOnInit() {}
  handleVidClick(i: number) {
    this.videoLib.forEach(video => {
      video.selected = false;
    });
    this.videoLib[i].selected = true;
    this.videoPlaying = this.videoLib[i];
  }
  handleLike(i: number) {
    this.videoLib[i].likes++;
  }
  handleDislike(i: number) {
    this.videoLib[i].dislikes++;
  }

  handleViews(i: number) {
    this.videoLib[i].views++;
  }
}
