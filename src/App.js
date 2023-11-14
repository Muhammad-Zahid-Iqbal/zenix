import logo from './logo.svg';
import './App.css';
import Layout from './layout/Layout';
import Home from './components/home/Home';
import Marketchart from './components/dashboard/market-overview/Marketchart';
import SellBuyorder from './components/dashboard/sell-buy-orders/SellBuyorder';
import Mainbalance from './components/dashboard/main-balance/Mainbalance';
import Tradingactivities from './components/dashboard/recent-trading-activities/Tradingactivities';

function App() {
  return (
    <div>
      <Layout>
        <Home />
        <Marketchart/>
        <SellBuyorder/>
        <Mainbalance/>
        <Tradingactivities/>
      </Layout>
    </div>
  );
}

export default App;
