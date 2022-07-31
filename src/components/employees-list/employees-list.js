import EmployeesListItem from '../employees-list-item/employees-list-item';
import "./employees-list.css";

const EmployeesList = () => {
    return (
        <ul className="app-list list-group">
            <EmployeesListItem name="Steaphen King" salary={300} /> {/* props устанавливаем тут, выводим на стр в ...list-item.js */}
            <EmployeesListItem name="Vladimir Kopylov" salary={500} />
            <EmployeesListItem name="Elton John" salary={1200} />
        </ul>
    )
}

export default EmployeesList;