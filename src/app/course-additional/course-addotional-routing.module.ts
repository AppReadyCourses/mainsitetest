import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AddCourseAdditionalComponent } from './add-course-additional/add-course-additional.component'

const routes: Routes = [
    {
        path: 'add-course-property',
        component: AddCourseAdditionalComponent,
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CoursesAdditionalRoutingModule {}
