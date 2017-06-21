export default ({ currencies, ...props }) => (
  <select {...props}>
    {currencies.map(({ title, value }) => (
      <option key={value} value={value}>{title}</option>
    ))}
    <style jsx>
      {`
      `}
    </style>
  </select>
);
