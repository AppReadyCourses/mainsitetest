export interface Course {
    id?: string
    created?: string
    courseName?: string
    courseIntroduction?: string
    courseType?: string
    courseMainImg?: string
    coursePrice?: any
    courseAdditional?: {
        id?: string
        courseDuration?: string
        totalSections?: number
        totalTopics?: number
        skillsLearned1?: string
        skillsLearned2?: string
        skillsLearned3?: string
        skillsLearned4?: string
        toolsUsed1?: string
        toolsUsed2?: string
        toolsUsed3?: string
        toolsUsed4?: string
        toolsUsedImg1?: string
        toolsUsedImg2?: string
        toolsUsedImg3?: string
        toolsUsedImg4?: string
    }
}
