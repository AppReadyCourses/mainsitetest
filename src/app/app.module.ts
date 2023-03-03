import {
    HttpClientModule,
    HTTP_INTERCEPTORS,
} from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SvgIconsModule } from '@ngneat/svg-icon'
import { AngularSvgIconModule } from 'angular-svg-icon'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { NavbarModule } from './navbar/navbar.module'

import { environment as env } from '../environments/environment'
import { LandingModule } from './landing/landing.module'
import { GraphQLModule } from './graphql.module'
import { StoreModule } from '@ngrx/store'
import { reducers, metaReducers } from './reducers'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { GalleryModule } from 'ng-gallery'
import { NgxEditorModule } from 'ngx-editor'
import {
    HighlightModule,
    HighlightOptions,
    HIGHLIGHT_OPTIONS,
} from 'ngx-highlightjs'
import { HotToastModule } from '@ngneat/hot-toast'
import { DARK_MODE_OPTIONS } from 'angular-dark-mode'

import { EffectsModule } from '@ngrx/effects'
import { AppEffects } from './app.effects'
import { AuthEffects } from './auth/store/auth.effects'
import { AuthInterceptorService } from './auth/services/auth.interceptor.service'
import { NavbarDataService } from './navbar/navbarData.service'
import { MyLearningModule } from './my-learning/my-learning.module'
import { NgxPayPalModule } from 'ngx-paypal'
import { CartModule } from './cart/cart.module'
import { CartEffects } from './cart/store/cart.effects'
import { MinuteSecondsPipe } from './shared/minutes-seconds/MinuteSeconds.pipe'
import { VimeModule } from '@vime/angular'

@NgModule({
    declarations: [AppComponent, MinuteSecondsPipe],
    imports: [
        NgxPayPalModule,
        HighlightModule,
        BrowserAnimationsModule,
        GalleryModule.withConfig({
            autoPlay: true,
            loop: true,
        }),
        GraphQLModule,
        BrowserModule,
        AppRoutingModule,
        NavbarModule,
        HttpClientModule,
        AngularSvgIconModule.forRoot(),
        LandingModule,
        MyLearningModule,
        CartModule,
        HotToastModule.forRoot(),
        NgxEditorModule,
        EffectsModule.forRoot([AppEffects]),
        StoreModule.forRoot(reducers, { metaReducers }),
        VimeModule,
        !env.production
            ? StoreDevtoolsModule.instrument()
            : [],
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptorService,
            multi: true,
        },
        {
            provide: DARK_MODE_OPTIONS,
            useValue: {
                darkModeClass: 'dark-mode',
                lightModeClass: 'light-mode',
                storageKey: 'dark-mode',
            },
        },
        {
            provide: HIGHLIGHT_OPTIONS,
            useValue: <HighlightOptions>{
                coreLibraryLoader: () =>
                    import('highlight.js/lib/core'),
                themePath:
                    'node_modules/highlight.js/styles/rainbow.css',
                languages: {
                    typescript: () =>
                        import(
                            'highlight.js/lib/languages/typescript'
                        ),
                    css: () =>
                        import(
                            'highlight.js/lib/languages/css'
                        ),
                    xml: () =>
                        import(
                            'highlight.js/lib/languages/xml'
                        ),
                },
            },
        },
        NavbarDataService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
