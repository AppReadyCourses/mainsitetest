import { Injectable } from '@angular/core'
import { Apollo, gql } from 'apollo-angular'
import { map } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class MyLearningService {
    constructor(private apollo: Apollo) {}

    getCoursesFromMyLearning() {
        const coursesData = this.apollo
            .watchQuery<any>({
                query: GET_COURSES_FROM_MY_LEARNING,
                fetchPolicy: 'no-cache',
            })
            .valueChanges.pipe(
                map((result) => result.data.findMyLearning)
            )

        console.log('getCoursesByUser', coursesData)
        return coursesData
    }

    addFreeCourseToMyLearning(courseId: any) {
        console.log(
            'addFreeCourseToMyLearning runs',
            courseId
        )
        const data = this.apollo.mutate<any>({
            mutation: ADD_FREE_COURSE_TO_MY_LEARNING,
            variables: {
                courseId,
            },
            refetchQueries: [
                {
                    query: GET_COURSES_FROM_MY_LEARNING,
                },
            ],
        })

        return data
    }

    addPaidCourseToMyLearning(courseIds: any) {
        console.log(
            'addPaidCourseToMyLearning runs',
            courseIds
        )
        const data = this.apollo.mutate<any>({
            mutation: ADD_PAID_COURSE_TO_MY_LEARNING,
            variables: {
                courseIds,
            },
            refetchQueries: [
                {
                    query: GET_COURSES_FROM_MY_LEARNING,
                },
            ],
        })

        return data
    }

    deleteCourseFromMyLearning(courseId: any) {
        const data = this.apollo.mutate<any>({
            mutation: DELETE_FREE_COURSE_FROM_MY_LEARNING,
            variables: {
                courseId,
            },
            refetchQueries: [
                {
                    query: GET_COURSES_FROM_MY_LEARNING,
                },
            ],
        })

        return data
    }
}

const GET_COURSES_FROM_MY_LEARNING = gql`
    query {
        findMyLearning {
            id
            courseName
            courseType
        }
    }
`

const ADD_FREE_COURSE_TO_MY_LEARNING = gql`
    mutation addFreeCourseToMyLearning($courseId: String!) {
        addFreeCourseToMyLearning(courseId: $courseId) {
            id
            courseName
            courseType
        }
    }
`
const ADD_PAID_COURSE_TO_MY_LEARNING = gql`
    mutation addPaidCourseToMyLearning(
        $courseIds: [String!]!
    ) {
        addPaidCourseToMyLearning(courseIds: $courseIds) {
            id
            courseName
            courseType
        }
    }
`

const DELETE_FREE_COURSE_FROM_MY_LEARNING = gql`
    mutation deleteFreeCourseFromMyLearning(
        $courseId: String!
    ) {
        deleteFreeCourseFromMyLearning(courseId: $courseId)
    }
`
