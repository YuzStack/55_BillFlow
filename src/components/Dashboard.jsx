function Dashboard({ children }) {
  return (
    <main className='m-auto max-w-7xl px-3 pt-20 pb-4 sm:px-6 sm:pt-24'>
      <h2 className='mb-3 text-xl font-semibold sm:mb-6 sm:text-2xl'>
        Dashboard
      </h2>
      <div className='grid gap-6 lg:grid-cols-12'>{children}</div>
    </main>
  );
}

export default Dashboard;
