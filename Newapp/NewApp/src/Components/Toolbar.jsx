import React, { useContext } from 'react'
import themeContext from './themeContext'

function Toolbar() {
    const theme = useContext(themeContext)
  return (
    <div style={{backgroundColor: theme=="dark"?'black':'white',color:theme=="dark"?'white':'black'}}>
        This is Toolbar div
        {theme}
    </div>
  )
}

export default Toolbar