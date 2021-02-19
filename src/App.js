import React, {useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Wrapper from "./HOC/wrapper";
import Table from "./containers/Table";


import {data} from './json'
import {currentUsers} from './containers/Table/handler'
import User from "./containers/User";

const App = () => {
    const [users, setUsers] = useState(data);
    const [copyUsers, setCopyUsers] = useState(data);
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 5;
    const numberOfButtons =10;
    const currentArray = currentUsers({currentPage, usersPerPage, copyUsers})

    const handlerNewCurrentPage = (num) => {
        setCurrentPage(prevState => num)
    }
   const onHandlerSort = (e) => {
        let value = e.target.value.trim();

        let newUsers = users.filter(user => {
            return user['name'].toLowerCase().includes(value.toLowerCase())
        })
       setCopyUsers(prevState => newUsers)
   }
   const handlerEdit = (params) =>{
       let newUsers = [...users]
       setCopyUsers(prevState => {
            let index = newUsers.findIndex(user => user.id === params.id);
            newUsers[index] = params

            return [
                ...newUsers,
            ]
        })
       setUsers(prevState => newUsers)
   }
    return(
        <Router>
            <Switch>
                <Wrapper>
                    <Route path="/" exact>
                        <Table
                            users={currentArray}
                            total={copyUsers.length}
                            currentPage={currentPage}
                            usersPerPage={usersPerPage}
                            numberOfButtons={numberOfButtons}
                            onChange={(number) => handlerNewCurrentPage(number)}
                            onHandlerSort={(event) => onHandlerSort(event)}
                        />
                    </Route>
                    <Route path="/user/:some" exact>
                        <User
                            users={currentArray}
                            handlerEdit={(params) => handlerEdit(params)}
                        />

                    </Route>
                </Wrapper>
            </Switch>
        </Router>
    )
}

export default App