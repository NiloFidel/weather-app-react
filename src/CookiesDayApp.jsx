import React from 'react'
import { CardComponent } from './components/CardComponent'
import { FileUploaderComponent } from './components/FileUploaderComponent'
import { Navigate, Route, Routes } from 'react-router-dom'
import { UserRegisterComponent } from './components/UserRegisterComponent'
import { LoginComponent } from './components/LoginComponent'
import { SliderCompnent } from './components/SliderComponent'
import { SearcherComponent } from './components/SearcherComponent'

export const CookiesDayApp = () => {
  return (
    <Routes>
      <Route path='/' element={<SearcherComponent/>}></Route>
      <Route path='/cards' element={<CardComponent/>}></Route>
      <Route path='/post' element={<FileUploaderComponent/>}></Route>
      <Route path='/user/register' element={<UserRegisterComponent/>}></Route>
      <Route path='/user/login' element={<LoginComponent/>}></Route>
    </Routes>
  )
}
