import { TriangleAlert } from 'lucide-react';

function DeleteSubDialog({ selectedSub, onUnstageSub, onDeleteSub }) {
  const handleDeleteSub = function () {
    onDeleteSub(selectedSub.id);
    onUnstageSub();
  };

  return (
    <div className='fixed inset-0 z-20 flex items-center justify-center bg-black/70 backdrop-blur-xs'>
      <div className='bg-light-navyblue w-xs rounded-xl border border-[#334155] p-6 sm:w-sm'>
        <div className='mb-4 grid grid-cols-12'>
          <div className='col-span-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#352C3F]'>
            <TriangleAlert color='#F43E5E' />
          </div>
          <div className='col-span-10'>
            <h3 className='mb-1 text-lg font-semibold'>Delete Subscription</h3>
            <p className='text-light-gray text-sm'>
              Are you sure you want to delete{' '}
              <span className='text-white'>{selectedSub.name}</span>? This
              action cannot be undone.
            </p>
          </div>
        </div>

        <div className='flex gap-3'>
          <button
            onClick={onUnstageSub}
            type='button'
            className='h-10 flex-1 cursor-pointer rounded-lg bg-[#334155] p-2 text-sm font-medium duration-300 hover:scale-102 hover:bg-[#475569] sm:h-12 sm:px-4 sm:py-2.5 sm:text-base'
          >
            Cancel
          </button>
          <button
            onClick={handleDeleteSub}
            className='h-10 flex-1 cursor-pointer rounded-lg bg-rose-600 p-2 text-sm font-medium duration-300 hover:scale-102 hover:bg-rose-500 sm:h-12 sm:px-4 sm:py-2.5 sm:text-base'
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteSubDialog;
