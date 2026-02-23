function Nav({ children }) {
  return (
    <nav className='bg-dark-navyblue fixed top-0 right-0 left-0 z-10 h-16 border-b border-[#263144]'>
      <div className='mx-auto flex h-full max-w-7xl items-center justify-between px-3 sm:px-6'>
        {children}
      </div>
    </nav>
  );
}

export default Nav;
