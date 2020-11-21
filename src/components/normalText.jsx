import React from 'react'
import { Title, Description } from './styledTags'

const NormalTitle = (props) => {
    const titleText = props.title
    const descriptionText = props.description
    return (
        <>
            <Title>{titleText}</Title>
            <Description>{descriptionText}</Description>
        </>
    )
}

export default NormalTitle