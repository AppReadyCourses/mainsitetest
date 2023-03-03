import { Component, OnInit } from '@angular/core'
import {
    ActivatedRoute,
    Router,
    NavigationEnd,
} from '@angular/router'
import { DarkModeService } from 'angular-dark-mode'

@Component({
    selector: 'app-sidebar-menu-main',
    templateUrl: './sidebar-menu-main.component.html',
    styleUrls: ['./sidebar-menu-main.component.scss'],
})
export class SidebarMenuMainComponent implements OnInit {
    enableColor = false
    locationUrl = ''
    constructor(
        activatedRoute: ActivatedRoute,
        private router: Router
    ) {
        // console.log(window.location.pathname);
        this.locationUrl = window.location.pathname

        // if ((window.location.pathname = '/courses')) {
        //   console.log('url?', this.locationUrl);
        //   console.log('true!');
        // }
    }

    getColor(): any {
        if (window.location.pathname === '/courses') {
            return { 'active-color': true }
        }
    }

    help() {
        console.log('help runs')
    }

    ngOnInit(): void {}
}
