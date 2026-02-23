function NumSubs({ numSubs }) {
  return (
    <div className='bg-light-navyblue w-full rounded-xl border border-[#334155] p-2.5 sm:px-4 sm:py-5'>
      <div className='mb-3 flex justify-between'>
        <p className='text-light-gray text-xs font-medium'>
          Total Subscriptions
        </p>
        <img src='2_icon.png' alt='Icon' className='h-5 w-5' />
      </div>
      <p className='mb-2 text-lg font-semibold sm:text-xl'>{numSubs}</p>
      <p className='text-dark-gray text-xs'>Active services</p>
    </div>
  );
}

export default NumSubs;
