import AppInfo from '../app-info/app-info';
import SaerchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';

import './app.css';


function App() {
    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SaerchPanel/>

                <AppFilter/>
            </div>
        </div>
    );
}

export default App;