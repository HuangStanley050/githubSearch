import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Form, FormGroup, FormControl, ControlLabel, Button } from "react-bootstrap";
import "./search.css";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ""
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e) {
        this.setState({
            input: e.target.value
        });
    }
    handleSubmit(e) {
        //e.preventDefault();
        ReactDOM.findDOMNode(this.refs.answer).value = '';
        this.props.update(this.state.input);
    }
    render() {
        return (
            <Form inline>
            <FormGroup>
                    <ControlLabel>Input Username to Search</ControlLabel>{'  '}
                    <FormControl ref="answer" type="text" placeholder="username" onChange={this.handleInput}/>
                    <Button onClick={this.handleSubmit}bsStyle="info">Submit</Button>
                </FormGroup>
            </Form>
        )
    }
}

export default Search;
