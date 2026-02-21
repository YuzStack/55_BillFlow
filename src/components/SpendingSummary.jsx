function SpendingSummary() {
  return (
    <div className='bg-light-navyblue w-full rounded-xl border border-[#334155] px-4 py-5'>
      <p className='text-light-gray mb-6 text-xs font-medium'>
        Spending by Category
      </p>
      <div className='flex items-center gap-8'>
        <div className='flex h-26 w-26 items-center justify-center rounded-full border border-black'>
          <span className='font-semibold tracking-wide'>$188</span>
        </div>

        <ul className='flex flex-col gap-2.5'>
          <li className='flex w-37.5 items-center justify-between'>
            <div className='flex gap-2'>
              <span className='bg-warm-red h-3 w-3 rounded-full'></span>
              <span className='text-xs text-[#CBD5E1]'>Entertainment</span>
            </div>
            <span className='text-dark-gray text-xs tracking-wider'>$26</span>
          </li>
          <li className='flex w-37.5 items-center justify-between'>
            <div className='flex gap-2'>
              <span className='bg-warm-purple h-3 w-3 rounded-full'></span>
              <span className='text-xs text-[#CBD5E1]'>Productivity</span>
            </div>
            <span className='text-dark-gray text-xs tracking-wider'>$57</span>
          </li>
          <li className='flex w-37.5 items-center justify-between'>
            <div className='flex gap-2'>
              <span className='bg-warm-green h-3 w-3 rounded-full'></span>
              <span className='text-xs text-[#CBD5E1]'>Cloud Storage</span>
            </div>
            <span className='text-dark-gray text-xs tracking-wider'>$3</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SpendingSummary;
