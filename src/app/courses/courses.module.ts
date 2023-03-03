import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { AngularSvgIconModule } from 'angular-svg-icon'

import { CoursesMainComponent } from './courses-main/courses-main.component'
import { CoursesRoutingModule } from './courses-routing.module'
import { NavbarModule } from '../navbar/navbar.module'
import { CoursesDetailsComponent } from './courses-details/courses-details.component'
import { SectionParentsComponent } from './section-parents/section-parents.component'
import { SharedModule } from '../shared/shared.module'
import { CoursesDetailsSectionComponent } from './courses-details-section/courses-details-section.component'

import * as fromCourses from './store/course.reducer'
import { CourseEffects } from './store/course.effects'
import { AddCourseComponent } from './add-course/add-course.component'
import { ReactiveFormsModule } from '@angular/forms'
import { EditCourseComponent } from './edit-course/edit-course.component'
import { AdminCourseComponent } from './admin-course/admin-course.component'
import { MyLearningService } from '../my-learning/services/mylearning.services'
import { AddCourseAdditionalRelationmComponent } from './add-course-additional-relationm/add-course-additional-relationm.component'
import { DeleteCourseAdditionalComponent } from './delete-course-additional/delete-course-additional.component'
import { CartMainComponent } from '../cart/cart-main/cart-main.component'

@NgModule({
    declarations: [
        CoursesMainComponent,
        CoursesDetailsComponent,
        SectionParentsComponent,
        CoursesDetailsSectionComponent,
        AddCourseComponent,
        EditCourseComponent,
        AdminCourseComponent,
        AddCourseAdditionalRelationmComponent,
        DeleteCourseAdditionalComponent,
        CartMainComponent,
    ],
    imports: [
        ReactiveFormsModule,
        CoursesRoutingModule,
        CommonModule,
        AngularSvgIconModule,
        NavbarModule,
        SharedModule,
        StoreModule.forFeature(
            fromCourses.courseFeatureKey,
            fromCourses.courseReducer
        ),
        EffectsModule.forFeature([CourseEffects]),
    ],
    providers: [MyLearningService],
})
export class CoursesModule {}
