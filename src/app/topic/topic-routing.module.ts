import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { TopicAddComponent } from './topic-add/topic-add.component'
import { TopicMainComponent } from './topic-main/topic-main.component'
import { TopicOneComponent } from './topic-one/topic-one.component'
import { TopicVideoComponent } from './topic-video/topic-video.component'

const routes: Routes = [
    {
        path: 'add-topic',
        component: TopicAddComponent,
    },
    {
        path: 'detail/:id',
        component: TopicOneComponent,
    },
    {
        path: 'video/:id',
        component: TopicVideoComponent,
    },
    {
        path: ':id',
        component: TopicMainComponent,
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TopicsRoutingModule {}
