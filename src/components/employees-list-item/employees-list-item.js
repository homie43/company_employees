import './employees-list-item.css';

// переделал функциональный компонент в классовый, для работы с состоянием
const EmployeesListItem = (props) => { // получаем данные из EmployeesList, деструктуризируем пропс, помещаем на страницу
    // удаляем конструктор со state, и методы onLike, inCrease тк они больше не используются, и возвращаем функциональный компонент
    const {name, salary, increase, like, onDelete, onToggleIncrease, onToggleLike} = props; // пропс onDelete из EmployeesList, вешаем обработчик на кнопку корзины ниже

    const classIncrease = increase ? ' increase' : "";
    const classLike = like ? ' like' : "";

    return (
        <li className={"list-group-item d-flex justify-content-between" + classIncrease + classLike}>
            <span className="list-group-item-label" onClick={onToggleLike}>{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + "$"}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button" /* иконка куки */
                    className="btn-cookie btn-sm "
                    onClick={onToggleIncrease}>
                    <i className="fas fa-cookie"></i>
                </button>


                {/* при клике на корзинку, соответсвующий сотрудник удалится из данных(date), react увидит это изменение и сразу перерисует соответсвующую часть приложения */}
                <button type="button" /* иконка корзина */
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;