import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import SummaryCard from "./components/SummaryCard";
import ChartsSection from "./components/ChartsSection";
import TransactionsSection from "./components/TransactionsSection";
import InsightsSection from "./components/InsightsSection";
import {
  transactionsData,
  monthlyTrendData,
  categoryData,
} from "./data/mockData";

function App() {
  const [role, setRole] = useState("viewer");
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const filteredTransactions = useMemo(() => {
    return transactionsData.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase());

      const matchesFilter =
        filterType === "all" ? true : item.type === filterType;

      return matchesSearch && matchesFilter;
    });
  }, [search, filterType]);

  const totalIncome = transactionsData
    .filter((item) => item.type === "income")
    .reduce((sum, item) => sum + item.amount, 0);

  const totalExpense = transactionsData
    .filter((item) => item.type === "expense")
    .reduce((sum, item) => sum + item.amount, 0);

  const totalBalance = totalIncome - totalExpense;

  return (
    <div className="app">
      <Header
        role={role}
        setRole={setRole}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <section className="summary-grid">
        <SummaryCard title="Total Balance" amount={totalBalance} type="balance" />
        <SummaryCard title="Income" amount={totalIncome} type="income" />
        <SummaryCard title="Expenses" amount={totalExpense} type="expense" />
      </section>

      <ChartsSection
        monthlyTrendData={monthlyTrendData}
        categoryData={categoryData}
      />

      <TransactionsSection
        transactions={filteredTransactions}
        search={search}
        setSearch={setSearch}
        filterType={filterType}
        setFilterType={setFilterType}
        role={role}
      />

      <InsightsSection />
    </div>
  );
}

export default App;s