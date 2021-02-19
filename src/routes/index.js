import Table from '../containers/Table'
import User from '../containers/User'

let routes = [
    {
        name: 'home',
        url: '/',
        component: Table,
        exact: true
    },
    {
        name: 'user',
        url: '/user/:some',
        component: User,
        exact: true
    }
];

export default routes