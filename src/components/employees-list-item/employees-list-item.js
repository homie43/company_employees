import { Component } from 'react';
import './employees-list-item.css';

// переделал функциональный компонент в классовый, для работы с состоянием
class EmployeesListItem extends Component { // получаем данные из EmployeesList, деструктуризируем пропс, помещаем на страницу
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            like: false
        }
    }

    inCrease = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }))
    }

    onLike = () => {
        this.setState(({like}) => ({
            like: !like
        }))
    }

    render() {

        const {name, salary, onDelete} = this.props; // пропс onDelete из EmployeesList, вешаем обработчик на кнопку корзины ниже
        const {increase} = this.state,
              {like} = this.state;


        const classIncrease = increase ? ' increase' : "";
        const classLike = like ? ' like' : "";
    
        return (
            <li className={"list-group-item d-flex justify-content-between" + classIncrease + classLike}>
                <span className="list-group-item-label" onClick={this.onLike}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + "$"}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button" /* иконка куки */
                        className="btn-cookie btn-sm "
                        onClick={this.inCrease}>
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
}

export default EmployeesListItem;