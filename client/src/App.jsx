import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from "react-query"
import Home from './pages/Home'
import MainContentSection from './components/content/MainContentSection'
import Review from './pages/Review'
import Search from './pages/Search'

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>

    	    <Route 
            path='/' 
            element={<Home />}
          />

          <Route element={<Home />}> 
            <Route 
              path='movie/:type' 
              element={<MainContentSection />} 
            />
          </Route>
          
          <Route 
            path='/review/movie/:id' 
            element={<Review />}
           />

          <Route
            path='/search'
            element={<Search />}
           />

        </Routes>
      </Router>
    </QueryClientProvider>
  )
}

export default App
