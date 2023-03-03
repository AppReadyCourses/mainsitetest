import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AddCourseAdditionalRelationmComponent } from './add-course-additional-relationm/add-course-additional-relationm.component'
import { AddCourseComponent } from './add-course/add-course.component'
import { AdminCourseComponent } from './admin-course/admin-course.component'
import { CartMainComponent } from '../cart/cart-main/cart-main.component'
import { CoursesDetailsComponent } from './courses-details/courses-details.component'
import { CoursesMainComponent } from './courses-main/courses-main.component'
import { DeleteCourseAdditionalComponent } from './delete-course-additional/delete-course-additional.component'
import { EditCourseComponent } from './edit-course/edit-course.component'
import { SectionParentsComponent } from './section-parents/section-parents.component'

const routes: Routes = [
    {
        path: 'add-course',
        component: AddCourseComponent,
    },
    // {
    //     path: 'cart',
    //     component: CartMainComponent,
    // },
    {
        path: 'course-additional/delete-course-relation',
        component: DeleteCourseAdditionalComponent,
    },
    {
        path: 'course-additional/add-course-relation',
        component: AddCourseAdditionalRelationmComponent,
    },
    {
        path: 'admin-course',
        component: AdminCourseComponent,
    },
    {
        path: 'edit-course/:id',
        component: EditCourseComponent,
    },
    {
        path: 'details/:id',
        component: CoursesDetailsComponent,
    },
    {
        path: 'details/:id/section',
        component: SectionParentsComponent,
    },
    {
        path: '',
        component: CoursesMainComponent,
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CoursesRoutingModule {}
