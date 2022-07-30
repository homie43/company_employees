import AppInfo from '../app-info/app-info';
import SaerchPanel from '../search-panel/search-panel';

import './app.css';


function App() {
    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SaerchPanel/>
            </div>
        </div>
    );
}

export default App;