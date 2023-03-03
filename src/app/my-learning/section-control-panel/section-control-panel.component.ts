import {
    animate,
    style,
    transition,
    trigger,
} from '@angular/animations'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
    selector: 'app-section-control-panel',
    templateUrl: './section-control-panel.component.html',
    styleUrls: ['./section-control-panel.component.scss'],
})
export class SectionControlPanelComponent
    implements OnInit
{
    selectedSection: any
    openStatus = false
    visibleIndex = -1

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {}

    showSubItem(ind: any) {
        console.log(ind)
        if (this.visibleIndex === ind) {
            this.visibleIndex = -1
        } else {
            this.visibleIndex = ind
        }
    }

    courseData2: any = [
        {
            section_index: 1,
            section_name: 'Introduction',
            section_intros:
                'Basic enviroment setup for the project',
            topics_counts: 8,
            topics: [
                {
                    topic_index: 1,
                    topic_title: 'The course structure',
                    time: 2,
                    video_url:
                        'assets/videos/course_topic_1.mp4',
                    video_snapshot: '',
                    completed: false,
                    comments: [
                        {
                            comment_index: 1,
                            comment_creater:
                                'df432cdascwcdsacqw',
                            comment_create_date:
                                '34243254323',
                            comment_content:
                                'Below is the relevant code -- from Brads GitHub page:https://github.com/bradtraversy/dev',
                        },
                        {
                            comment_index: 2,
                            comment_creater:
                                'df432cdascwcdsacqw',
                            comment_create_date:
                                '34243254323',
                            comment_content:
                                'Running the dev environment works but I have a f',
                        },
                    ],
                },
                {
                    topic_index: 2,
                    topic_title: 'Section preface',
                    time: 1,
                    video_url:
                        'assets/videos/course_topic_2.mp4',
                    video_snapshot: '',
                    completed: false,
                    comments: [
                        {
                            comment_index: 1,
                            comment_creater:
                                'df432cdascwcdsacqw',
                            comment_create_date:
                                '34243254323',
                            comment_content:
                                'Im pretty sure the findByIdAndUpdate method does not trigger a recalculation of the average ',
                        },
                        {
                            comment_index: 2,
                            comment_creater:
                                'df432cdascwcdsacqw',
                            comment_create_date:
                                '34243254323',
                            comment_content:
                                'definitely specified mapquest as my GEOCODER_PROVIDER and Im using the correct key, h',
                        },
                    ],
                },
                {
                    topic_index: 3,
                    topic_title: 'Prerequesites',
                    time: 5,
                    video_url:
                        'assets/videos/course_topic_3.mp4',
                    video_snapshot: '',
                    completed: false,
                    comments: [
                        {
                            comment_index: 1,
                            comment_creater:
                                'df432cdascwcdsacqw',
                            comment_create_date:
                                '34243254323',
                            comment_content:
                                'Im pretty sure the findByIdAndUpdate method does not trigger a recalculation of the average ',
                        },
                    ],
                },
                {
                    topic_index: 4,
                    topic_title: 'Hello World application',
                    time: 4,
                    video_url: '',
                    video_snapshot: '',
                    completed: false,
                    comments: [
                        {
                            comment_index: 1,
                            comment_content:
                                'Im pretty sure the findByIdAndUpdate method does not trigger a recalculation of the average ',
                        },
                        {
                            comment_index: 2,
                            comment_content:
                                'definitely specified mapquest as my GEOCODER_PROVIDER and Im using the correct key, h',
                        },
                        {
                            comment_index: 3,
                            comment_content:
                                'definitely specified mapquest as my GEOCODER_PROVIDER and Im using the correct key, h',
                        },
                    ],
                },
                {
                    topic_index: 5,
                    topic_title:
                        'Application structure - Part 1',
                    time: 9,
                    video_url: '',
                    video_snapshot: '',
                    completed: false,
                    comments: [],
                },
                {
                    topic_index: 6,
                    topic_title:
                        'Application structure - Part 2',
                    time: 10,
                    video_url: '',
                    video_snapshot: '',
                    completed: false,
                    comments: [],
                },
                {
                    topic_index: 7,
                    topic_title:
                        'Explaining Dependency Injection Container',
                    time: 7,
                    video_url: '',
                    video_snapshot: '',
                    completed: false,
                },
                {
                    topic_index: 8,
                    topic_title: 'Section recapitulation',
                    time: 1,
                    video_url: '',
                    video_snapshot: '',
                    completed: false,
                    comments: [],
                },
            ],
        },
        {
            section_index: 2,
            section_name: 'Skeleton of a real application',
            section_intros:
                'Lets build the project by create the basic framwrok and design',
            topics_counts: 7,
            topics: [
                {
                    topic_index: 9,
                    topic_title: 'Section preface',
                    time: 2,
                    video_url: '',
                    video_snapshot: '',
                    completed: false,
                    comments: [],
                },
                {
                    topic_index: 10,
                    topic_title: 'Profiding a config',
                    time: 1,
                    video_url: '',
                    video_snapshot: '',
                    completed: false,
                    comments: [],
                },
            ],
        },
        {
            section_index: 3,
            section_name: 'Skeleton of a real application',
            section_intros:
                'Lets build the project by create the basic framwrok and design',
            topics_counts: 7,
            topics: [
                {
                    topic_index: 9,
                    topic_title: 'Section preface',
                    time: 2,
                    video_url: '',
                    video_snapshot: '',
                    completed: false,
                    comments: [],
                },
                {
                    topic_index: 10,
                    topic_title: 'Profiding a config',
                    time: 1,
                    video_url: '',
                    video_snapshot: '',
                    completed: false,
                    comments: [],
                },
            ],
        },
    ]

    ngOnInit() {}
    redirect_to_parent() {
        this.router.navigate(
            ['/mylearning/fullstack-gaming'],
            {
                relativeTo: this.activatedRoute,
                queryParams: {},
            }
        )
    }
}
