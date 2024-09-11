import "./App.css";

function App() {
  return (
    <div>
      <header className="App-header">
        <div class="WaveContainer">
          <div class="wave-wrap">
            <svg
              viewBox="0 0 1440 320"
              xmlns="http://www.w3.org/2000/svg"
              class="wave"
            >
              <path
                fill="#0cde92"
                d="M0,0L48,16C96,32,192,64,288,64C384,64,480,32,576,32C672,32,768,64,864,64C960,64,1056,32,1152,16C1248,0,1344,0,1392,0L1440,0L1440,320L0,320Z"
              ></path>
            </svg>
            <svg
              viewBox="0 0 1440 320"
              xmlns="http://www.w3.org/2000/svg"
              class="wave"
            >
              <path
                fill="#0cde92"
                d="M0,0L48,16C96,32,192,64,288,64C384,64,480,32,576,32C672,32,768,64,864,64C960,64,1056,32,1152,16C1248,0,1344,0,1392,0L1440,0L1440,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>

        <div className="Text">
          <h1>Welcome to the spare site website</h1>
          <p>Spare site website oui</p>
          <h6>test</h6>
        </div>
        <div className="Text">
          <h1>Welcome to the spare site website</h1>
          <p>Spare site website oui</p>
          <h6>test</h6>
        </div>
      </header>
      <div className="App-body">
        <p>This is a spare site website</p>
      </div>
    </div>
  );
}

export default App;
