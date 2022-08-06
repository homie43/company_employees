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
    }
    
    // метод по иерархии идет на самый низ (в EmployeesListItem) и вызывается по клику на корзину
    deleteItem = (id) => {
        this.setState(({data}) => {
            // алгоритм удаления: 1) получаем элемент(сотрудника) по id; 2) по id ищем нужный объект(то есть индекс) внутри массива data 3) создаем копию массива и перерисовываем приложение
            
            // const index = data.findIndex(element => element.id === id); // сравниваем id кадого element(это каждый объект внутри data) с id который приходит от deleteItem
            // const before = data.slice(0, index); // копируем data с 1 элемента, до элемента, который нашли(index) 
            // const after = data.slice(index + 1);
            // // создали кусочка массива, которые содержат половинки старого массива, только без искомого эллемента
            
            // const newArrow = [...before, ...after]; // создаем новый массив содержаший before и after

            // короткий способ, внутри return
            return {
                data: data.filter(item => item.id !== id)
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
                <EmployeesAddForm/>
            </div>
        );
    }
}

export default App;