import { getDaySuffix } from './helpers';

function NextBill({ subs }) {
  const getNextBill = function (subs) {
    const sortedBills = subs
      .slice(0)
      .sort((a, b) => a.billingDate - b.billingDate);

    const today = new Date().getDate();

    // Bills left to pay in the current month
    const billsLeft = sortedBills.filter(sub => sub.billingDate >= today);

    return billsLeft.length > 0 ? billsLeft[0] : sortedBills[0];
  };
  const nextBill = getNextBill(subs);

  return (
    <div className='bg-light-navyblue w-full rounded-xl border border-[#334155] px-4 py-5'>
      <div className='mb-3 flex justify-between'>
        <p className='text-light-gray text-xs font-medium'>Next Bill Due</p>
        <img src='1_icon.png' alt='Icon' className='h-5 w-5' />
      </div>
      <p className='mb-2 text-lg font-semibold sm:text-xl'>{nextBill.name}</p>
      <p className='text-dark-gray text-xs'>
        ${nextBill.price} on the{' '}
        {`${nextBill.billingDate}${getDaySuffix(nextBill.billingDate)}`}
      </p>
    </div>
  );
}

export default NextBill;
