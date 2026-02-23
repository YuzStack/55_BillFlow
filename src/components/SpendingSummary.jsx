function SpendingSummary({ totalMonthlyBill, subs }) {
  const getTotalCategoryBill = function (category) {
    return subs.length > 0
      ? subs
          .filter(sub => sub.category === category)
          .reduce((acc, cur) => acc + cur.price, 0)
          .toFixed(0)
      : 0;
  };

  return (
    <div className='bg-light-navyblue w-full rounded-xl border border-[#334155] p-2.5 sm:px-4 sm:py-5'>
      <p className='text-light-gray mb-6 text-xs font-medium'>
        Spending by Category
      </p>
      <div className='flex items-center gap-8'>
        <div className='flex h-26 w-26 items-center justify-center rounded-full border border-black'>
          <span className='font-semibold tracking-wide'>
            ${totalMonthlyBill.toFixed(0)}
          </span>
        </div>

        <ul className='flex flex-col gap-2.5'>
          <li className='flex w-37.5 items-center justify-between'>
            <div className='flex gap-2'>
              <span className='bg-warm-red h-3 w-3 rounded-full'></span>
              <span className='text-xs text-[#CBD5E1]'>Entertainment</span>
            </div>
            <span className='text-dark-gray text-xs tracking-wider'>
              ${getTotalCategoryBill('Entertainment')}
            </span>
          </li>
          <li className='flex w-37.5 items-center justify-between'>
            <div className='flex gap-2'>
              <span className='bg-warm-purple h-3 w-3 rounded-full'></span>
              <span className='text-xs text-[#CBD5E1]'>Productivity</span>
            </div>
            <span className='text-dark-gray text-xs tracking-wider'>
              ${getTotalCategoryBill('Productivity')}
            </span>
          </li>
          <li className='flex w-37.5 items-center justify-between'>
            <div className='flex gap-2'>
              <span className='bg-warm-green h-3 w-3 rounded-full'></span>
              <span className='text-xs text-[#CBD5E1]'>Cloud Storage</span>
            </div>
            <span className='text-dark-gray text-xs tracking-wider'>
              ${getTotalCategoryBill('Cloud Storage')}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SpendingSummary;
