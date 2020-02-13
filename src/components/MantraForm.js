import React from 'react';

export default class MantraForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }
    render() {
        return (
            <div>
                <form>
                    <input 
                        onChange={this._handleChange}
                        value={this.state.text} 
                    />
                </form>
            </div>
        )
    }

    _handleChange = (event) => {
        this.setState({
            text: event.target.value
        });
    }
}