import Sub from './Sub';

function SubList({ subs, onStageDeleteSub, onStageEditSub }) {
  return (
    <ul className='max-h-80 overflow-y-scroll'>
      {subs.map(sub => (
        <Sub
          sub={sub}
          key={sub.id}
          onStageDeleteSub={onStageDeleteSub}
          onStageEditSub={onStageEditSub}
        />
      ))}
    </ul>
  );
}

export default SubList;
