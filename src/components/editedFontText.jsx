import React from 'react'
import {TitleFont, Description} from './styledTags'

const FontedTitle = (props) => {
    const titleText = props.title
    const descriptionText = props.description
    return (
        <>
            <TitleFont>{titleText}</TitleFont>
            <Description>{descriptionText}</Description>
        </>
    )
}

export default FontedTitle