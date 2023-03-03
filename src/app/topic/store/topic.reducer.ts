import {
    createEntityAdapter,
    EntityAdapter,
    EntityState,
} from '@ngrx/entity'
import { Action, createReducer, on } from '@ngrx/store'

import { Topic } from '../model/topic.model'

import * as TopicAction from './topic.actions'

export const topicFeatureKey = 'topics'

export interface TopicState extends EntityState<Topic> {
    error: any
    topic: any
    topicBySection: any
    topicStatusChanged: any
    topicCompleted: any
    addedTopic: any
}

export const adapter: EntityAdapter<Topic> =
    createEntityAdapter<Topic>()

export const initialState: TopicState =
    adapter.getInitialState({
        // additional entity state properties
        error: undefined,
        topic: undefined,
        topicBySection: undefined,
        topicStatusChanged: undefined,
        topicCompleted: undefined,
        addedTopic: undefined,
    })

export const topicReducer = createReducer(
    initialState,
    on(TopicAction.loadTopicsSuccess, (state, action) =>
        adapter.setAll(action.topics, state)
    ),
    on(TopicAction.loadTopicsFailure, (state, action) => {
        return {
            ...state,
            error: action.errors,
        }
    }),
    on(TopicAction.loadTopicSuccess, (state, action) => {
        return {
            ...state,
            topic: action.topic,
        }
    }),
    on(TopicAction.loadTopicFailure, (state, action) => {
        return {
            ...state,
            error: action.errors,
        }
    }),
    on(
        TopicAction.loadTopicsBySectionSuccess,
        (state, action) =>
            // {
            //     return {
            //         ...state,
            //         topicBySection: action.topics,
            //     }
            // }

            adapter.setAll(action.topics, state)
    ),
    on(
        TopicAction.loadTopicsBySectionFailure,
        (state, action) => {
            return {
                ...state,
                error: action.errors,
            }
        }
    ),
    on(
        TopicAction.changeModificationStatusSuccess,
        (state, action) => {
            return {
                ...state,
                topicStatusChanged: action.topic,
            }
        }
    ),
    on(
        TopicAction.changeModificationStatusFailure,
        (state, action) => {
            return {
                ...state,
                error: action.errors,
            }
        }
    ),
    on(
        TopicAction.changeTopicCompletedSuccess,
        (state, action) => {
            return {
                ...state,
                topicCompleted: action.topic,
            }
        }
    ),
    on(
        TopicAction.changeTopicCompletedFailure,
        (state, action) => {
            return {
                ...state,
                error: action.errors,
            }
        }
    ),
    on(TopicAction.addOneTopicSuccess, (state, action) =>
        adapter.addOne(action.topicId, state)
    ),
    on(TopicAction.addOneTopicFailure, (state, action) => {
        return {
            ...state,
            error: action.errors,
        }
    }),
    on(TopicAction.deleteOneTopicSuccess, (state, action) =>
        adapter.removeOne(action.topicId, state)
    ),
    on(
        TopicAction.deleteOneTopicFailure,
        (state, action) => {
            return {
                ...state,
                error: action.errors,
            }
        }
    )
)

export function reducer(
    state: TopicState | undefined,
    action: Action
) {
    return topicReducer(state, action)
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors()
