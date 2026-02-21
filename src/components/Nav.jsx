function Nav({ children }) {
  return (
    <nav className='sticky top-0 z-10 h-16 border-b border-[#263144]'>
      <div className='mx-auto flex h-full max-w-7xl items-center justify-between px-6'>
        {children}
      </div>
    </nav>
  );
}

export default Nav;
