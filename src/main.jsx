import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Root from './Component/Root/Root';
import JobDetails from './Pages/JobDetails/JobDetails';
import Jobs from './Pages/Jobs/Jobs';
import AppliedJobs from './Pages/AppliedJobs/AppliedJobs';
import Statistics from './Pages/Statistics/Statistics';
import Blog from './Pages/Blog/Blog';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: `/job/:id`,
        element: <JobDetails></JobDetails>,
        loader: () => fetch('../jobs.json')
        
      },
      {
        path: '/jobs',
        element: <Jobs></Jobs>
      },
      {
        path: '/appliedjobs',
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch("../jobs.json")
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/blogs',
        element: <Blog></Blog>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
