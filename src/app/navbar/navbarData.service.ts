import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable()
export class NavbarDataService {
    private messageSource = new BehaviorSubject('')
    currentMessage = this.messageSource.asObservable()

    constructor() {}

    changeMessage(message: any) {
        this.messageSource.next(message)
        console.log('NavbarDataService', message)
    }
}
