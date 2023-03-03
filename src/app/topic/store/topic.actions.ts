import { createAction, props } from '@ngrx/store'
import { Topic } from '../model/topic.model'

// Load topics
export const loadTopics = createAction(
    '[Topic API] Load multiple Topics'
)
export const loadTopicsSuccess = createAction(
    '[Topic API] Load multiple Topics Success',
    props<{ topics: Topic[] }>()
)
export const loadTopicsFailure = createAction(
    '[Topic API] Load multiple Topics Failure',
    props<{ errors: any }>()
)

// Load Topics by section

export const loadTopicsBySection = createAction(
    '[Topic API] Load Topics By Section Id',
    props<{ sectionId: any }>()
)
export const loadTopicsBySectionSuccess = createAction(
    '[Topic API] Load Topics By Section Id Success',
    props<{ topics: Topic[] }>()
)
export const loadTopicsBySectionFailure = createAction(
    '[Topic API] Load Topics By Section Id Failure',
    props<{ errors: any }>()
)

// Load Topic
export const loadTopic = createAction(
    '[Topic API] Load Topic',
    props<{ id: any }>()
)
export const loadTopicSuccess = createAction(
    '[Topic API] Load Topic Success',
    props<{ topic: Topic }>()
)
export const loadTopicFailure = createAction(
    '[Topic API] Load Topic Failure',
    props<{ errors: any }>()
)

// Change Modification Status
export const changeModificationStatus = createAction(
    '[Topic API] Change Modification Status',
    props<{ topicId: any }>()
)
export const changeModificationStatusSuccess = createAction(
    '[Topic API] Change Modification Status Success',
    props<{ topic: Topic }>()
)
export const changeModificationStatusFailure = createAction(
    '[Topic API] Change Modification Status Failure',
    props<{ errors: any }>()
)

// Change Topic Completed
export const changeTopicCompleted = createAction(
    '[Topic API] Change Topic Completed',
    props<{ topicId: any }>()
)
export const changeTopicCompletedSuccess = createAction(
    '[Topic API] Change Topic Completed Success',
    props<{ topic: Topic }>()
)
export const changeTopicCompletedFailure = createAction(
    '[Topic API] Change Topic Completed Failure',
    props<{ errors: any }>()
)

// Add One Topic

export const addOneTopic = createAction(
    '[Topic API] Add One Topic',
    props<{
        sectionId: any
        topicName: string
        topicIntroduction: string
        modificationTouched: boolean
        topicCompleted: boolean
        topicDuration: number
    }>()
)

export const addOneTopicSuccess = createAction(
    '[Topic API] Add One Topic Success',
    props<{ topicId: any }>()
)

export const addOneTopicFailure = createAction(
    '[Topic API] Add One Topic Failure',
    props<{ errors: any }>()
)

// Delete One Topic
export const deleteOneTopic = createAction(
    '[Topic API] Delete One Topic',
    props<{ topicId: any }>()
)
export const deleteOneTopicSuccess = createAction(
    '[Topic API] Delete One Topic Success',
    props<{ topicId: any }>()
)
export const deleteOneTopicFailure = createAction(
    '[Topic API] Delete One Topic Failure',
    props<{ errors: any }>()
)
