import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import {
    FormsModule,
    ReactiveFormsModule,
} from '@angular/forms'
import { NgxEditorModule } from 'ngx-editor'

import { AngularSvgIconModule } from 'angular-svg-icon'
import { NavbarModule } from '../navbar/navbar.module'
import { SharedModule } from '../shared/shared.module'

import { TopicsRoutingModule } from './topic-routing.module'
import { TopicMainComponent } from './topic-main/topic-main.component'

import * as fromTopics from './store/topic.reducer'
import { TopicsEffects } from './store/topic.effects'
import { TopicEditComponent } from './topic-edit/topic-edit.component'
import { TopicOneComponent } from './topic-one/topic-one.component'

import { HighlightModule } from 'ngx-highlightjs'
import { TopicAddComponent } from './topic-add/topic-add.component'
import { MinuteSecondsPipe } from '../shared/minutes-seconds/MinuteSeconds.pipe'
import { MinssecsPipe } from './minssecs.pipe'
import { TopicVideoComponent } from './topic-video/topic-video.component'
import { VimeModule } from '@vime/angular'

@NgModule({
    declarations: [
        TopicMainComponent,
        TopicEditComponent,
        TopicOneComponent,
        TopicAddComponent,
        MinssecsPipe,
        TopicVideoComponent,
    ],
    imports: [
        HighlightModule,
        NgxEditorModule,
        TopicsRoutingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AngularSvgIconModule,
        NavbarModule,
        SharedModule,
        VimeModule,
        StoreModule.forFeature(
            fromTopics.topicFeatureKey,
            fromTopics.topicReducer
        ),
        EffectsModule.forFeature([TopicsEffects]),
    ],
    exports: [TopicMainComponent],
})
export class TopicsModule {}
