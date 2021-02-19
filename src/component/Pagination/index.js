import React from 'react'
import PropTypes  from 'prop-types'
import {createPagination} from './handler'

const Pagination = ({total, currentPage, numberOfButtons, usersPerPage, onChange}) => {
    Pagination.propTypes   = {
        total: PropTypes.number.isRequired,
        currentPage: PropTypes.number.isRequired,
        numberOfButtons: PropTypes.number.isRequired,
        usersPerPage: PropTypes.number.isRequired,
        onChange: PropTypes.func.isRequired,
    }
    const {pagination} = createPagination({
        currentPage,
        numberOfButtons,
        total,
        usersPerPage
    })
    return(
        <div className="col-12 mt-3" >
            <nav className="pagination">
                <li className={`page-item ${pagination[0] === currentPage && "disabled"}`}>
                    <button
                        className="page-link "
                       onClick={() => onChange(currentPage - 1)}
                    >
                        <span aria-hidden="true">&laquo;</span>
                    </button>
                </li>
                {
                    pagination.map(number =>
                        <li key={number}  className={`page-item ${currentPage === number && "active"}`}>
                            <button
                                onClick={() => onChange(number)}
                                className="page-link"
                            >
                                {number}
                            </button>
                        </li>
                    )
                }
                <li className={`page-item ${pagination.reverse()[0] === currentPage && "disabled"}`}>
                    <button
                        onClick={() => onChange(currentPage + 1)}
                        className="page-link"
                    >
                        <span aria-hidden="true">&raquo;</span>
                    </button>
                </li>
            </nav>
        </div>
    )
}


export default Pagination