import Dashboard from './Dashboard';
import Header from './Header';
import Logo from './Logo';
import MonthlyBill from './MonthlyBill';
import Nav from './Nav';
import NextBill from './NextBill';
import NumSubs from './NumSubs';
import SpendingSummary from './SpendingSummary';
import SubList from './SubList';
import Subscriptions from './Subscriptions';
import SubStat from './SubStat';

function App() {
  return (
    <div className='font-inter bg-dark-navyblue min-h-screen text-white'>
      <Nav>
        <Logo />
        <MonthlyBill />
      </Nav>

      <Dashboard>
        <SubStat>
          <NextBill />
          <NumSubs />
          <SpendingSummary />
        </SubStat>

        <Subscriptions>
          <Header />
          <SubList />
        </Subscriptions>
      </Dashboard>
    </div>
  );
}

export default App;
