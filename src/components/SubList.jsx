import Sub from './Sub';

function SubList({ subs, onStageDeleteSub }) {
  return (
    <ul className='max-h-80 overflow-y-scroll'>
      {subs.map(sub => (
        <Sub sub={sub} key={sub.id} onStageDeleteSub={onStageDeleteSub} />
      ))}
    </ul>
  );
}

export default SubList;
