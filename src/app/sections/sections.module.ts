import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { SectionsRoutingModule } from './sections-routing.module'
import { AngularSvgIconModule } from 'angular-svg-icon'
import { NavbarModule } from '../navbar/navbar.module'
import { SharedModule } from '../shared/shared.module'
import { SectionsMainComponent } from './sections-main/sections-main.component'
import { StoreModule } from '@ngrx/store'

import * as fromSections from './store/section.reducer'
import { EffectsModule } from '@ngrx/effects'
import { SectionEffects } from './store/section.effects'
import { AddSectionComponent } from './add-section/add-section.component'
import { EditSectionComponent } from './edit-section/edit-section.component'
import { TopicsModule } from '../topic/topic.module'

@NgModule({
    declarations: [
        SectionsMainComponent,
        AddSectionComponent,
        EditSectionComponent,
    ],
    imports: [
        SectionsRoutingModule,
        CommonModule,
        ReactiveFormsModule,
        AngularSvgIconModule,
        NavbarModule,
        TopicsModule,
        SharedModule,
        StoreModule.forFeature(
            fromSections.sectionFeatureKey,
            fromSections.sectionReducer
        ),
        EffectsModule.forFeature([SectionEffects]),
    ],
})
export class SectionsModule {}
