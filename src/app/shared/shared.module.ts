import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MyFreeCoursesDComponent } from './my-free-courses-d/my-free-courses-d.component'

import { AngularSvgIconModule } from 'angular-svg-icon'
import { MyPaidCoursesDComponent } from './my-paid-courses-d/my-paid-courses-d.component'
import { TrySubPromoComponent } from './try-sub-promo/try-sub-promo.component'
import { MySubscriptionPlanComponent } from './my-subscription-plan/my-subscription-plan.component'
import { LoadingComponent } from './loading/loading.component'

@NgModule({
    declarations: [
        MyFreeCoursesDComponent,
        MyPaidCoursesDComponent,
        TrySubPromoComponent,
        MySubscriptionPlanComponent,
        LoadingComponent,
    ],
    imports: [CommonModule, AngularSvgIconModule],
    exports: [
        MyFreeCoursesDComponent,
        MyPaidCoursesDComponent,
        TrySubPromoComponent,
        MySubscriptionPlanComponent,
        LoadingComponent,
    ],
})
export class SharedModule {}
