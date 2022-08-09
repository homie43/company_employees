import { Component } from 'react';
import './search-panel.css';

class SaerchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    // локальный метод
    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term); // поднимаю proprty выше по иерархии, то есть поднимаю локальное состояние родителю
    }

    render () {
        return (
            <input type="text"
                    className='form-control search-input'
                    placeholder='Найти сотрудника' 
                    value={this.state.term}
                    onChange={this.onUpdateSearch}/>
        )
    }
}

export default SaerchPanel;