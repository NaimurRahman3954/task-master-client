import { RouterProvider } from 'react-router-dom'
import './App.css'
import Router from './Routes/Router'

function App() {
  return (
    <div className="App">
      <div className="max-w-[1440px] mx-auto">
        {/* check this later ↑ 🛑 */}
        <RouterProvider router={Router}></RouterProvider>
      </div>
    </div>
  )
}

export default App
