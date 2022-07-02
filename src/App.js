import './App.css';
import store from './redux/store';
import { Provider } from 'react-redux';
//import CakeComponent from './components/cakeComponent';
//import IceCreamComponent from './components/iceCreamComponent';
//import NewCakeComp from './components/NewCakeComp';
//import NewItem from './components/NewItem';
import UsersComp from './components/userComponent';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     
     <UsersComp/>
    </div>
    </Provider>
  );
}



export default App;


