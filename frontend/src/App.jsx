import './App.css'


import AddExpense from './components/AddExpense'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideBar from './components/SideBar'
import AllExpense from './components/AllExpense'
import Home from './components/Home';
function App() {



  return (
    <div className='app'>
      <Router>
      <SideBar />

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/allexpense' element={<AllExpense />}></Route>
        <Route path="/addexpense" element={<AddExpense />}></Route>
      </Routes>
      </Router>

    </div>
  )
}

export default App