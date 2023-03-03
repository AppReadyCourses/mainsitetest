import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LandingPageComponent } from './landing/landing-page/landing-page.component'
import { LoginComponent } from './auth/login/login.component'
import { RegisterComponent } from './auth/register/register.component'
import { PricingMainComponent } from './pricing/pricing-main/pricing-main.component'
import { CartMainComponent } from './cart/cart-main/cart-main.component'
import { AboutusComponent } from './landing/aboutus/aboutus.component'

const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () =>
            import('./auth/auth.module').then(
                (m) => m.AuthModule
            ),
    },
    {
        path: 'aboutus',
        component: AboutusComponent
    },
    {
        path: 'mylearning',
        loadChildren: () =>
            import('./my-learning/my-learning.module').then(
                (m) => m.MyLearningModule
            ),
    },
    {
        path: 'cart',
        loadChildren: () =>
            import('./cart/cart.module').then(
                (m) => m.CartModule
            ),
    },
    {
        path: 'profile',
        loadChildren: () =>
            import('./profile/profile.module').then(
                (m) => m.ProfileModule
            ),
    },
    // {
    //     path: 'pricing',
    //     loadChildren: () =>
    //         import('./pricing/pricing.module').then(
    //             (m) => m.PricingModule
    //         ),
    // },
    {
        path: 'courses/course-additional',
        loadChildren: () =>
            import(
                './course-additional/course-additional.module'
            ).then((m) => m.CourseAdditionalModule),
        // data: { bodyClass: 'black' },
    },
    {
        path: 'courses/sections/topics',
        loadChildren: () =>
            import('./topic/topic.module').then(
                (m) => m.TopicsModule
            ),
        // data: { bodyClass: 'black' },
    },
    {
        path: 'courses/sections',
        loadChildren: () =>
            import('./sections/sections.module').then(
                (m) => m.SectionsModule
            ),
        // data: { bodyClass: 'black' },
    },
    {
        path: 'courses',
        loadChildren: () =>
            import('./courses/courses.module').then(
                (m) => m.CoursesModule
            ),

        // data: { bodyClass: 'black' },
    },
    {
        path: 'help',
        loadChildren: () =>
            import('./help/help.module').then(
                (m) => m.HelpModule
            ),
        // data: { bodyClass: 'black' },
    },
    {
        path: '',
        loadChildren: () =>
            import('./landing/landing.module').then(
                (m) => m.LandingModule
            ),
    },
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            onSameUrlNavigation: 'reload',
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
