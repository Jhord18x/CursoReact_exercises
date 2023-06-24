import logo from './logo.svg';
import './App.css';
import ContactListComponent from './components/containers/contactList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='contact-list-main'>
          <h1 className=''> Mis contactos </h1>
          <ContactListComponent></ContactListComponent>
        </div>
      </header>
    </div>
  );
}

export default App;
