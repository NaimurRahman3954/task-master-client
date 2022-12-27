import { RouterProvider } from 'react-router-dom'
import './App.css'
import Router from './Routes/Router'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

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
