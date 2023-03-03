import { Location } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { select, Store } from '@ngrx/store'
import { Observable, Subscription } from 'rxjs'
import { Section } from '../model/section.model'
import {
    deleteSection,
    deleteSectionFromCourse,
    loadSection,
    loadSectionByCourse,
    loadSections,
} from '../store/section.actions'
import { SectionState } from '../store/section.reducer'
import {
    selectSection,
    selectSections,
    selectSectionsByCourse,
} from '../store/section.selectors'

@Component({
    selector: 'app-sections-main',
    templateUrl: './sections-main.component.html',
    styleUrls: ['./sections-main.component.scss'],
})
export class SectionsMainComponent implements OnInit {
    private subscription$: Subscription

    sections$: Observable<Section[]>
    section$: Observable<Section>
    sectionSelected$: Observable<Section[]>
    courseID: any
    sectionData: Section[]

    constructor(
        private store: Store<SectionState>,
        private route: ActivatedRoute,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private location: Location
    ) {
        this.sections$ = store.select(
            selectSectionsByCourse
        )
    }

    ngOnInit(): void {
        this.courseID =
            this.route.snapshot.paramMap.get('id')

        this.store.dispatch(
            loadSectionByCourse({ id: this.courseID })
        )
    }

    deleteSection(id: any) {
        this.store.dispatch(deleteSection({ id }))

        // this.store.dispatch(
        //     loadSections({ id: this.courseID })
        // )
    }

    backClicked() {
        this.location.back()
    }
}
