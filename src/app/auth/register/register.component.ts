import { Component, OnInit } from '@angular/core'
import {
    FormBuilder,
    FormControl,
    FormGroup,
} from '@angular/forms'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { SignUp } from '../store/auth.actions'

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
    myForm: FormGroup
    errors: string | null
    getState$: Observable<any>

    preSelectInterestesRole: any = [
        'UI/UX designer',
        'Web Developer',
        'Data Science',
        'Front-end Developer',
        'Back-end Developer',
    ]

    avatarImgArray: any = [
        '/assets/avatars/man-1.png',
        '/assets/avatars/man-2.png',
        '/assets/avatars/man-3.png',
        '/assets/avatars/woman-1.png',
        '/assets/avatars/woman-2.png',
        '/assets/avatars/woman-3.png',
    ]

    avatarNames: any = ['1', '2', '3', '4', '5', '6']

    getErrors$: Observable<string | null>
    constructor(
        private store: Store,
        public fb: FormBuilder
    ) {}

    ngOnInit(): void {
        // this.myForm = new FormGroup({
        //     username: new FormControl(),
        //     password: new FormControl(),
        //     email: new FormControl(),

        // })
        this.myForm = this.fb.group({
            username: [''],
            password: [''],
            email: [''],
            interestedIn: [''],
            avatar: [''],
        })
    }

    onSubmit(form: FormGroup) {
        console.log('form value', form.value)
        this.store.dispatch(
            SignUp({ credentials: form.value })
        )
    }
}
