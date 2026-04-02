import RoleSelector from "./RoleSelector";

function Header({ role, setRole, darkMode, setDarkMode }) {
  return (
    <header className="header">
      <div>
        <h1>Finance Dashboard</h1>
        <p>Track your balance, transactions, and spending patterns</p>
      </div>

      <div className="header-right">
        <button className="dark-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <RoleSelector role={role} setRole={setRole} />
      </div>
    </header>
  );
}

export default Header;