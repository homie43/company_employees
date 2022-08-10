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
            ],
            term: '',
            filter: 'all'
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

    // алгоритм: берем объект с которым взимодейтсвет user, делаем копию, поменять в нем свойство, создать новый state, поменять его в компоненте
    // метод изменяет increase на противоположный у сотрудника
    onToggleIncrease = (id) => {
        
        // this.setState(({data}) => {
        //     const index = data.findIndex(elem => elem.id === id);
            
        //     const old = data[index];
        //     const newItem = {...old, increase: !old.increase} // созд новое свойство, которое берет increase, меняет его на противоположное и записывает в newItem[increase]
        //     const newArray = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

        //     return {
        //         data: newArray
        //     }
        // })

        this.setState(({data}) => ({ // объект пеменять напрямую не можем, по этому мы вовзращаем новый объект
            data: data.map(item => { // свойство data: это новый массив data
                if (item.id === id) { // и если совпали id, то значит нашелся нужный объект
                    return {...item, increase: !item.increase} // возращается новый объект, который содержит все старые свойства ...item + increase, который поменялся на противоположный(true)
                }
                return item; // если условие не выполнено, id не равны, то просто возвращаем объект 
                // по итогу получаем массив data с новым измененным объектом
            })
        }))
    }
    
    // метод изменяет like на противоположный у сотрудника
    onToggleLike = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, like: !item.like}
                }
                return item;
            })
        }))
    }

    // метод поиска сотрудника
    searchEmp = (items, term) => { // term строка поиска, items массив для фильтра
        // если строка поика пуста, то data
        if (term.length === 0) {
            return items;
        }
        
        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    
    // функция филтрации
    filterPost = (items, filter) => {
        if (filter === 'like') {
            return items.filter(item => item.like);
        } else if (filter === 'moreThen1000') {
            return items.filter(item => item.salary > 1000);
        } else {
            return items;
        }
    }

    // обработчик
    onUpdateFilter = (filter) => {
        this.setState({filter});
    }

    render() {
        const {data, term, filter} = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter); // два в одном: сначала фильтрация по поиску, затем по табам

        return (
            <div className="app">
                <AppInfo employees={employees} increased={increased}/>

                <div className="search-panel">
                    <SaerchPanel onUpdateSearch={this.onUpdateSearch}/>

                    <AppFilter filter={filter} onUpdateFilter={this.onUpdateFilter}/>
                </div>

                <EmployeesList /* передаю в компонент массив с данными */
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleLike={this.onToggleLike}
                    />
                <EmployeesAddForm onAdd={this.addItem}/> {/* не забывай передать в компонент */}
            </div>
        );
    }
}

export default App;