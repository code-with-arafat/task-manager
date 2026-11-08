import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import TaskBoard from '../components/TaskBoard';
import './App.css'

function App() {
  

  return (
    <>
      
      <div className="dashbord">
        <Sidebar/>

        <main className="main-content">
          <div className="nav">
            <Header/>
            <TaskBoard/>
          </div>
        </main>

      </div>




    </>
  )
}

export default App
