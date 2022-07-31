import AppInfo from '../app-info/app-info';
import SaerchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';


function App() {

    // имитируем get запрос с сервера для теста пропсов
    const data = [
        {name: "Steaphen King", salary: 300},
        {name: "Vladimir Kopylov", salary: 500},
        {name: "Elton John", salary: 1500}
    ];

    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SaerchPanel/>

                <AppFilter/>
            </div>

            <EmployeesList data={data}/> {/* передаю в компонент массив с данными */}
            <EmployeesAddForm/>
        </div>
    );
}

export default App;