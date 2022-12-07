import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Word Explorer</h1>
        </header>
        <main className="main-section">
          <form>
            <input
              type="search"
              placeholder="Enter a keyword..."
              autoFocus="on"
              className="form-control"
            ></input>
            <input
              type="submit"
              value="Search"
              className="btn btn-warning search-button"
            ></input>
          </form>
          <section>Pronunciation</section>
          <section>Definition</section>
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
              <i class="fa-brands fa-github"></i>
            </a>
            <a
              href="/"
              target="_blank"
              rel="noopener norefferrer"
              title="LinkedIn"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="/"
              target="_blank"
              rel="noopener norefferrer"
              title="Telegram"
            >
              <i class="fa-brands fa-telegram"></i>
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
