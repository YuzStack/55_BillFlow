import { useEffect, useState } from 'react';
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
// import initialSubscriptions from '../data-template';

function App() {
  // const [subs, setSubs] = useState(initialSubscriptions);

  const [subs, setSubs] = useState(function () {
    const storedSubs = JSON.parse(localStorage.getItem('subs'));
    return storedSubs ? storedSubs : [];
  });

  const [isAddingSub, setIsAddingSub] = useState(false);
  const [isDeletingSub, setIsDeletingSub] = useState(false);
  const [isEditingSub, setIsEditingSub] = useState(false);
  const [selectedSub, setSelectedSub] = useState(null);

  const totalMonthlyBill = subs.reduce((acc, cur) => acc + cur.price, 0) || 0;
  const numSubs = subs.length;

  useEffect(
    function () {
      localStorage.setItem('subs', JSON.stringify(subs));
    },
    [subs],
  );

  const handleAddSub = function (sub) {
    setSubs(curSubs => [...curSubs, sub]);
  };

  const handleStageDeleteSub = function (subId) {
    setIsDeletingSub(true);

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

  const handleStageEditSub = function (subId) {
    setIsEditingSub(true);

    const selectedSub = subs.find(sub => sub.id === subId);
    setSelectedSub(selectedSub);
  };

  const handleUnstageEditSub = function () {
    setSelectedSub(null);
    setIsEditingSub(false);
  };

  const handleEditSub = function (editedSubObj) {
    setSubs(curSubs =>
      curSubs.map(sub => (sub.id === selectedSub.id ? editedSubObj : sub)),
    );

    setSelectedSub(null);
    setIsEditingSub(false);
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
          <SubList
            subs={subs}
            onStageDeleteSub={handleStageDeleteSub}
            onStageEditSub={handleStageEditSub}
          />
        </Subscriptions>
      </Dashboard>

      {isAddingSub && (
        <AddSubForm onAddSub={handleAddSub} setIsAddingSub={setIsAddingSub} />
      )}

      {isEditingSub && (
        <EditSubForm
          selectedSub={selectedSub}
          onUnstageEditSub={handleUnstageEditSub}
          onEditSub={handleEditSub}
        />
      )}

      {isDeletingSub && (
        <DeleteSubDialog
          selectedSub={selectedSub}
          onUnstageDeleteSub={handleUnstageDeleteSub}
          onDeleteSub={handleDeleteSub}
        />
      )}
    </div>
  );
}

export default App;
