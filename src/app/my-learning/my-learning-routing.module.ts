import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ContentDetailComponent } from './content-detail/content-detail.component'
import { MyLearningDetailComponent } from './my-learning-detail/my-learning-detail.component'
import { MyLearningMainComponent } from './my-learning-main/my-learning-main.component'
import { SectionItemListsComponent } from './section-item-lists/section-item-lists.component'
import { SectionTitleControlPanelComponent } from './section-title-control-panel/section-title-control-panel.component'

const routes: Routes = [
    // {
    //     path: 'fullstack-gaming',
    //     component: MyLearningDetailComponent,
    //     children: [
    //         {
    //             path: 'learn/topic/:id',
    //             component: ContentDetailComponent,
    //         },
    //     ],
    // },
    // {
    //   path: 'fullstack-gaming/learn/topic/:id',
    //   component: ContentDetailComponent,
    // },

    {
        path: '',
        component: MyLearningMainComponent,
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MyLearnighRoutingModule {}
