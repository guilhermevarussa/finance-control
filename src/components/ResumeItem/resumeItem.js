import React from 'react'
import * as C from './style-resume'

const ResumeItem = ({ title, Icon, value }) => {
    return (
        <C.ContainerItens>
            <C.Header>
                <C.HeaderTitle>{title}</C.HeaderTitle>
                <Icon />
            </C.Header>
            <C.Total>{value}</C.Total>
        </C.ContainerItens>

    )
}

export default ResumeItem