import { Component } from "react";
import css from './Filter.module.css';

class Filter extends Component {
    render() {

        const { value, onChange } = this.props;

        return (
            <>
                <label htmlFor="filter">
                    <p>Find contacts by name</p>
                    <input type="text" className={css.input}name="filter" value={value} onChange={onChange}/>
                </label>
            </>
        )
    }
}

export { Filter };