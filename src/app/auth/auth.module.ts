import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { AuthRoutingModule } from './auth-routing.module'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { AuthEffects } from './store/auth.effects'

import * as fromAuth from './store/auth.reducer'

@NgModule({
    declarations: [LoginComponent, RegisterComponent],
    imports: [
        AuthRoutingModule,
        HttpClientModule,
        CommonModule,
        StoreModule.forFeature(
            fromAuth.authFeatureKey,
            fromAuth.reducer
        ),
        EffectsModule.forFeature([AuthEffects]),
        ReactiveFormsModule,
    ],
})
export class AuthModule {}
