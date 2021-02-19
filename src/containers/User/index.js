import React, {useState, useEffect} from 'react'
import {useRouteMatch, useHistory} from 'react-router-dom'
import Input from "../../component/UI/Input";

const User = ({users, handlerEdit}) => {
    const {params} = useRouteMatch();
    const history = useHistory();
    const user = users.find(user => user.id === params.some)

    const [disabled, setDisabled] = useState(false)
    const [array, setArray] = useState({
        id: params.some,
        name: user.name,
        age: user.age,
        hiringDate: user.hiringDate,
        position: user.position,
    })

    useEffect(() => {
        handlerDisabled()
    })

    const handlerChange = (e) => {
        setArray(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value.trim()
            }
        })

    }

    const handlerSubmit = (e) => {
        e.preventDefault();
        handlerEdit(array)
        history.push("/");
    }

    const handlerDisabled = () =>{
        const bool = Object.values(array).every(item => item !== "");
        setDisabled(prevState => !bool)
    }

    const {name, age, hiringDate, position} = array;
    return(
        <form className="mt-5" onSubmit={handlerSubmit}>
            <div className="mb-3">
                <label className="form-label">Имя</label>
                <Input
                    className="form-control"
                    type="text"
                    name="name"
                    value={name}
                    onChange={handlerChange}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Возрост</label>
                <Input
                    className="form-control"
                    type="number"
                    name="age"
                    value={age}
                    onChange={handlerChange}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Дата приема</label>
                <Input
                    className="form-control"
                    type="text"
                    name="hiringDate"
                    value={hiringDate}
                    onChange={handlerChange}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Должность</label>
                <Input
                    className="form-control"
                    type="text"
                    name="position"
                    value={position}
                    onChange={handlerChange}
                />
            </div>
            <button type="submit" className="btn btn-primary" disabled={disabled}>Редактировать</button>
        </form>
    )
}

export default User