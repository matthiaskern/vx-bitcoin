import { Component } from 'react';
import Data from '../components/data';
import CurrencyList from '../components/currencyList';
import Background from '../components/background-gradient';
import Head from '../components/head';
import ServiceWorker from '../components/service-worker';

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
        <Head />
        <ServiceWorker />
        <h1>Bitcoin Price Index</h1>
        <Data currency={this.state.selectedCurrency} />
        <footer>

          <CurrencyList
            currencies={this.state.currencies}
            value={this.state.selectedCurrency}
            onChange={this.handleChange.bind(this)}
          />
          {' '}
          Data from
          {' '}
          <a href="https://www.coindesk.com" target="_blank" rel="noopener">
            Coindesk API
          </a>
        </footer>

        <style jsx>{`

          div {
            display: flex;
            flex-direction: column;  /* make main axis vertical */
            justify-content: space-between;
            align-items: center;
            height: 90vh;
            width: 100%;
            padding: 5vh;
            background: #DE5157;
            background: linear-gradient(to bottom, #ff7e5f, #feb47b )
          }
          footer { 
            margin-top: 1em; 
            line-height: 30px;
          }
          footer a {
            color: #000;
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
