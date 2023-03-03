import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AddSectionComponent } from './add-section/add-section.component'
import { EditSectionComponent } from './edit-section/edit-section.component'
import { SectionsMainComponent } from './sections-main/sections-main.component'

const routes: Routes = [
    {
        path: 'add-section',
        component: AddSectionComponent,
    },
    {
        path: 'edit-section/:id',
        component: EditSectionComponent,
    },
    {
        path: ':id',
        component: SectionsMainComponent,
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SectionsRoutingModule {}
