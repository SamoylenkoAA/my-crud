import React from 'react'
import Pagination from "../../component/Pagination";
import Input from "../../component/UI/Input";
import Button from "../../component/UI/Button";

const Table = ({users, total, currentPage, numberOfButtons, usersPerPage, onChange, onHandlerSort}) => {

    return(
        <>
            <Input
                type="text"
                placeholder="Введите имя"
                onChange={onHandlerSort}
            />
            <div className="col-12 mt-3" >
                <table className="table table-striped table-hover">
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>Имя</th>
                        <th>Возрост</th>
                        <th>Дата приема</th>
                        <th>Должность</th>
                        <th>Редактировать</th>

                    </tr>
                    </thead>
                    <tbody>
                    {
                        users.map(user =>
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.hiringDate}</td>
                                <td>{user.position}</td>
                                <td>
                                    <Button title="Редактировать" id={user.id}/>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
            <Pagination
                total={total}
                currentPage={currentPage}
                numberOfButtons={numberOfButtons}
                usersPerPage={usersPerPage}
                onChange={(number) => onChange  (number)}
            />
        </>
    )
}

export default Table