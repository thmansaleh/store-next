export default function page(props) {
  const qs = props.searchParams;

  return (
    <main>
      <div>
        <h1>test</h1>
        <p>Search Params are {qs.myParam}</p>
      </div>
    </main>
  );
}