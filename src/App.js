import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Word Explorer</h1>
        </header>
        <main className="main-section">
          <Dictionary default="blackout" />
        </main>
        <footer>
          <a href="/" target="_blank" rel="noopener norefferrer" title="GitHub">
            Open-source
          </a>{" "}
          code using React by{" "}
          <a
            href="/"
            target="_blank"
            rel="noopener norefferrer"
            title="Portfolio website"
          >
            Alina Vakulenko
          </a>
          <p className="social-links">
            <a
              href="/"
              target="_blank"
              rel="noopener norefferrer"
              title="GitHub"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="/"
              target="_blank"
              rel="noopener norefferrer"
              title="LinkedIn"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="/"
              target="_blank"
              rel="noopener norefferrer"
              title="Telegram"
            >
              <i className="fa-brands fa-telegram"></i>
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
