import Dashboard from "./pages/Dashboard";

// Providers
import { WorldWalletProvider } from "./provider/WorldWalletProvider";
import { WorldIdProvider } from "./provider/WorldIdProvider";

function App() {
  return (
    <WorldWalletProvider>
      <WorldIdProvider>
        <Dashboard />
      </WorldIdProvider>
    </WorldWalletProvider>
  );
}

export default App;
