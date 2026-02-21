function Logo() {
  return (
    <div className='flex items-center gap-2'>
      <div className='rounded-lg bg-linear-to-br from-[#6366F1] to-[#4F46E5] p-1.5'>
        <img
          src='billflow-vector-logo.png'
          alt='BillFlow Logo'
          className='h-3.75 w-3.75 text-white'
        />
      </div>
      <span className='font-inter text-base'>BillFlow</span>
    </div>
  );
}

export default Logo;
