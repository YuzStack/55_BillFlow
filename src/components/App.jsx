import Logo from './Logo';
import MonthlyBill from './MonthlyBill';
import Nav from './Nav';

function App() {
  return (
    <div className='min-h-screen bg-[#0F172A] text-white'>
      <Nav>
        <Logo />
        <MonthlyBill />
      </Nav>

      <div className='m-auto max-w-7xl'></div>
    </div>
  );
}

export default App;
