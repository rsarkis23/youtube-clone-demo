import Header from './components/Header'
import Sidebar from './components/Sidebar'
import RecommendedVideos from './components/RecommendedVideos'
import SidebarRow from './components/SidebarRow'
import './App.css'


function App() {
  return (
    <div className="App">
      <Header />
      <div className='app__page'>
        <Sidebar />
        <RecommendedVideos />
      </div>
      
    </div>
  )
}

export default App;
