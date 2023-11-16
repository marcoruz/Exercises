// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App; 
// ___________________________________________________________________________
import React from 'react';
import './style.css'

const Header = () => {
 return (
 <header>
 <h1>My React Komponenten</h1>
 </header>
 );
};

const Welcome = () => {
 return (
 <section>
 <h2>Willkommen</h2>
 <p>Herzlich willkommen auf meiner einfachen Webseite!</p>
 </section>
 );
};

const AboutMe = () => {
 return (
 <section>
 <h2>Über mich</h2>
 <p>
 Hier ist eine kurze Beschreibung über mich und meine Interessen.
 </p>
 </section>
 );
}

const Contact = () => {
 return (
 <section>
 <h2>Kontakt</h2>
 <p>
 Bei Fragen oder Anregungen können Sie mich gerne kontaktieren:
 Marco Ruzzo Email: marco.ruzzo06@googlemail.com
 </p>
 </section>
 );
}

const counter = () => {
  return (
  <section>
  <h2>Counter</h2>
  <p>
  Counter
  </p>
  </section>
  );
 }

const counter = () => {
  return (
  <footer>
  <p>&copy; 2023 Meine Webseite</p>
  </footer>
  );
 
 };

const App = () => {
 return (
 <div>
 <Header/>
 <main>
 <Welcome/>
 <AboutMe/>
 <Contact/>
 </main>
 <Footer/>

 </div>
 );
};

export default App;