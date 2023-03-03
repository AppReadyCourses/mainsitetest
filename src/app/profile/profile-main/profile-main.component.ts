import {
    HttpClient,
    HttpHeaders,
} from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import {
    DomSanitizer,
    SafeUrl,
} from '@angular/platform-browser'

@Component({
    selector: 'app-profile-main',
    templateUrl: './profile-main.component.html',
    styleUrls: ['./profile-main.component.scss'],
})
export class ProfileMainComponent implements OnInit {
    videoData: any
    token: any
    videoHLSArray = []

    constructor(
        private http: HttpClient,
        private sanitizer: DomSanitizer
    ) {}

    ngOnInit(): void {
        this.getConfig()
    }

    getConfig() {
        // this.http
        //     .get(this.configUrl, { observe: 'response' })
        //     .subscribe((data) => {
        //         console.log('image data', data)
        //     })

        // Set token to header again here, because the HTTP Intercepter in auth doesn't work.
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
        })
        this.token = localStorage.getItem('token')
        headers = headers.append(
            'Authorization',
            'Bearer ' + this.token
        )
        const configUrl = `http://localhost:4000/video/Morbius.mp4`

        this.http
            .get(configUrl, {
                responseType: 'blob' as 'json',
                headers: headers,
            })
            .subscribe((response: any) => {
                const urlCreator = window.URL
                this.videoData =
                    this.sanitizer.bypassSecurityTrustUrl(
                        urlCreator.createObjectURL(response)
                    )
                console.log('image response', response)
                console.log(
                    'image videoData',
                    this.videoData
                )
            })
    }

    getUrl() {
        return `http://localhost:4000/video/Morbius.m3u8`
    }
}
