
//import './App.css'
import {Routes, Route, Link} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Categories from './pages/Categories'
import PostView from './pages/PostView'
import './styles/main.scss'


function App(){
    return (
        <>
            <nav>
                <Link to="/">Homepage</Link>
                <Link to="/categories">Categories</Link>
                <Link to="/posts">View all posts</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/posts" element={<PostView />} />
                <Route path="/posts/:id" element={<PostView />} />
            </Routes>


        </>
    )
}




export default App


