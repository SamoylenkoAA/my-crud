import React from 'react'

const Input = (props) => {
    return(
        <div className="mb-3 mt-3">
            <input
                className="form-control"
                {...props}
            />
        </div>
    )
}

export default Input