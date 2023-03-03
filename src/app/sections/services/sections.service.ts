import { Injectable } from '@angular/core'
import { Apollo, gql } from 'apollo-angular'
import { map, tap } from 'rxjs/operators'

import { Section } from '../model/section.model'

import { CreatSectionDTO } from '../model/create-section.dto'
import { UpdateSectionDTO } from '../model/update-section.dto'

@Injectable({ providedIn: 'root' })
export class SectionService {
    constructor(private apollo: Apollo) {}

    getSections() {
        const sectionsData = this.apollo
            .watchQuery<any>({
                query: GET_SECTIONS,
            })
            .valueChanges.pipe(
                map((result) => result.data.sections),
                tap((d) => console.log('sections', d))
            )

        return sectionsData
    }

    getSectionByCourseId(courseId: any) {
        const sectionData = this.apollo
            .watchQuery<any>({
                query: GET_SECTIONS_BY_COURSEID,
                variables: {
                    courseId,
                },
            })
            .valueChanges.pipe(
                map(
                    (result) =>
                        result.data.findSectionByCourseId
                ),
                tap((d) =>
                    console.log('findSectionByCourseId', d)
                )
            )

        return sectionData
    }

    getSection(sectionId: any) {
        const sectionData = this.apollo
            .watchQuery<any>({
                query: GET_SECTION,
                variables: {
                    sectionId,
                },
            })
            .valueChanges.pipe(
                map((result) => result.data.section)
                // tap(d => console.log('getProject', d))
            )

        return sectionData
    }

    createSection(creatSectionDTO: CreatSectionDTO) {
        const {
            courseId,
            sectionName,
            sectionIntroduction,
        } = creatSectionDTO
        return this.apollo.mutate<any>({
            mutation: CREATE_SECTION,
            variables: {
                courseId,
                sectionName,
                sectionIntroduction,
            },
            refetchQueries: [
                {
                    query: GET_SECTIONS,
                },
            ],
        })
    }

    updateSection(id: any, section: Partial<Section>) {
        const { sectionName, sectionIntroduction } = section

        return this.apollo.mutate<any>({
            mutation: UPDATE_SECTION,
            variables: {
                sectionId: id,
                sectionName,
                sectionIntroduction,
            },
            refetchQueries: [
                {
                    query: GET_SECTIONS,
                },
            ],
        })
    }

    deleteSection(sectionId: any) {
        return this.apollo.mutate<any>({
            mutation: DELETE_SECTION,
            variables: {
                sectionId,
            },
            refetchQueries: [
                {
                    query: GET_SECTIONS,
                },
            ],
        })
    }

    deleteSectionByCourse(sectionId: any) {
        return this.apollo.mutate<any>({
            mutation: DELETE_SECTION,
            variables: {
                sectionId,
            },
            refetchQueries: [
                {
                    query: GET_SECTIONS,
                },
            ],
        })
    }
}

export const GET_SECTIONS = gql`
    query {
        sections {
            id
            created
            sectionName
            sectionIntroduction
        }
    }
`

export const GET_SECTION = gql`
    query section($sectionId: String!) {
        section(sectionId: $sectionId) {
            id
            sectionName
            sectionIntroduction
        }
    }
`

export const GET_SECTIONS_BY_COURSEID = gql`
    query findSectionByCourseId($courseId: String!) {
        findSectionByCourseId(courseId: $courseId) {
            id
            sectionName
            sectionIntroduction
        }
    }
`
export const CREATE_SECTION = gql`
    mutation createSection(
        $courseId: String!
        $sectionName: String!
        $sectionIntroduction: String!
    ) {
        createSection(
            creatSectionDTO: {
                courseId: $courseId
                sectionName: $sectionName
                sectionIntroduction: $sectionIntroduction
            }
        ) {
            id
            sectionName
            sectionIntroduction
        }
    }
`
export const UPDATE_SECTION = gql`
    mutation updateSection(
        $sectionId: String!
        $sectionName: String!
        $sectionIntroduction: String!
    ) {
        updateSection(
            updatedSectionDTO: {
                sectionId: $sectionId
                sectionName: $sectionName
                sectionIntroduction: $sectionIntroduction
            }
        ) {
            id
            sectionName
            sectionIntroduction
        }
    }
`

export const DELETE_SECTION = gql`
    mutation deleteSection($sectionId: String!) {
        deleteSection(sectionId: $sectionId)
    }
`
