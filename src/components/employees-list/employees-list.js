import EmployeesListItem from '../employees-list-item/employees-list-item';
import "./employees-list.css";

const EmployeesList = ({data}) => { // компонент принимает данные data из app.js

    // переберем каждый элемент массива data(это объекты с свойствами name и salary)
    const elements = data.map(item => {
        const {id, ...itemProps} = item; // проработка алгоритма согласования, в компонент добавлю key
        return (
            <EmployeesListItem key ={id} {...itemProps}  /> // тут назначаются пропсы, далее они идут в EmployeesListItem
        );
    });

    return (
        <ul className="app-list list-group">
            {/* в elements находится новый(map вовзращает новый массив) массив с компонентами EmployeesListItem */}
            {elements} {/* выводим нашу переменну на страницу */}
        </ul>
    )
}

export default EmployeesList;