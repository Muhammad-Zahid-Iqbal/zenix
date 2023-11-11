import logo from './logo.svg';
import './App.css';
import Layout from './layout/Layout';
import Home from './components/home/Home';
import Marketchart from './components/dashboard/market-overview/Marketchart';
import SellBuyorder from './components/dashboard/sell-buy-orders/SellBuyorder';

function App() {
  return (
    <div>
      <Layout>
        <Home />
        <Marketchart/>
        <SellBuyorder/>
      </Layout>
    </div>
  );
}

export default App;
