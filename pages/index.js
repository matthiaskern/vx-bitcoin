import { Component } from 'react';
import Data from '../components/data';
import CurrencyList from '../components/currencyList';

export default class extends Component {
  state = {
    currencies: [
      { title: 'Dollar $', value: 'USD' },
      { title: 'Euro €', value: 'EUR' }
    ],
    selectedCurrency: 'USD'
  };

  handleChange(event) {
    this.setState({ selectedCurrency: event.target.value });
  }

  render() {
    return (
      <div>
        <h1>Bitcoin Price Index over 30d</h1>
        <CurrencyList
          currencies={this.state.currencies}
          value={this.state.selectedCurrency}
          onChange={this.handleChange.bind(this)}
        />
        <Data currency={this.state.selectedCurrency} />
        <footer>
          Data from
          {' '}
          <a href="https://www.coindesk.com" target="_blank" rel="noopener">
            Coindesk API
          </a>
        </footer>

        <style jsx>{`

          div {
            display: flex;
            flex: 1;
            flex-direction: column;  /* make main axis vertical */
            justify-content: space-between;
            align-items: center;
            width: 100%;
            padding: 2em;

          }
          footer { 
            margin-top: 1em; 
          }
          `}</style>
        <style jsx global>{`
          html, body {
            width: 100%;
            height: 100%;
          }
          body {
            font-family: Menlo, "DejaVu Sans Mono", "Lucida Console", monospace;
            margin: 0;
          }
          `}</style>
      </div>
    );
  }
}
