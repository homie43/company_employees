import { Component } from 'react';
import './employees-add-form.css';


// перепишу компонент в классовый
class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //2 состояния: имя сотрудника, сумма денег
            name: '',
            salary: ''
        }
    }

    // 1 метод на два инпута 
    onValueChange = (e) => {
        this.setState({ // без callback, тк не важно что было введено ранее
            [e.target.name]: e.target.value,
            // [e.target.salary]: e.target.value
        })
    } 

    // добавим атрибуты инпутам name и salary
    render() {
        const {name, salary} = this.state;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form 
                    className="add-form d-flex">
                        <input type="text"
                            className="form-control new-post-label"
                            placeholder="Как его зовут?" 
                            name="name"
                            value={name} // если нужно чтобы реакт компонент рендерил форму и контролировал ее поведение в ответ на пользователский ввод, то атрибут value необходим, туда помещаем значение state
                            onChange={this.onValueChange}/>
                        <input type="number"
                            className="form-control new-post-label"
                            placeholder="З/П в $?"
                            name="salary" 
                            value={salary}
                            onChange={this.onValueChange}/>
    
                        <button type="submit"
                            className="btn btn-outline-light">Добавить
                        </button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;