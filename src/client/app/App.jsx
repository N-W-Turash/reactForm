import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            selectedOption: '',
            text: '',
            selectVal: 'jQuery',
            checked: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleCheckedChange = this.handleCheckedChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value.toUpperCase()});
    }

    handleMessageChange(event) {
        this.setState({text: event.target.value});
    }

    handleOptionChange(changeEvent) {
        this.setState({
            selectedOption: changeEvent.target.value
        });
    }

    handleSelectChange(event) {
        this.setState({checkVal: event.target.value});
    }

    handleCheckedChange() {
        this.setState({checked: !this.state.checked});
    }


    handleSubmit(event) {
        console.log(this.state.selectedOption === 'male' ? 'Hello Mr. '+ this.state.value : 'Hello Miss '+ this.state.value);
        console.log('Your message: ', this.state.text);
        console.log('So you like ', this.state.selectVal);
        event.preventDefault();
    }

    render() {

        return (
            <div>
                <h1>React Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <br />
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>

                    <br/><br />
                    <label>
                        Message:
                        <br />
                        <textarea value={this.state.text} onChange={this.handleMessageChange} />
                    </label>
                    <br/><br />
                    <div className="radio">
                        <label>
                            <input type="radio" value="male" checked={this.state.selectedOption === 'male'} onChange={this.handleOptionChange} />
                            Male
                        </label>
                        <label>
                            <input type="radio" value="female" checked={this.state.selectedOption === 'female'} onChange={this
                                .handleOptionChange}/>
                            Female
                        </label>
                    </div>
                    <br />
                    <label>
                        Pick a Technology:
                        <select id="select" value={this.state.selectVal} onChange={this.handleSelectChange}>
                            <option value="jquery">jQuery</option>
                            <option value="angular js">Angular JS</option>
                            <option value="amber js">Amber JS</option>
                            <option value="react js">React JS</option>
                        </select>
                    </label>
                    <br /><br />
                    <input type="checkbox" name="" value="agree" checked={this.state.checked} onChange={this.handleCheckedChange}/> I agree to the
                    terms and conditions<br />
                    <div><input type="submit" value="Submit"  disabled={!this.state.value || !this.state.text || !this.state
                        .selectedOption || !this.state.checked}/></div>
                </form>
            </div>
        );
    }
}

export default App;