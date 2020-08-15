import React from 'react';
import s from './SearchBar.module.scss';

export default class SearchBar extends React.PureComponent {
    goSearch = () => {
        this.props.onClick(true);
    }
    handlerInput = (e) => {
        this.props.onInput(e.target.value);
    }
    handleEnterEvent = (e) => {
        if (e.key === 'Enter') {
            this.props.onKeyDown(true);
        }
    }
    render() {
        const { placeholder, id, name, value, } = this.props;
        return (
            <div className={s.searchParent}>
                <input
                    placeholder={placeholder}
                    id={id}
                    name={name}
                    type='text'
                    value={value}
                    onChange={this.handlerInput}
                    onKeyDown={this.handleEnterEvent}
                />
                {<button className={s.goIcon} onClick={this.goSearch} id='search'>
                    Go
                </button>}
            </div>
        );
    }
}