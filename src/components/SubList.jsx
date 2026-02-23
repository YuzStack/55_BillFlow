import Sub from './Sub';

function SubList({ subs }) {
  return (
    <ul>
      {subs.map(sub => (
        <Sub sub={sub} key={sub.id} />
      ))}
    </ul>
  );
}

export default SubList;
