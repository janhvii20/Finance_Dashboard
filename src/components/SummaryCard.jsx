function SummaryCard({ title, amount, type }) {
  return (
    <div className={`summary-card ${type}`}>
      <h3>{title}</h3>
      <p>₹{amount.toLocaleString()}</p>
    </div>
  );
}

export default SummaryCard;