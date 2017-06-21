export default ({ currencies, ...props }) => (
  <select {...props}>
    {currencies.map(({ title, value }) => (
      <option key={value} value={value}>{title}</option>
    ))}
    <style jsx>
      {`
        select {
          height: 30px;
        }

      `}
    </style>
  </select>
);
