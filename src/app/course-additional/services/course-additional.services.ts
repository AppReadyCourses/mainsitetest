import { Injectable } from '@angular/core'
import { Apollo, gql } from 'apollo-angular'
import { map } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class CourseAdditionalService {
    constructor(private apollo: Apollo) {}

    getOneCourseAdditional(id: string) {
        const courseAdditionalData = this.apollo
            .watchQuery<any>({
                query: GET_COURSE_ADDITIONAL,
                variables: { id },
            })
            .valueChanges.pipe(
                map(
                    (result) =>
                        result.data.findOneAdditionalCourse
                )
            )
        return courseAdditionalData
    }

    addOneCourseAdditional(
        coursePrice: any,
        courseDuration: any,
        totalSections: any,
        totalTopics: any,
        skillsLearned1: any,
        skillsLearned2: any,
        skillsLearned3: any,
        skillsLearned4: any,
        toolsUsed1: any,
        toolsUsed2: any,
        toolsUsed3: any,
        toolsUsed4: any,
        toolsUsedImg1: any,
        toolsUsedImg2: any,
        toolsUsedImg3: any,
        toolsUsedImg4: any
    ) {
        console.log(
            'add course additioonal sertvice runs - coursePrice',
            coursePrice
        )
        console.log(
            'add course additioonal sertvice runs - courseDuration',
            courseDuration
        )
        return this.apollo.mutate<any>({
            mutation: CREATE_COURSE_ADDITIONAL,
            variables: {
                coursePrice,
                courseDuration,
                totalSections,
                totalTopics,
                skillsLearned1,
                skillsLearned2,
                skillsLearned3,
                skillsLearned4,
                toolsUsed1,
                toolsUsed2,
                toolsUsed3,
                toolsUsed4,
                toolsUsedImg1,
                toolsUsedImg2,
                toolsUsedImg3,
                toolsUsedImg4,
            },
            refetchQueries: [
                {
                    query: FIND_ALL_COURSE_ADDITIONAL,
                },
            ],
        })
    }
}

const GET_COURSE_ADDITIONAL = gql`
    query findOneAdditionalCourse($id: String!) {
        findOneAdditionalCourse(id: $id) {
            id
            coursePrice
            courseDuration
            totalSections
        }
    }
`

const CREATE_COURSE_ADDITIONAL = gql`
    mutation createAdditionalCourse(
        $coursePrice: Float!
        $courseDuration: String!
        $totalSections: Float!
        $totalTopics: Float!
        $skillsLearned1: String
        $skillsLearned2: String
        $skillsLearned3: String
        $skillsLearned4: String
        $toolsUsed1: String
        $toolsUsed2: String
        $toolsUsed3: String
        $toolsUsed4: String
        $toolsUsedImg1: String
        $toolsUsedImg2: String
        $toolsUsedImg3: String
        $toolsUsedImg4: String
    ) {
        createAdditionalCourse(
            coursePrice: $coursePrice
            courseDuration: $courseDuration
            totalSections: $totalSections
            totalTopics: $totalTopics
            skillsLearned1: $skillsLearned1
            skillsLearned2: $skillsLearned2
            skillsLearned3: $skillsLearned3
            skillsLearned4: $skillsLearned4
            toolsUsed1: $toolsUsed1
            toolsUsed2: $toolsUsed2
            toolsUsed3: $toolsUsed3
            toolsUsed4: $toolsUsed4
            toolsUsedImg1: $toolsUsedImg1
            toolsUsedImg2: $toolsUsedImg2
            toolsUsedImg3: $toolsUsedImg3
            toolsUsedImg4: $toolsUsedImg4
        ) {
            id
            coursePrice
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
`

const FIND_ALL_COURSE_ADDITIONAL = gql`
    query {
        findAllAdditionalCourse {
            id
            coursePrice
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
`
