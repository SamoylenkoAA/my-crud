import React from 'react'

const Wrapper = ({children}) => {
    return(
        <div className="container-fluid">
            <div className="container">
                <div className="row">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Wrapper;