import React from 'react'
import './AppWrapper.css'

const AppWrapper = (props) => {
    return(
        <div className='app_content'>{props.children}</div>
    )
}

export default AppWrapper;