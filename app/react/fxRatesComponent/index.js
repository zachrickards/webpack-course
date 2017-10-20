import React, { Component } from 'react';

import getFxRates from 'sectionThreeSolution';

require('./style');

export default class FxRatesComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rates: []
        };
    }

    componentDidMount() {
        getFxRates(this.props.baseCurrency, rates => {
            this.setState({
                rates
            });
        });
    }

    render() {
        let dailyRates = [];

        const {rates: {rates}} = this.state;
        const {rates: {date}} = this.state;

        const { baseCurrency } = this.props;

        console.log(date);

        for (const currency in rates) {
            const rate = rates[currency];

            dailyRates.push(<li key={currency}className='list-group-item'>{currency} - <i className='fa fa-usd fa-2x' aria-hidden='true'> {rate}</i></li>);
        }

        return (
            <div id='fxContainer'>
                <h2>Base {baseCurrency} Date <i className='fa fa-calendar fa-lg'> {date}</i></h2>
                <ul className='list-group'>{dailyRates}</ul>
            </div>
        );
    }
}