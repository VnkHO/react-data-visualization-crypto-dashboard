import React from 'react'

import {AppProvider} from '../../Provider/AppProvider'

import AppLayout from '../AppLayout'
import AppBar from '../AppBar'

import Settings from '../Settings'

import './App.css'

function App() {
  return (
    <AppLayout>
      <AppProvider>
        <AppBar />
        <Settings />
      </AppProvider>
    </AppLayout>
  )
}

export default App
