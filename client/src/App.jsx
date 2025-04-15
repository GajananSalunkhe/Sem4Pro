import React from 'react'
import {Route, Routes, useMatch} from 'react-router-dom'
import Home from './pages/student/Home'
import CoursesList from './pages/student/CoursesList'
import CourseDetails from './pages/student/CourseDetails'
import MyEnrollment from './pages/student/MyEnrollment'
import Player from './pages/student/Player'
import Loading from './components/student/Loading'
import Educator from './pages/educator/Educator'
import Dashboard from './pages/educator/Dashboard'
import AddCourses from './pages/educator/AddCourses'
import MyCourses from './pages/educator/MyCourses'
import StudentEnrolled from './pages/educator/StudentEnrolled'
import Navbar from './components/student/Navbar'
import "quill/dist/quill.snow.css";
const App = () => {
  const isEducatorRoute = useMatch('/educator/*') 
  return (
    <div className='text-default min-h-screen bg-white'>
      {!isEducatorRoute && <Navbar /> }
      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/course-list' element = {<CoursesList />}/>
        <Route path='/course-list/:input' element = {<CoursesList />}/>
        <Route path='/course-list/course/:id' element = {<CourseDetails />}/>
        <Route path='/course-list/:input/course/:id' element = {<CourseDetails />}/>
        <Route path='/course/:id' element = {<CourseDetails />}/>
        <Route path='/my-enrollments' element = {<MyEnrollment />}/>
        <Route path='/player/:courseId' element = {<Player />}/>
        <Route path='/loading/:path' element = {<Loading />}/>
        <Route path='/educator' element = {<Educator />}>
          <Route path='/educator' element = {<Dashboard/>}/>
          <Route path='add-courses' element = {<AddCourses/>}/>
          <Route path='my-courses' element = {<MyCourses/>}/>
          <Route path='student-enrolled' element = {<StudentEnrolled/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
