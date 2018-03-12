import React from 'react'
import {render} from 'react-dom'
import PlayList from './src/playlist/componente/playlist'
import data from './src/api.json'

const app =  document.getElementById('app')

render(<PlayList data={data}/>, app)