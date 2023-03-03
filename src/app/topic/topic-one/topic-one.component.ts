import { Location } from '@angular/common'
import {
    Component,
    OnInit,
    AfterViewInit,
    ElementRef,
    ViewChild,
    OnChanges,
    Input,
    OnDestroy,
} from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { Observable, Subscription } from 'rxjs'
import { Editor } from 'ngx-editor'

import { Topic } from '../model/topic.model'
import {
    changeModificationStatus,
    changeTopicCompleted,
    loadTopic,
} from '../store/topic.actions'
import {
    selectTopic,
    selectTopicAfterStatusChanged,
} from '../store/topic.selectors'
import { HighlightAutoResult } from 'ngx-highlightjs'

declare let shaka: any
@Component({
    selector: 'app-topic-one',
    templateUrl: './topic-one.component.html',
    styleUrls: ['./topic-one.component.scss'],
})
export class TopicOneComponent
    implements OnInit, AfterViewInit, OnDestroy
{
    @ViewChild('videoPlayer') videoElementRef:
        | ElementRef
        | undefined
    @ViewChild('videoContainer') videoContainerRef:
        | ElementRef
        | undefined

    editor: Editor
    html: ''
    videoElement: HTMLVideoElement | undefined
    videoContainerElement: HTMLDivElement | undefined
    player: any
    topicChoosed: string
    public parameterValue: any
    topicId: any
    topic$: Observable<Topic>
    private subscription$: Subscription
    singleTopic: any
    questionStatus: boolean = false
    updatesStatus = false
    codeStatus: boolean
    videoStatus: boolean

    code = `
    //Below are the codes that needed to replace, due to 
    //new version of angular was released
    
    import { Component } from '@angular/core';
      @Component({
          selector: 'demo',
          templateUrl: './demo.component.html',
          styleUrls: ['./demo.component.scss']
      })
      export class DemoComponent {
          switchStatus: boolean = true;
          this.topicId =
          this.activatedRoute.snapshot.paramMap.get('id')
      }
      
      `
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private location: Location,
        private store: Store
    ) {
        this.topic$ = this.store.select(selectTopic)
    }

    ngOnInit(): void {
        this.editor = new Editor()

        this.topicId =
            this.activatedRoute.snapshot.paramMap.get('id')
        this.store.dispatch(loadTopic({ id: this.topicId }))
        this.activatedRoute.params.subscribe((p) => {
            let urlV = p['id'].toString()
            this.parameterValue = `assets/videos/course_topic_3.mp4`
            // console.log(
            //     'parameterValue value',
            //     this.parameterValue
            // )

            this.initPlayer(this.parameterValue)
        })

        this.subscription$ = this.store
            .select(selectTopic)
            .subscribe((data) => {
                console.log('data,', data)
                console.log('data check')
                if (data) {
                    this.codeStatus =
                        data.modificationTouched
                    this.videoStatus = data.topicCompleted
                } else return
            })
    }

    ngAfterViewInit(): void {
        shaka.polyfill.installAll()
        if (shaka.Player.isBrowserSupported()) {
            this.videoElement =
                this.videoElementRef?.nativeElement
            this.videoContainerElement =
                this.videoContainerRef?.nativeElement
            this.initPlayer(this.parameterValue)
        } else {
            console.error('Browser not supported!')
        }
    }

    initPlayer(url: any) {
        this.player = new shaka.Player(this.videoElement)

        const eventManager = new shaka.util.EventManager()

        const ui = new shaka.ui.Overlay(
            this.player,
            this.videoContainerElement,
            this.videoElement
        )

        // this.player.on(
        //     'timeupdate',
        //     function (player: any) {
        //         if (
        //             player.currentTime() ==
        //             player.duration()
        //         ) {
        //             console.log('video is ended')
        //         }
        //     }
        // )

        // `assets/videos/course_topic_${this.parameterValue}.mp4`;

        const video = document.querySelector('video')

        video?.addEventListener('ended', (event: any) => {
            console.log('finsihed.')

            console.log(
                'this.videoStatus',
                this.videoStatus
            )
            if (this.videoStatus === false) {
                console.log(
                    'oh yeah, emit action to change status'
                )

                // when user finish the video, we emit action to change status
                console.log(
                    'get topic id in video',
                    this.topicId
                )
                this.store.dispatch(
                    changeTopicCompleted({
                        topicId: this.topicId,
                    })
                )
            }
        })

        this.player
            .load(url)
            .then(() => {
                this.videoElement?.play()
            })
            .catch((e: any) => {
                console.error(e)
            })
    }

    redirect_to_parent() {
        this.router.navigate(
            ['/mylearning/fullstack-gaming'],
            {
                relativeTo: this.activatedRoute,
                queryParams: {},
            }
        )
    }

    backClicked() {
        console.log('runs')
        this.location.back()
    }

    questionToggle() {
        this.questionStatus = !this.questionStatus
    }

    updateStatusToggle(topicId: any) {
        if (this.codeStatus === true) {
            this.store.dispatch(
                changeModificationStatus({ topicId })
            )
        }

        this.updatesStatus = !this.updatesStatus
    }

    ngOnDestroy(): void {
        this.editor.destroy()
        this.subscription$.unsubscribe()
    }
}
