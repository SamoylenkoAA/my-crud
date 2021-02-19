import React from 'react'
import {Link} from 'react-router-dom'

const Button = ({title,id}) => {
    return(
        <>
            <Link to={`/user/${id}`}>{title}</Link>
        </>
    )
}

export default Button