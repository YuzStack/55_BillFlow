import { Pencil, Trash2 } from 'lucide-react';

function SubList() {
  return (
    <ul>
      <li className='flex items-center justify-between rounded-lg border-b border-[#293548] p-4 duration-300 hover:scale-101 hover:bg-[#293548]'>
        <div className='flex gap-4'>
          <div className='bg-warm-red flex h-10 w-10 items-center justify-center rounded-full'>
            <span className='text-xs font-medium'>N</span>
          </div>
          <div>
            <h3 className='text-sm font-medium'>Netflix</h3>
            <p className='text-dark-gray text-xs'>Bills on the 15th</p>
          </div>
        </div>

        <div className='flex items-center gap-4'>
          <div className='text-end'>
            <p className='text-base font-semibold tracking-wider'>$ 15.99</p>
            <p className='text-dark-gray text-xs'>/month</p>
          </div>
          <div className='flex items-center gap-0'>
            <button className='text-dark-gray cursor-pointer rounded-lg p-2 duration-300 hover:scale-105 hover:bg-[#334156] hover:text-white'>
              <Pencil size={16} />
            </button>
            <button className='text-dark-gray cursor-pointer rounded-lg p-2 duration-300 hover:scale-105 hover:bg-[#334156] hover:text-red-500'>
              <Trash2 size={16} />
            </button>
          </div>
        </div>
      </li>

      <li className='flex items-center justify-between rounded-lg border-b border-[#293548] p-4 duration-300 hover:scale-101 hover:bg-[#293548]'>
        <div className='flex gap-4'>
          <div className='bg-warm-red flex h-10 w-10 items-center justify-center rounded-full'>
            <span className='text-xs font-medium'>S</span>
          </div>
          <div>
            <h3 className='text-sm font-medium'>Spotify</h3>
            <p className='text-dark-gray text-xs'>Bills on the 1st</p>
          </div>
        </div>

        <div className='flex items-center gap-4'>
          <div className='text-end'>
            <p className='text-base font-semibold tracking-wider'>$ 9.99</p>
            <p className='text-dark-gray text-xs'>/month</p>
          </div>
          <div className='flex items-center gap-0'>
            <button className='text-dark-gray cursor-pointer rounded-lg p-2 duration-300 hover:scale-105 hover:bg-[#334156] hover:text-white'>
              <Pencil size={16} />
            </button>
            <button className='text-dark-gray cursor-pointer rounded-lg p-2 duration-300 hover:scale-105 hover:bg-[#334156] hover:text-red-500'>
              <Trash2 size={16} />
            </button>
          </div>
        </div>
      </li>

      <li className='flex items-center justify-between rounded-lg border-b border-[#293548] p-4 duration-300 hover:scale-101 hover:bg-[#293548]'>
        <div className='flex gap-4'>
          <div className='bg-warm-green flex h-10 w-10 items-center justify-center rounded-full'>
            <span className='text-xs font-medium'>A</span>
          </div>
          <div>
            <h3 className='text-sm font-medium'>Adobe Creative Cloud</h3>
            <p className='text-dark-gray text-xs'>Bills on the 10th</p>
          </div>
        </div>

        <div className='flex items-center gap-4'>
          <div className='text-end'>
            <p className='text-base font-semibold tracking-wider'>$ 52.99</p>
            <p className='text-dark-gray text-xs'>/month</p>
          </div>
          <div className='flex items-center gap-0'>
            <button className='text-dark-gray cursor-pointer rounded-lg p-2 duration-300 hover:scale-105 hover:bg-[#334156] hover:text-white'>
              <Pencil size={16} />
            </button>
            <button className='text-dark-gray cursor-pointer rounded-lg p-2 duration-300 hover:scale-105 hover:bg-[#334156] hover:text-red-500'>
              <Trash2 size={16} />
            </button>
          </div>
        </div>
      </li>

      <li className='flex items-center justify-between rounded-lg border-b border-[#293548] p-4 duration-300 hover:scale-101 hover:bg-[#293548]'>
        <div className='flex gap-4'>
          <div className='bg-warm-purple flex h-10 w-10 items-center justify-center rounded-full'>
            <span className='text-xs font-medium'>G</span>
          </div>
          <div>
            <h3 className='text-sm font-medium'>GitHub Pro</h3>
            <p className='text-dark-gray text-xs'>Bills on the 5th</p>
          </div>
        </div>

        <div className='flex items-center gap-4'>
          <div className='text-end'>
            <p className='text-base font-semibold tracking-wider'>$ 4.00</p>
            <p className='text-dark-gray text-xs'>/month</p>
          </div>
          <div className='flex items-center gap-0'>
            <button className='text-dark-gray cursor-pointer rounded-lg p-2 duration-300 hover:scale-105 hover:bg-[#334156] hover:text-white'>
              <Pencil size={16} />
            </button>
            <button className='text-dark-gray cursor-pointer rounded-lg p-2 duration-300 hover:scale-105 hover:bg-[#334156] hover:text-red-500'>
              <Trash2 size={16} />
            </button>
          </div>
        </div>
      </li>

      <li className='flex items-center justify-between rounded-lg border-b border-[#293548] p-4 duration-300 hover:scale-101 hover:bg-[#293548]'>
        <div className='flex gap-4'>
          <div className='bg-warm-green flex h-10 w-10 items-center justify-center rounded-full'>
            <span className='text-xs font-medium'>A</span>
          </div>
          <div>
            <h3 className='text-sm font-medium'>Apple iCloud</h3>
            <p className='text-dark-gray text-xs'>Bills on the 20th</p>
          </div>
        </div>

        <div className='flex items-center gap-4'>
          <div className='text-end'>
            <p className='text-base font-semibold tracking-wider'>$ 2.99</p>
            <p className='text-dark-gray text-xs'>/month</p>
          </div>
          <div className='flex items-center gap-0'>
            <button className='text-dark-gray cursor-pointer rounded-lg p-2 duration-300 hover:scale-105 hover:bg-[#334156] hover:text-white'>
              <Pencil size={16} />
            </button>
            <button className='text-dark-gray cursor-pointer rounded-lg p-2 duration-300 hover:scale-105 hover:bg-[#334156] hover:text-red-500'>
              <Trash2 size={16} />
            </button>
          </div>
        </div>
      </li>
    </ul>
  );
}

export default SubList;
