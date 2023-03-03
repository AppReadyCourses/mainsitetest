import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'minssecs',
})
export class MinssecsPipe implements PipeTransform {
    transform(value: any): string {
        let num = +value
        const minutes: number = Math.floor(num / 60)
        return (
            minutes.toString().padStart(2, '0') +
            ':' +
            (num - minutes * 60).toString().padStart(2, '0')
        )
    }
}
