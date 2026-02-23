import { X } from 'lucide-react';
import { useState } from 'react';

function EditSubForm({ selectedSub, onUnstageEditSub, onEditSub }) {
  const [name, setName] = useState(selectedSub.name);
  const [price, setPrice] = useState(selectedSub.price);
  const [billingDate, setBillingDate] = useState(selectedSub.billingDate);
  const [category, setCategory] = useState(selectedSub.category);

  const handleSubmit = function (e) {
    e.preventDefault();

    const editedSub = {
      id: crypto.randomUUID(),
      name,
      price,
      billingDate,
      category,
    };

    onEditSub(editedSub);
  };

  return (
    <div className='fixed inset-0 z-20 flex items-center justify-center bg-black/70 backdrop-blur-xs'>
      <form
        onSubmit={handleSubmit}
        className='bg-light-navyblue w-xs rounded-2xl border border-[#334155] px-5 py-6 sm:w-md lg:w-md'
      >
        <div className='mb-6 flex items-center justify-between'>
          <h2 className='text-xl font-semibold'>Edit Subscription</h2>
          <button
            onClick={onUnstageEditSub}
            type='button'
            className='text-dark-gray cursor-pointer rounded-lg p-2 duration-300 hover:scale-105 hover:bg-[#334156] hover:text-white'
          >
            <X />
          </button>
        </div>

        <div className='space-y-3'>
          <label className='flex flex-col gap-1'>
            <span className='text-md text-[#CBD5E1]'>Service Name</span>
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              type='text'
              required
              placeholder='e.g., Netflix'
              className='bg-dark-navyblue placeholder-dark-gray focus:ring-warm-purple h-10 w-full rounded-lg border border-[#334155] px-4 py-2.5 duration-200 focus:border-transparent focus:ring-2 focus:outline-none'
            />
          </label>

          <label className='flex flex-col gap-1'>
            <span className='text-md text-[#CBD5E1]'>Monthly Price ($)</span>
            <input
              value={price}
              onChange={e => setPrice(Number(e.target.value))}
              type='number'
              required
              placeholder='0.00'
              className='bg-dark-navyblue placeholder-dark-gray focus:ring-warm-purple h-10 w-full rounded-lg border border-[#334155] px-4 py-2.5 duration-200 focus:border-transparent focus:ring-2 focus:outline-none'
            />
          </label>

          <label className='flex flex-col gap-1'>
            <span className='text-md text-[#CBD5E1]'>Billing Date</span>
            <input
              value={billingDate}
              onChange={e => {
                if (e.target.value <= 31)
                  setBillingDate(Number(e.target.value));
              }}
              type='number'
              required
              placeholder='Day of month (1-31)'
              className='bg-dark-navyblue placeholder-dark-gray focus:ring-warm-purple h-10 w-full rounded-lg border border-[#334155] px-4 py-2.5 duration-200 focus:border-transparent focus:ring-2 focus:outline-none'
            />
          </label>

          <label className='flex flex-col gap-1'>
            <span className='text-md text-[#CBD5E1]'>Category</span>
            <select
              value={category}
              onChange={e => setCategory(e.target.value)}
              className='bg-dark-navyblue focus:ring-warm-purple h-10 w-full rounded-lg border border-[#334155] px-4 py-2.5 duration-200 focus:border-transparent focus:ring-2 focus:outline-none'
            >
              <option value='Entertainment'>Entertainment</option>
              <option value='Productivity'>Productivity</option>
              <option value='Cloud Storage'>Cloud Storage</option>
            </select>
          </label>
        </div>

        <div className='mt-8 flex gap-3'>
          <button
            onClick={onUnstageEditSub}
            type='button'
            className='h-10 flex-1 cursor-pointer rounded-lg bg-[#334155] p-2 text-sm font-medium duration-300 hover:scale-102 hover:bg-[#475569] sm:h-12 sm:px-4 sm:py-2.5 sm:text-base'
          >
            Cancel
          </button>
          <button className='h-10 flex-1 cursor-pointer rounded-lg bg-indigo-600 p-2 text-sm font-medium duration-300 hover:scale-102 hover:bg-indigo-500 sm:h-12 sm:px-4 sm:py-2.5 sm:text-base'>
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditSubForm;
