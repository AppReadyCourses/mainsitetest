import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
  OnChanges,
  Input,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

declare let shaka: any;
@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss'],
})
export class ContentDetailComponent implements OnInit, AfterViewInit {
  @ViewChild('videoPlayer') videoElementRef: ElementRef | undefined;
  @ViewChild('videoContainer') videoContainerRef: ElementRef | undefined;

  videoElement: HTMLVideoElement | undefined;
  videoContainerElement: HTMLDivElement | undefined;
  player: any;
  topicChoosed: string;
  public parameterValue: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((p) => {
      let urlV = p['id'].toString();
      this.parameterValue = `assets/videos/course_topic_${urlV}.mp4`;
      console.log('parameterValue value', this.parameterValue);

      this.initPlayer(this.parameterValue);
    });
  }

  ngAfterViewInit(): void {
    shaka.polyfill.installAll();
    if (shaka.Player.isBrowserSupported()) {
      this.videoElement = this.videoElementRef?.nativeElement;
      this.videoContainerElement = this.videoContainerRef?.nativeElement;
      this.initPlayer(this.parameterValue);
    } else {
      console.error('Browser not supported!');
    }
  }

  initPlayer(url: any) {
    this.player = new shaka.Player(this.videoElement);

    const ui = new shaka.ui.Overlay(
      this.player,
      this.videoContainerElement,
      this.videoElement
    );

    // this.player.on('timeupdate', function (player: any) {
    //   if (player.currentTime() == player.duration()) {
    //     console.log('video is ended');
    //   }
    // });

    // `assets/videos/course_topic_${this.parameterValue}.mp4`;

    this.player
      .load(url)
      .then(() => {
        this.videoElement?.play();
      })
      .catch((e: any) => {
        console.error(e);
      });
  }

  redirect_to_parent() {
    this.router.navigate(['/mylearning/fullstack-gaming'], {
      relativeTo: this.activatedRoute,
      queryParams: {},
    });
  }
}
