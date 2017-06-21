import fetch from 'fetch-hoc';
import AreaChart from './area-chart';

const FooComponent = props => {
  if (props.error) {
    return (
      <div className="error">An error occured! {props.error.toString()}</div>
    );
  }
  if (props.loading) {
    return <div className="loading">Loading...</div>;
  }

  const data = Object.keys(props.data.bpi).map((x, i) => ({
    date: new Date(x),
    value: props.data.bpi[x]
  }));
  console.log(data);

  return (
    <AreaChart
      data={data}
      width={800}
      height={600}
      margin={{ left: 40, right: 40, top: 40, bottom: 40 }}
    />
  );
};

export default fetch(
  ({ currency }) =>
    `http://api.coindesk.com/v1/bpi/historical/close.json?currency=${currency}`
)(FooComponent);