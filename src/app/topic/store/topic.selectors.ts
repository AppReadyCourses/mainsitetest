import {
    createFeatureSelector,
    createSelector,
} from '@ngrx/store'
import {
    topicFeatureKey,
    TopicState,
    selectAll,
} from './topic.reducer'

export const selectTopicState =
    createFeatureSelector<TopicState>(topicFeatureKey)

export const selectTopics = createSelector(
    selectTopicState,
    selectAll
    // (state: SectionState) => state.sections
)
export const selectTopic = createSelector(
    selectTopicState,
    // selectAll
    (state: TopicState) => state.topic
)

export const selectTopicsBySection = createSelector(
    selectTopicState,
    selectAll
)

export const selectTopicAfterStatusChanged = createSelector(
    selectTopicState,
    // selectAll
    (state: TopicState) => state.topicStatusChanged
)
export const selectTopicCompletedStatus = createSelector(
    selectTopicState,
    // selectAll
    (state: TopicState) => state.topicCompleted
)

export const selectAddedTopic = createSelector(
    selectTopicState,
    // selectAll
    (state: TopicState) => state.addedTopic
)

// export const combineAddedTopicAndLoadTopisSelector =
//     createSelector(
//         selectTopicsBySection,
//         selectAddedTopic,
//         (list, add) => {
//             console.log('a and b', list, add)

//             let newArr: any = []
//             if (add) {
//                 newArr = [...list, add]
//                 console.log('newarr 2', newArr)
//                 return newArr
//             }
//             if (list) {
//                 newArr = [...list]
//                 console.log('newarr 1', newArr)
//                 return newArr
//             }
//         }
//     )
