import { Component, OnInit, ViewChild } from '@angular/core'
import { Player } from '@vime/angular'

@Component({
    selector: 'app-topic-video',
    templateUrl: './topic-video.component.html',
    styleUrls: ['./topic-video.component.scss'],
})
export class TopicVideoComponent implements OnInit {
    @ViewChild('player') player!: Player

    constructor() {}

    ngOnInit(): void {}

    onPlaybackReady() {
        // ...
    }
}
