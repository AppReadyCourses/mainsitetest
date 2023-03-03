import { Course } from 'src/app/courses/model/course.model'

export interface Cart {
    id?: string
    courseId?: string
    userId?: string
    courses?: Course[]
}
