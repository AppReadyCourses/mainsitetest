import {
    createFeatureSelector,
    createSelector,
} from '@ngrx/store'
import {
    sectionFeatureKey,
    SectionState,
    selectAll,
} from './section.reducer'

export const selectSectionState =
    createFeatureSelector<SectionState>(sectionFeatureKey)

export const selectSections = createSelector(
    selectSectionState,
    selectAll
    // (state: SectionState) => state.sections
)

export const selectSection = createSelector(
    selectSectionState,
    (state: SectionState) => state.selectedSection
)

export const selectSectionsByCourse = createSelector(
    selectSectionState,
    (state: SectionState) => state.sectionsByCourse
)
