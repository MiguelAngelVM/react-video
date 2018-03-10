import React from 'react'
import {render} from 'react-dom'
import Media from './src/playlist/componente/media'

const app =  document.getElementById('app')

render(<div><Media title="Diseño responsivo" 
            images="./images/covers/responsive.jpg"
            author="Miguel Angel Ventura Marin" />
            <Media title="Diseño responsivo" 
            images="./images/covers/responsive.jpg"
            author="Miguel Angel Ventura Marin" /></div>, app)