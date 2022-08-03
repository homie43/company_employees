import { toHaveValue } from '@testing-library/jest-dom/dist/matchers';
import { Component } from 'react';
import './employees-list-item.css';

// переделал функциональный компонент в классовый, для работы с состоянием
class EmployeesListItem extends Component { // получаем данные из EmployeesList, деструктуризируем пропс, помещаем на страницу
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
        }
    }

    inCrease = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }))
    }

    render() {

        const {name, salary} = this.props;
        // теперь increase должен приходить не из props, а из state
        const {increase} = this.state;

        const classIncrease = increase ? 'increase' : "";
    
        return (
            <li className={"list-group-item d-flex justify-content-between " + classIncrease}>
                <span className="list-group-item-label">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + "$"}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button" /* иконка куки */
                        className="btn-cookie btn-sm "
                        onClick={this.inCrease}>
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
}

export default EmployeesListItem;