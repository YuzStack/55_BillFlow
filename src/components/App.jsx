import { useState } from 'react';
import AddSubForm from './AddSubForm';
import Dashboard from './Dashboard';
import DeleteSubDialog from './DeleteSubDialog';
import EditSubForm from './EditSubForm';
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
import initialSubscriptions from '../data-template';

function App() {
  const [subs, setSubs] = useState(initialSubscriptions);

  const totalMonthlyBill = subs.reduce((acc, cur) => acc + cur.price, 0);
  const numSubs = subs.length;

  return (
    <div className='font-inter bg-dark-navyblue min-h-screen text-white'>
      <Nav>
        <Logo />
        <MonthlyBill totalMonthlyBill={totalMonthlyBill} />
      </Nav>

      <Dashboard>
        <SubStat>
          <NextBill subs={subs} />
          <NumSubs numSubs={numSubs} />
          <SpendingSummary totalMonthlyBill={totalMonthlyBill} subs={subs} />
        </SubStat>

        <Subscriptions>
          <Header numSubs={numSubs} />
          <SubList subs={subs} />
        </Subscriptions>
      </Dashboard>

      {/* <AddSubForm /> */}
      {/* <EditSubForm /> */}
      {/* <DeleteSubDialog /> */}
    </div>
  );
}

export default App;
