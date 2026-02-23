function Header({ numSubs }) {
  return (
    <div>
      <div className='mb-6 flex items-center justify-between'>
        <p className='text-base font-semibold'>Active Subscriptions</p>
        <p className='text-dark-gray text-xs'>{numSubs} services</p>
      </div>
      <button className='d= flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#4F46E5] p-2.5 duration-500 hover:scale-102 hover:bg-[#6366F1]'>
        <img src='3_add-icon.png' alt='Add Icon' />
        <span>Add New Subscription</span>
      </button>
    </div>
  );
}

export default Header;
