function SpendingSummary({ totalMonthlyBill, subs }) {
  const getCategoryColor = function (category) {
    switch (category) {
      case 'Entertainment':
        return '#f43f5e';
      case 'Productivity':
        return '#6366f1';
      default:
        return '#12b981';
    }
  };

  const getCategoryData = function (category) {
    const amount = subs
      .filter(sub => sub.category === category)
      .reduce((acc, sub) => acc + sub.price, 0);

    return {
      name: category,
      amount,
      percentage: totalMonthlyBill > 0 ? (amount / totalMonthlyBill) * 100 : 0,
      color: getCategoryColor(category),
    };
  };

  const entertainment = getCategoryData('Entertainment');
  const productivity = getCategoryData('Productivity');
  const cloud = getCategoryData('Cloud Storage');

  const categories = [entertainment, productivity, cloud];

  // A new array where each category knows its own offset
  let currentOffset = 0;
  const categoriesWithOffsets = categories.map(cat => {
    const strokeOffset = -currentOffset;
    currentOffset += cat.percentage;
    return { ...cat, strokeOffset };
  });

  return (
    <div className='bg-light-navyblue w-full rounded-xl border border-[#334155] p-2.5 sm:px-4 sm:py-5'>
      <p className='text-light-gray mb-4 text-xs font-medium sm:mb-6'>
        Spending by Category
      </p>

      <div className='flex items-center gap-8'>
        {/* The SVG Circle */}
        <div className='relative h-26 w-26'>
          <svg viewBox='0 0 42 42' className='h-full w-full -rotate-90'>
            {categoriesWithOffsets.map(cat => (
              <circle
                key={cat.name}
                cx='21'
                cy='21'
                r='15.915'
                fill='transparent'
                stroke={cat.color}
                strokeWidth='3'
                // The percentage is the "fill", the rest is empty space
                strokeDasharray={`${cat.percentage} ${100 - cat.percentage}`}
                strokeDashoffset={cat.strokeOffset}
                className='duration-500 ease-in-out'
              />
            ))}
          </svg>
          {/* The Center Text */}
          <div className='absolute inset-0 flex items-center justify-center'>
            <span className='font-semibold tracking-wide'>
              ${totalMonthlyBill.toFixed(0)}
            </span>
          </div>
        </div>

        {/* The Labels (Legends) */}
        <ul className='flex flex-col gap-2.5'>
          {categories.map(cat => (
            <li key={cat.name} className='flex items-center gap-3'>
              <span
                className='h-3 w-3 rounded-full'
                style={{ backgroundColor: cat.color }}
              ></span>
              <span className='text-xs text-[#CBD5E1]'>{cat.name}</span>
              <span className='text-dark-gray text-xs tracking-wider'>
                ${cat.amount.toFixed(0)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SpendingSummary;
