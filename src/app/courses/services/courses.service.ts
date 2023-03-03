import { identifierName } from '@angular/compiler'
import { Injectable } from '@angular/core'
import { Apollo, gql } from 'apollo-angular'
import { map, tap } from 'rxjs/operators'
import { Course } from '../model/course.model'

interface idType {
    id: string | number
}

@Injectable({ providedIn: 'root' })
export class CourseService {
    constructor(private apollo: Apollo) {}

    getCourses() {
        const coursesData = this.apollo
            .watchQuery<any>({
                query: GET_COURSES,
            })
            .valueChanges.pipe(
                map((result) => result.data.courses)
            )
        // console.log('coursesData - service', coursesData)
        return coursesData
    }

    getCourse(id: string) {
        const courseData = this.apollo
            .watchQuery<any>({
                query: GET_COURSE,
                variables: { id },
            })
            .valueChanges.pipe(
                map((result) => result.data.course)
            )
        return courseData
    }

    createCourse(course: Course) {
        const {
            courseName,
            courseIntroduction,
            courseType,
            coursePrice,
        } = course

        console.log('create course service', course)

        return this.apollo.mutate<any>({
            mutation: CREATE_COURSE,
            variables: {
                courseName,
                courseIntroduction,
                courseType,
                coursePrice,
            },
            refetchQueries: [
                {
                    query: GET_COURSES,
                },
            ],
        })
    }

    updateCourse(id: any, course: Partial<Course>) {
        console.log('updateCourse - SERVICE', course)
        console.log('updateCourse - SERVICE id', id)
        const {
            courseName,
            courseIntroduction,
            courseType,
            coursePrice,
        } = course
        return this.apollo.mutate<any>({
            mutation: UPDATE_COURSE,
            variables: {
                id: id,
                courseName,
                courseIntroduction,
                courseType,
                coursePrice,
            },
            refetchQueries: [
                {
                    query: GET_COURSES,
                },
            ],
        })
    }

    deleteCourse(id: any) {
        return this.apollo.mutate<any>({
            mutation: DELETE_COURSE,
            variables: {
                id,
            },
            refetchQueries: [
                {
                    query: GET_COURSES,
                },
            ],
        })
    }

    fetchUserProfile() {
        const userData = this.apollo
            .watchQuery<any>({
                query: FETCH_USER_PROFILE_ONLY,
            })
            .valueChanges.pipe(
                map((result) => result.data.whoAmI)
            )

        // console.log(
        //     'fetchUserProfile - course.service',
        //     userData
        // )

        return userData
    }

    enrollCourse(userId: any, courseId: any) {
        console.log(' enrollCourse service runs')
        const data = this.apollo.mutate<any>({
            mutation: CREATE_USER_COURSE_RELATION,
            variables: {
                userId,
                courseId,
            },
            refetchQueries: [
                {
                    query: GET_COURSES,
                },
            ],
        })

        return data
    }

    findCoursesUserHadByUser() {
        const data = this.apollo
            .watchQuery<any>({
                query: GET_COURSE_BY_USER,
            })
            .valueChanges.pipe(
                map(
                    (result) =>
                        result.data
                            .findCoursesUserhadByUserId
                )
            )

        return data
    }

    addCourseRelation(
        courseId: any,
        courseAdditionalId: any
    ) {
        console.log(
            'addCourseRelation course.service',
            courseId,
            courseAdditionalId
        )
        const data = this.apollo.mutate<any>({
            mutation: ADD_COURSE_AND_COURSERELATION,
            variables: {
                courseId,
                courseAdditionalId,
            },
            refetchQueries: [
                {
                    query: GET_COURSES,
                },
            ],
        })

        return data
    }

    deleteCourseRelation(
        courseId: any,
        courseAdditionalId: any
    ) {
        console.log(
            'deleteCourseRelation course.service',
            courseId,
            courseAdditionalId
        )
        const data = this.apollo.mutate<any>({
            mutation: DELETE_COURSE_AND_COURSERELATION,
            variables: {
                courseId,
                courseAdditionalId,
            },
            refetchQueries: [
                {
                    query: GET_COURSES,
                },
            ],
        })

        return data
    }
}

export const GET_COURSES = gql`
    query {
        courses {
            id
            created
            courseName
            coursePrice
            courseIntroduction
            courseType
            courseMainImg
            courseAdditional {
                id
                courseDuration
            }
        }
    }
`

export const GET_COURSE = gql`
    query course($id: String!) {
        course(id: $id) {
            id
            created
            courseName
            courseIntroduction
            courseType
            courseMainImg
            coursePrice
            courseAdditional {
                id
                courseDuration
                totalSections
                totalTopics
                skillsLearned1
                skillsLearned2
                skillsLearned3
                skillsLearned4
                toolsUsed1
                toolsUsed2
                toolsUsed3
                toolsUsed4
                toolsUsedImg1
                toolsUsedImg2
                toolsUsedImg3
                toolsUsedImg4
            }
        }
    }
`

export const CREATE_COURSE = gql`
    mutation createCourse(
        $courseName: String!
        $courseIntroduction: String!
        $courseType: String!
        $coursePrice: Float!
    ) {
        createCourse(
            courseName: $courseName
            courseIntroduction: $courseIntroduction
            courseType: $courseType
            coursePrice: $coursePrice
        ) {
            id
            created
            courseName
            courseIntroduction
            courseType
            coursePrice
        }
    }
`

export const UPDATE_COURSE = gql`
    mutation updateCourse(
        $id: String!
        $courseName: String!
        $courseIntroduction: String!
        $courseType: String!
        $coursePrice: Float!
    ) {
        updateCourse(
            id: $id
            courseName: $courseName
            courseIntroduction: $courseIntroduction
            courseType: $courseType
            coursePrice: $coursePrice
        ) {
            id
        }
    }
`
export const DELETE_COURSE = gql`
    mutation deleteCourse($id: String!) {
        deleteCourse(id: $id) {
            id
            courseName
        }
    }
`
const FETCH_USER_PROFILE_ONLY = gql`
    query {
        whoAmI {
            id
            username
            email
            interestedIn
            avatar
        }
    }
`

const CREATE_USER_COURSE_RELATION = gql`
    mutation createUserCourse(
        $userId: String!
        $courseId: String!
    ) {
        createUserCourse(
            userId: $userId
            courseId: $courseId
        ) {
            id
            courseName
            courseIntroduction
            courseType
        }
    }
`
const GET_COURSE_BY_USER = gql`
    query {
        findCoursesUserhadByUserId {
            id
            courseName
            courseIntroduction
            courseType
        }
    }
`

const ADD_COURSE_AND_COURSERELATION = gql`
    mutation addCourseAndCourseAdditionalRelation(
        $courseId: String!
        $courseAdditionalId: String!
    ) {
        addCourseAndCourseAdditionalRelation(
            courseId: $courseId
            courseAdditionalId: $courseAdditionalId
        ) {
            id
            courseName
            courseIntroduction
            courseType
            courseMainImg
        }
    }
`

const DELETE_COURSE_AND_COURSERELATION = gql`
    mutation removeCourseAdditionalRelation(
        $courseId: String!
        $courseAdditionalId: String!
    ) {
        removeCourseAdditionalRelation(
            courseId: $courseId
            courseAdditionalId: $courseAdditionalId
        ) {
            id
            courseName
            courseIntroduction
        }
    }
`
const ADD_ITEM_TO_CART = gql`
    mutation addNewCart($courseId: String!) {
        addNewCart(courseId: $courseId) {
            id
            courseName
            courseIntroduction
            courseMainImg
            courseAdditional {
                id
                coursePrice
            }
        }
    }
`
const REMOVE_ITEM_IN_CART = gql`
    mutation removeFromCart($courseId: String!) {
        removeFromCart(courseId: $courseId)
    }
`

const GET_ITEMS_IN_CART = gql`
    query {
        findCart {
            id
            courseName
            courseIntroduction
            courseMainImg
            courseAdditional {
                id
                coursePrice
            }
        }
    }
`
