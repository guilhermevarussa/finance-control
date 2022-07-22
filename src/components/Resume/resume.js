import React from 'react'
import ResumeItem from '../ResumeItem/resumeItem'
import * as C from "./resume-styles"

const Resume = () => {
    return (
        <C.Container>
            <ResumeItem />
            <ResumeItem />
            <ResumeItem />
        </C.Container>
    )
}

export default Resume