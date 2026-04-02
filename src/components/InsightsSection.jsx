function InsightsSection() {
  return (
    <section className="insights-section">
      <h2>Insights</h2>

      <div className="insights-grid">
        <div className="insight-card purple">
          <div className="icon">💸</div>
          <h3>Highest Spending</h3>
          <p>Food is your highest spending category this month.</p>
        </div>

        <div className="insight-card green">
          <div className="icon">📈</div>
          <h3>Monthly Growth</h3>
          <p>Your balance increased compared to last month.</p>
        </div>

        <div className="insight-card blue">
          <div className="icon">💰</div>
          <h3>Healthy Savings</h3>
          <p>Your income is significantly higher than expenses.</p>
        </div>
      </div>
    </section>
  );
}

export default InsightsSection;