import Dashboard from './Dashboard';
import Logo from './Logo';
import MonthlyBill from './MonthlyBill';
import Nav from './Nav';
import NextBill from './NextBill';
import NumSubs from './NumSubs';
import SpendingSummary from './SpendingSummary';
import SubStat from './SubStat';

function App() {
  return (
    <div className='font-inter min-h-screen bg-[#0F172A] text-white'>
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
      </Dashboard>
    </div>
  );
}

export default App;
