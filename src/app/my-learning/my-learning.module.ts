import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MyLearningMainComponent } from './my-learning-main/my-learning-main.component'
import { MyLearnighRoutingModule } from './my-learning-routing.module'
import { NavbarModule } from '../navbar/navbar.module'
import { AngularSvgIconModule } from 'angular-svg-icon'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'

import { SharedModule } from '../shared/shared.module'
import { MyLearningDetailComponent } from './my-learning-detail/my-learning-detail.component'
import { SectionControlPanelComponent } from './section-control-panel/section-control-panel.component'
import { SectionTitleControlPanelComponent } from './section-title-control-panel/section-title-control-panel.component'
import { SectionItemListsComponent } from './section-item-lists/section-item-lists.component'
import { ContentDetailComponent } from './content-detail/content-detail.component'
import { CommentMainComponent } from './comment-main/comment-main.component'
import * as fromMyLearning from './store/mylearning.reducers'
import { MyLearningEffects } from './store/mylearning.effects'
import { NavbarDataService } from '../navbar/navbarData.service'

@NgModule({
    declarations: [
        MyLearningMainComponent,
        MyLearningDetailComponent,
        SectionControlPanelComponent,
        SectionTitleControlPanelComponent,
        SectionItemListsComponent,
        ContentDetailComponent,
        CommentMainComponent,
    ],
    imports: [
        CommonModule,
        MyLearnighRoutingModule,
        NavbarModule,
        AngularSvgIconModule,
        SharedModule,

        StoreModule.forFeature(
            fromMyLearning.mylearningFeatureKey,
            fromMyLearning.myLearningReducer
        ),
        EffectsModule.forFeature([MyLearningEffects]),
    ],
    providers: [NavbarDataService],
})
export class MyLearningModule {}
