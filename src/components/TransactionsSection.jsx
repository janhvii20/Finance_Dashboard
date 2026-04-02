function TransactionsSection({
  transactions,
  search,
  setSearch,
  filterType,
  setFilterType,
  role,
}) {
  return (
    <section className="transactions-section">
      <div className="section-top">
        <h2>Transactions</h2>

        <div className="filters">
          <input
            type="text"
            placeholder="Search by title or category"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="all">All</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>

          {role === "admin" && <button>Add Transaction</button>}
        </div>
      </div>

      {transactions.length === 0 ? (
        <div className="empty-state">No transactions found.</div>
      ) : (
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Category</th>
                <th>Type</th>
                {role === "admin" && <th>Action</th>}
              </tr>
            </thead>
            <tbody>
              {transactions.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.date}</td>
                  <td>₹{item.amount.toLocaleString()}</td>
                  <td>{item.category}</td>
                  <td>
                    <span className={`type-badge ${item.type}`}>
                      {item.type}
                    </span>
                  </td>
                  {role === "admin" && (
                    <td>
                      <button className="edit-btn">Edit</button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

export default TransactionsSection;