import { Component, OnDestroy, OnInit } from '@angular/core'
import {
    FormBuilder,
    FormControl,
    FormGroup,
} from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { Update } from '@ngrx/entity'
import { Store } from '@ngrx/store'
import { Observable, Subscription } from 'rxjs'
import { Section } from '../model/section.model'
import {
    editSection,
    loadSection,
} from '../store/section.actions'
import { selectSection } from '../store/section.selectors'

@Component({
    selector: 'app-edit-section',
    templateUrl: './edit-section.component.html',
    styleUrls: ['./edit-section.component.scss'],
})
export class EditSectionComponent
    implements OnInit, OnDestroy
{
    private subscription$: Subscription
    myForm: FormGroup
    errors: string | null
    getState$: Observable<any>
    section$: Observable<Section>
    sections$: Observable<Section[]>
    singleSection: Section

    getErrors$: Observable<string | null>
    constructor(
        private store: Store,
        private route: ActivatedRoute,
        private router: Router,
        private fb: FormBuilder
    ) {}

    ngOnInit(): void {
        const sectionId: any =
            this.route.snapshot.paramMap.get('id')
        console.log('sectionId', sectionId)

        if (sectionId) {
            this.store.dispatch(
                loadSection({ id: sectionId })
            )
        }

        this.section$ = this.store.select(selectSection)
        // this.myForm = new FormGroup({
        //     sectionName: new FormControl(),
        //     sectionIntroduction: new FormControl(),
        //     courseId: new FormControl(),
        // })

        this.subscription$ = this.store
            .select(selectSection)
            .subscribe((data) => {
                this.singleSection = data
                this.loadSection()
            })
    }

    loadSection() {
        // console.log(
        //     'load course - edit- course form',
        //     this.singleCourse
        // )
        console.log('section', this.singleSection)
        this.myForm = this.fb.group({
            sectionId: this.fb.control(
                (this.singleSection &&
                    this.singleSection.id) ||
                    ''
            ),
            sectionName: this.fb.control(
                (this.singleSection &&
                    this.singleSection.sectionName) ||
                    ''
            ),
            sectionIntroduction: this.fb.control(
                (this.singleSection &&
                    this.singleSection
                        .sectionIntroduction) ||
                    ''
            ),
        })
    }

    onSubmit(form: FormGroup) {
        // console.log('Valid?', form.valid);
        // console.log('form.value', form.value);

        const id: any =
            this.route.snapshot.paramMap.get('id')

        // console.log('on submit id', idToNum);

        const update: Update<Section> = {
            id: id,
            changes: form.value,
        }

        console.log('update', update)

        // console.log('projectToBeEdited', update);
        this.store.dispatch(
            editSection({ section: update })
        )
        this.router.navigate(['/courses'])
    }

    ngOnDestroy() {
        this.subscription$.unsubscribe()
    }
}
