import './employees-list-item.css';

const EmployeesListItem = ({name, salary, increase}) => { // получаем данные из EmployeesList, деструктуризируем пропс, помещаем на страницу

    const classIncrease = increase ? 'increase' : "";

    return (
        <li className={"list-group-item d-flex justify-content-between " + classIncrease}>
            <span className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + "$"}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button" /* иконка куки */
                    className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button" /* иконка корзина */
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;