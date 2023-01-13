import './App.css';
import {useDispatch,useSelector} from 'react-redux'
import {getUsersFetch} from './actions'

function App() {
  const dispatch =useDispatch();
  const users=useSelector(state=>state.myFirstReducer.users);
  console.log("users : ", users)
  return ( 
    <div > 
     
    <button onClick={()=>dispatch(getUsersFetch()) }>click and get users
    </button>
    <div>

    </div>
      

       
    </div>
  );
}

export default App;
