import { Pencil, Trash2 } from 'lucide-react';
import { getDaySuffix } from '../helpers';

const getCategoryColor = function (category) {
  switch (category) {
    case 'Entertainment':
      return 'bg-warm-red';
    case 'Productivity':
      return 'bg-warm-purple';
    default:
      return 'bg-warm-green';
  }
};

function Sub({ sub, onStageDeleteSub, onStageEditSub }) {
  return (
    <li className='flex min-w-75 items-center justify-between rounded-lg border-b border-[#293548] px-1 py-2 duration-300 hover:scale-101 hover:bg-[#293548] sm:p-4'>
      <div className='flex gap-4'>
        <div
          className={`${getCategoryColor(sub.category)} flex h-10 w-10 items-center justify-center rounded-full`}
        >
          <span className='text-xs font-medium'>{sub.name.split('')[0]}</span>
        </div>
        <div>
          <h3 className='text-sm font-medium'>{sub.name}</h3>
          <p className='text-dark-gray text-xs'>
            Bills on the {`${sub.billingDate}${getDaySuffix(sub.billingDate)}`}
          </p>
        </div>
      </div>

      <div className='flex items-center gap-4'>
        <div className='text-end'>
          <p className='text-base font-semibold tracking-wider'>
            $ {sub.price}
          </p>
          <p className='text-dark-gray text-xs'>/month</p>
        </div>
        <div className='flex items-center gap-0'>
          <button
            onClick={() => onStageEditSub(sub.id)}
            className='text-dark-gray cursor-pointer rounded-lg p-2 duration-300 hover:scale-105 hover:bg-[#334156] hover:text-white'
          >
            <Pencil size={16} />
          </button>
          <button
            onClick={() => onStageDeleteSub(sub.id)}
            className='text-dark-gray cursor-pointer rounded-lg p-2 duration-300 hover:scale-105 hover:bg-[#334156] hover:text-red-500'
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </li>
  );
}

export default Sub;
