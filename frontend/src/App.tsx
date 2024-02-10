import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Book from './pages/Book';
import ErrorPage from './pages/ErrorPage';
import Day from './pages/Day';
import Week from './pages/Week';
import Goals from './pages/Goals';



const router = createBrowserRouter([
  {
    path: "/",
    Component: Book,
    ErrorBoundary: ErrorPage,
    children: [
      {
        index: true,
        Component: Day,
      },
      {
        path: "day",
        Component: Day,
      },
      {
        path: "week",
        Component: Week,
      },
      {
        path: "goals",
        Component: Goals,
      },
    ]
  }
]);


function App() {
  return <RouterProvider router={router}/>
}

export default App
