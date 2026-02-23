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
  const [isAddingSub, setIsAddingSub] = useState(false);
  const [isDeletingSub, setIsDeletingSub] = useState(false);
  const [selectedSub, setSelectedSub] = useState(null);

  const totalMonthlyBill = subs.reduce((acc, cur) => acc + cur.price, 0) || 0;
  const numSubs = subs.length;

  const handleAddSub = function (sub) {
    setSubs(curSubs => [...curSubs, sub]);
  };

  const handleStageDeleteSub = function (subId) {
    setIsDeletingSub(true);

    // Get the selected subscription
    const selectedSub = subs.find(sub => sub.id === subId);
    setSelectedSub(selectedSub);
  };

  const handleUnstageDeleteSub = function () {
    setSelectedSub(null);
    setIsDeletingSub(false);
  };

  const handleDeleteSub = function (subId) {
    setSubs(curSubs => curSubs.filter(sub => sub.id !== subId));
  };

  return (
    <div className='font-inter bg-dark-navyblue min-h-screen text-white'>
      <Nav>
        <Logo />
        <MonthlyBill totalMonthlyBill={totalMonthlyBill} />
      </Nav>

      <Dashboard>
        <SubStat>
          {subs.length > 0 && <NextBill subs={subs} />}
          <NumSubs numSubs={numSubs} />
          <SpendingSummary totalMonthlyBill={totalMonthlyBill} subs={subs} />
        </SubStat>

        <Subscriptions>
          <Header numSubs={numSubs} setIsAddingSub={setIsAddingSub} />
          <SubList subs={subs} onStageDeleteSub={handleStageDeleteSub} />
        </Subscriptions>
      </Dashboard>

      {isAddingSub && (
        <AddSubForm onAddSub={handleAddSub} setIsAddingSub={setIsAddingSub} />
      )}

      {/* <EditSubForm /> */}

      {isDeletingSub && (
        <DeleteSubDialog
          selectedSub={selectedSub}
          onUnstageSub={handleUnstageDeleteSub}
          onDeleteSub={handleDeleteSub}
        />
      )}
    </div>
  );
}

export default App;
