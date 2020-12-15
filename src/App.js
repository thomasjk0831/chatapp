import './App.css';
import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'
import TextField from '@material-ui/core/TextField'

const socket = io.connect('http://localhost:4000')

function App() {
  const [state, setState] = useState({ message: '', name: '' })
  return (
    <div className="App">
      test
    </div>
  );
}

export default App;
