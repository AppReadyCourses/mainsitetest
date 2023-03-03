import {
    createEntityAdapter,
    EntityAdapter,
    EntityState,
} from '@ngrx/entity'
import { Action, createReducer, on } from '@ngrx/store'
import { Section } from '../model/section.model'

import * as SectionActions from './section.actions'

export const sectionFeatureKey = 'sections'

export interface SectionState extends EntityState<Section> {
    // additional entities state properties
    error: any
    selectedSection: any
    sections: any
    updateSection: any
    sectionsByCourse: any
}

export const adapter: EntityAdapter<Section> =
    createEntityAdapter<Section>()

export const initialState: SectionState =
    adapter.getInitialState({
        // additional entity state properties
        error: undefined,
        selectedSection: undefined,
        sections: undefined,
        updateSection: undefined,
        sectionsByCourse: undefined,
    })

export const sectionReducer = createReducer(
    initialState,
    on(
        SectionActions.loadSectionsSuccess,
        (state, action) =>
            // adapter.setAll(action.sections, state)
            {
                return {
                    ...state,
                    sections: action.sections,
                }
            }
    ),
    on(
        SectionActions.loadSectionsFailure,
        (state, action) => {
            return {
                ...state,
                error: action.error,
            }
        }
    ),
    on(
        SectionActions.loadSectionSuccess,
        (state, action) => {
            return {
                ...state,
                selectedSection: action.section,
            }
        }
    ),
    on(
        SectionActions.loadSectionFailure,
        (state, action) => {
            return {
                ...state,
                error: action.error,
            }
        }
    ),
    on(
        SectionActions.loadSectionByCourseSuccess,
        (state, action) => {
            return {
                ...state,
                sectionsByCourse: action.sections,
            }
        }
    ),
    on(
        SectionActions.loadSectionByCourseFailure,
        (state, action) => {
            return {
                ...state,
                error: action.error,
            }
        }
    ),
    on(
        SectionActions.createSectionSuccess,
        (state, action) =>
            adapter.addOne(action.section, state)
    ),
    on(
        SectionActions.createSectionFailure,
        (state, action) => {
            return {
                ...state,
                error: action.error,
            }
        }
    ),
    on(
        SectionActions.deleteSectionSuccess,
        (state, action) =>
            // adapter.removeOne(action.id, state)
            {
                const updatedArray =
                    state.sectionsByCourse.filter(
                        (sec: Section) =>
                            sec.id !== action.id
                    )

                // console.log('id to delete', action.id)
                // const array = [...state.sectionsByCourse]
                // console.log('array', array)
                // const removeIndex = array.findIndex(
                //     (item: any) => item.id === action.id
                // )
                // console.log('removeIndex', removeIndex)
                // array.splice(removeIndex, 1)

                return {
                    ...state,
                    sectionsByCourse: updatedArray,
                }
            }
    ),
    on(
        SectionActions.deleteSectionFailure,
        (state, action) => {
            return {
                ...state,
                error: action.error,
            }
        }
    ),
    on(
        SectionActions.deleteSectionFromCourseSuccess,
        (state, action) =>
            // adapter.removeOne(
            //     action.id,
            //     state.sectionsByCourse
            // )
            {
                return {
                    ...state,
                    sectionsByCourse:
                        state.sectionsByCourse.filter(
                            (p: Section) => {
                                // console.log('p', p)
                                return p.id !== action.id
                            }
                        ),
                }
            }
    ),
    on(
        SectionActions.deleteSectionFromCourseFailure,
        (state, action) => {
            return {
                ...state,
                error: action.error,
            }
        }
    ),
    on(SectionActions.editSection, (state, action) =>
        adapter.updateOne(action.section, state)
    ),
    on(
        SectionActions.editSectionSuccess,
        (state, action) => {
            return {
                ...state,
                updateSection: action.section,
            }
        }
    ),
    on(
        SectionActions.editSectionFailure,
        (state, action) => {
            return {
                ...state,
                error: action.error,
            }
        }
    )
)

export function reducer(
    state: SectionState | undefined,
    action: Action
) {
    return sectionReducer(state, action)
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors()
