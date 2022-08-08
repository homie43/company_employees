import './app-info.css'

const AppInfo = ({data}) => {
    const like = data.filter(item => item.like === true)
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании АО Рога и Копыта</h1>
            <h2>Общее число сотрудников: {data.length}</h2>
            <h2>Премию получат: {like.length}</h2>
        </div>
    );
}

export default AppInfo;