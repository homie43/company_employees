import './app-filter.css';

const AppFilter = (props) => {
    
    // функционал фильтров
    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'like', label: 'Сотрудники на повышение'},
        {name: 'moreThen1000', label: 'Зп больше 1000$'}
    ];
    
    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const classs = active ? "btn-light" : "btn-outline-light";
        return (
            <button type='button' 
                    className={`btn ${classs}`}
                    key={name}
                    onClick={() => props.onUpdateFilter(name)}>
                    {label}
            </button>
        )
    })
    
    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;