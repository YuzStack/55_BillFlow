import Sub from './Sub';

function SubList({ subs }) {
  return (
    <ul className='max-h-80 overflow-y-scroll'>
      {subs.map(sub => (
        <Sub sub={sub} key={sub.id} />
      ))}
    </ul>
  );
}

export default SubList;
