function NumSubs() {
  return (
    <div className='bg-light-navyblue w-90 rounded-xl border border-[#334155] px-4 py-5'>
      <div className='mb-3 flex justify-between'>
        <p className='text-light-gray text-xs font-medium'>
          Total Subscriptions
        </p>
        <img src='2_icon.png' alt='Icon' className='h-5 w-5' />
      </div>
      <p className='mb-2 text-xl font-semibold'>5</p>
      <p className='text-dark-gray text-xs'>Active services</p>
    </div>
  );
}

export default NumSubs;
