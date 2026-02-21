function Dashboard({ children }) {
  return (
    <main className='m-auto max-w-7xl px-6 pt-24 pb-4'>
      <h2 className='mb-6 text-2xl font-semibold'>Dashboard</h2>
      <div className='grid gap-6 lg:grid-cols-12'>{children}</div>
    </main>
  );
}

export default Dashboard;
