import React from 'react'

import {AppProvider} from '../../Provider/AppProvider'

import AppLayout from '../AppLayout'
import AppBar from '../AppBar'

import Settings from '../Settings'
import Dashboard from '../Dashboard'
import Content from '../Shared/Content'

import './App.css'

function App() {
  return (
    <AppLayout>
      <AppProvider>
        <AppBar />
        <Content>
          <Settings />
          <Dashboard />
        </Content>
      </AppProvider>
    </AppLayout>
  )
}

export default App
