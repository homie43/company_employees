// ипорт базовых компонентов, сторонних библиотек
import { Component } from 'react';
// импорт компонентов
import AppInfo from '../app-info/app-info';
import SaerchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
// импорт стилей
import './app.css';

// переделаем компонент в классовый, для работы со state
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // имитируем get запрос с сервера для теста пропсов
            data: [
                {name: "Steaphen King", salary: 300, like: false, increase: false, id: 1}, // добавил id для проработки аогрритма согласования (reconciliation)
                {name: "Vladimir Kopylov", salary: 500, like: false, increase: false, id: 2},
                {name: "Elton John", salary: 1500, like: false, increase: false, id: 3}
            ]
        }
        this.maxId = 4; // это значение необходимо для новых сотрудников, что бы увеличивался их id
    }
    
    // метод по иерархии идет на самый низ (в EmployeesListItem) и вызывается по клику на корзину
    deleteItem = (id) => {
        this.setState(({data}) => {
            // алгоритм удаления: 1) получаем элемент(сотрудника) по id; 2) по id ищем нужный объект(то есть индекс) внутри массива data 3) создаем копию массива и перерисовываем приложение

            // короткий способ, внутри return
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    // добавление нового объекта в массив 
    addItem = (name, salary) => {
        // алгоритм добавления: 1) создаем newItem, он содержит объект с нужными атрибутами; 2) изменяем состояние: то есть возвращаем новый data, который содержит часть предыдущего data и новый объект; 3) не забываем передать в компонент EmployeesAddForm нашу функцию; 4) в EmployeesAddForm прописываем onSubmit - это обработчик события на form
        const newItem = {
            name,
            salary,
            like: false,
            increase: false,
            id: this.maxId++ // не забываем увеличивать id
        }
        this.setState(({data}) => {
            return {
                data: [...data, newItem]
            }
        })
    }


    render() {
        return (
            <div className="app">
                <AppInfo/>

                <div className="search-panel">
                    <SaerchPanel/>

                    <AppFilter/>
                </div>

                <EmployeesList 
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    /> {/* передаю в компонент массив с данными */}
                <EmployeesAddForm onAdd={this.addItem}/> {/* не забывай передать в компонент */}
            </div>
        );
    }
}

export default App;