function NextBill() {
  return (
    <div className='bg-light-navyblue w-90 rounded-xl border border-[#334155] px-4 py-5'>
      <div className='mb-3 flex justify-between'>
        <p className='text-light-gray text-xs font-medium'>Next Bill Due</p>
        <img src='1_icon.png' alt='Icon' className='h-5 w-5' />
      </div>
      <p className='mb-2 text-xl font-semibold'>Prime Video</p>
      <p className='text-dark-gray text-xs'>$44.90 on the 25th</p>
    </div>
  );
}

export default NextBill;
