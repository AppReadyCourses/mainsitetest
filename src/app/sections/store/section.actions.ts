import { createAction, props } from '@ngrx/store'
import { Update } from '@ngrx/entity'

import { Section } from '../model/section.model'
import { CreatSectionDTO } from '../model/create-section.dto'

// Load Sections
export const loadSections = createAction(
    '[Section List Component] Load multiple Sections',
    props<{ id: string }>()
)
export const loadSectionsSuccess = createAction(
    '[Section List Component] Load Sections Success',
    props<{ sections: Section[] }>()
)

export const loadSectionsFailure = createAction(
    '[Section List Component] Load Sections Failure',
    props<{ error: any }>()
)

// Load Section
export const loadSection = createAction(
    '[Section List Component] Load Single Section',
    props<{ id: string }>()
)
export const loadSectionSuccess = createAction(
    '[Section List Component] Load Single Section Success',
    props<{ section: Section }>()
)
export const loadSectionFailure = createAction(
    '[Section List Component] Load Single Section Failure',
    props<{ error: any }>()
)

// Load Section by CourseId
export const loadSectionByCourse = createAction(
    '[Section List Component] Load Sections By CourseId',
    props<{ id: string }>()
)
export const loadSectionByCourseSuccess = createAction(
    '[Section List Component] Load Sections By CourseId Success',
    props<{ sections: Section[] }>()
)
export const loadSectionByCourseFailure = createAction(
    '[Section List Component] Load Sections By CourseId Failure',
    props<{ error: any }>()
)

// Create Section
export const createSection = createAction(
    '[Section List Component] Create Section',
    props<{ section: CreatSectionDTO }>()
)
export const createSectionSuccess = createAction(
    '[Section List Component] Create Section Success',
    props<{ section: Section }>()
)
export const createSectionFailure = createAction(
    '[Section List Component] Create Section Failure',
    props<{ error: any }>()
)

// Delete Section from entire State

export const deleteSection = createAction(
    '[Section List Component] Delete Section',
    props<{ id: string }>()
)
export const deleteSectionSuccess = createAction(
    '[Section List Component] Delete Section Success',
    props<{ id: string }>()
)
export const deleteSectionFailure = createAction(
    '[Section List Component] Delete Section Failure',
    props<{ error: any }>()
)

// Delete Section from One Course
export const deleteSectionFromCourse = createAction(
    '[Section API Delete] Delete Section From Course',
    props<{ id: string }>()
)
export const deleteSectionFromCourseSuccess = createAction(
    '[Section API Delete] Delete Section From Course Success',
    props<{ id: string }>()
)
export const deleteSectionFromCourseFailure = createAction(
    '[Section API Delete] Delete Section From Course Failure',
    props<{ error: any }>()
)

// Edit Section

export const editSection = createAction(
    '[Section List Component] Edit Section',
    props<{ section: Update<Section> }>()
)
export const editSectionSuccess = createAction(
    '[Section List Component] Edit Section Success',
    props<{ section: Section }>()
)
export const editSectionFailure = createAction(
    '[Section List Component] Edit Section Failure',
    props<{ error: any }>()
)
