import './App.css';
import Sidebar from './Component/Sidebar';
import Mainbar from './Component/Mainbar';


function App() {
  return (
    <div className='inline-flex m-16'>
      <Sidebar />
      <Mainbar />
    </div>
  );
}

export default App;
