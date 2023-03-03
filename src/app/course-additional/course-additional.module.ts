import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AngularSvgIconModule } from 'angular-svg-icon'
import { NavbarModule } from '../navbar/navbar.module'
import { SharedModule } from '../shared/shared.module'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { CoursesAdditionalRoutingModule } from './course-addotional-routing.module'
import { AddCourseAdditionalComponent } from './add-course-additional/add-course-additional.component'
import { ReactiveFormsModule } from '@angular/forms'
import * as fromCourseAdditional from './store/course-additional.reducers'
import { CourseAdditionalEffects } from './store/course-additional.effects'

@NgModule({
    declarations: [AddCourseAdditionalComponent],
    imports: [
        CoursesAdditionalRoutingModule,
        CommonModule,
        CommonModule,
        AngularSvgIconModule,
        NavbarModule,
        SharedModule,
        ReactiveFormsModule,
        StoreModule.forFeature(
            fromCourseAdditional.courseAdditionalFeatureKey,
            fromCourseAdditional.courseReducer
        ),
        EffectsModule.forFeature([CourseAdditionalEffects]),
    ],
})
export class CourseAdditionalModule {}
