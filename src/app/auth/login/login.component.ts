import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { Store } from '@ngrx/store'

import { Observable } from 'rxjs'
import { Login } from 'src/app/auth/store/auth.actions'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    myForm: FormGroup
    errors: string | null
    getState$: Observable<any>

    getErrors$: Observable<string | null>
    constructor(private store: Store) {}

    ngOnInit(): void {
        this.myForm = new FormGroup({
            username: new FormControl(),
            password: new FormControl(),
        })
    }

    onSubmit(form: FormGroup) {
        console.log('form value', form.value)
        this.store.dispatch(
            Login({ credentials: form.value })
        )
    }
}
