import { Injectable } from '@angular/core'
import { Apollo, gql } from 'apollo-angular'
import { map, tap } from 'rxjs/operators'

@Injectable({ providedIn: 'root' })
export class TopicService {
    constructor(private apollo: Apollo) {}

    addOneTopic(
        sectionId: any,
        topicName: string,
        topicIntroduction: string,
        modificationTouched: boolean,
        topicCompleted: boolean,
        topicDuration: number
    ) {
        console.log(
            'add one topic runs',
            sectionId,
            topicName,
            topicIntroduction,
            modificationTouched,
            topicCompleted,
            topicDuration
        )
        return this.apollo.mutate<any>({
            mutation: ADD_ONE_TOPIC,
            variables: {
                sectionId,
                topicName,
                topicIntroduction,
                modificationTouched,
                topicCompleted,
                topicDuration,
            },
            refetchQueries: [
                {
                    query: GET_TOPICS,
                },
            ],
        })
    }

    getTopics() {
        return this.apollo
            .watchQuery<any>({
                query: GET_TOPICS,
                fetchPolicy: 'no-cache',
            })
            .valueChanges.pipe(
                map((result) => result.data.topics),
                tap((d) =>
                    console.log('getTopics - service', d)
                )
            )
    }
    getTopic(topicId: any) {
        return this.apollo
            .watchQuery<any>({
                query: GET_TOPIC,
                variables: {
                    topicId,
                },
                fetchPolicy: 'no-cache',
            })
            .valueChanges.pipe(
                map((result) => result.data.topic),
                tap((d) =>
                    console.log('getTopic - service', d)
                )
            )
    }

    getTopicsBySection(sectionId: any) {
        return this.apollo
            .watchQuery<any>({
                query: GET_TOPICS_BY_SECTION,
                variables: {
                    sectionId,
                },
                fetchPolicy: 'no-cache',
            })
            .valueChanges.pipe(
                map(
                    (result) =>
                        result.data.findTopicBySection
                ),
                tap((d) =>
                    console.log(
                        'findTopicBySection - service',
                        d
                    )
                )
            )
    }

    changeModificationStatus(topicId: any) {
        return this.apollo.mutate<any>({
            mutation: CHANGE_MODIFICATION_STATUS,
            variables: {
                topicId,
            },
            refetchQueries: [
                {
                    query: GET_TOPICS,
                },
            ],
        })
    }

    changeTopicCompleted(topicId: any) {
        return this.apollo.mutate<any>({
            mutation: CHANGE_TOPIC_COMPLETED,
            variables: {
                topicId,
            },
            refetchQueries: [
                {
                    query: GET_TOPICS,
                },
            ],
        })
    }

    deleteOneTopic(topicId: any) {
        return this.apollo.mutate<any>({
            mutation: DELETE_ONE_TOPIC,
            variables: {
                topicId,
            },
            refetchQueries: [
                {
                    query: GET_TOPICS,
                },
            ],
        })
    }
}

export const GET_TOPICS = gql`
    query {
        topics {
            id
            topicName
            topicIntroduction
            modification
            modificationTouched
            topicCompleted
            topicDuration
        }
    }
`
export const GET_TOPIC = gql`
    query topic($topicId: String!) {
        topic(topicId: $topicId) {
            id
            topicName
            topicIntroduction
            modification
            modificationTouched
            topicCompleted
            topicDuration
        }
    }
`

export const GET_TOPICS_BY_SECTION = gql`
    query findTopicBySection($sectionId: String!) {
        findTopicBySection(sectionId: $sectionId) {
            id
            topicName
            topicIntroduction
            modification
            modificationTouched
            topicCompleted
            topicDuration
        }
    }
`
export const CHANGE_MODIFICATION_STATUS = gql`
    mutation changeModificationStatus($topicId: String!) {
        changeModificationStatus(topicId: $topicId) {
            id
            topicName
            topicIntroduction
            modificationTouched
            topicCompleted
        }
    }
`
export const CHANGE_TOPIC_COMPLETED = gql`
    mutation changeTopicCompleted($topicId: String!) {
        changeTopicCompleted(topicId: $topicId) {
            id
            topicName
            topicIntroduction
            modificationTouched
            topicCompleted
        }
    }
`

const ADD_ONE_TOPIC = gql`
    mutation createTopic(
        $sectionId: String!
        $topicName: String!
        $topicIntroduction: String!
        $modificationTouched: Boolean!
        $topicCompleted: Boolean!
        $topicDuration: Float!
    ) {
        createTopic(
            createTopicDto: {
                sectionId: $sectionId
                topicName: $topicName
                topicIntroduction: $topicIntroduction
                modificationTouched: $modificationTouched
                topicCompleted: $topicCompleted
                topicDuration: $topicDuration
            }
        )
    }
`
const DELETE_ONE_TOPIC = gql`
    mutation deleteTopic($topicId: String!) {
        deleteTopic(topicId: $topicId)
    }
`
