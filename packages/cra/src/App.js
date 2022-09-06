function App() {
  return (
    <div className="App">
      <div>do dynamic import:</div>
      <hr />

      <button
        onClick={async () => {
          const { getTheAnswer } = await import('./the-answer');

          console.log(getTheAnswer());
        }}
      >
        within package
      </button>
      <hr />

      <button
        onClick={async () => {
          const { add } = await import('@dwiyatci/foo-pkg');

          console.log(add(21, 22));
        }}
      >
        across package
      </button>
    </div>
  );
}

export default App;
