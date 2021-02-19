export const currentUsers = (params) => {
    const {
        currentPage,
        usersPerPage,
        copyUsers
    } = params

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = copyUsers.slice(indexOfFirstUser, indexOfLastUser)

    return currentUsers;
}
