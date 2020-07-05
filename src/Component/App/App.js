import React from 'react'

import {AppProvider} from '../../Provider/AppProvider'

import WelcomeMessage from '../WelcomeMessage'
import AppLayout from '../AppLayout'
import AppBar from '../AppBar'

import './App.css'

function App() {
  return (
    <AppLayout>
      <AppProvider>
        <AppBar />
        <WelcomeMessage />
      </AppProvider>
    </AppLayout>
  )
}

export default App
