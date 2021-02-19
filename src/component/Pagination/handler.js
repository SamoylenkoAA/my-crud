export const createPagination = (params) => {
    let pagination = [];
    const {
        currentPage,
        numberOfButtons,
        total,
        usersPerPage
    } = params;

    // количество кнопок на странице
    const numberOfPage = Math.ceil(total / usersPerPage);

    if(currentPage > numberOfPage || currentPage < 1)
        return {
            pagination,
            currentPage
        }
    // заполняем массив buttons [1 до numberOfPage]
    const buttons = Array(numberOfPage)
        .fill(1)
        .map((i, num) => i + num);
    const sideButtons = numberOfPage % 2 === 0
        ? numberOfButtons / 2
        : (numberOfButtons - 1) /2;

    const calculLeft = (rest = 0) => {
        return{
            array: buttons
                .slice(0, currentPage - 1)
                .reverse()
                .slice(0, sideButtons + rest)
                .reverse(),
            rest: function (){
                return sideButtons - this.array.length
            }
        }
    }
    const calculRight = (rest = 0) => {
        return{
            array: buttons.slice(currentPage).slice(0, sideButtons + rest),
            rest: function (){
                return sideButtons - this.array.length
            }
        }
    }

    const leftButtons = calculLeft(calculRight().rest()).array;
    const rightButtons = calculRight(calculLeft().rest()).array;
    return {
        pagination: [...leftButtons, currentPage, ...rightButtons],
        currentPage
    }
}