import fetch from 'fetch-hoc';
import AreaChart from './area-chart';

const DataComponent = props => {
  if (props.error) {
    return (
      <div className="error">An error occured! {props.error.toString()}</div>
    );
  }
  if (props.loading) {
    return (
      <div className="loading">
        Loading...
      </div>
    );
  }

  const data = Object.keys(props.data.bpi).map((x, i) => ({
    date: new Date(x),
    value: props.data.bpi[x]
  }));

  return (
    <div>
      <AreaChart
        data={data}
        width={800}
        height={600}
        margin={{ left: 40, right: 40, top: 40, bottom: 40 }}
      />
      <style jsx>{`display: flex; flex-grow: 1;`}</style>
    </div>
  );
};

export default fetch(
  ({ currency }) =>
    `http://api.coindesk.com/v1/bpi/historical/close.json?currency=${currency}`,
  { mode: 'cors' }
)(DataComponent);
