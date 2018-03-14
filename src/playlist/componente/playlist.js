import React from 'react'
import Media from './media'
import './playlist.css'
import Play from './../../icons/components/play'

function PlayList(props){
    const categorias = props.data.categories
    return(
        <div className="Playlist">
            <Play size={50} color="red" />
            {categorias.map((categoria)=>{
                return (
                    <div> 
                        <h3>{categoria.title}</h3>
                        <p>{categoria.description}</p><br/>
                        {categoria.playlist.map((item)=>{
                            return <Media {...item} key={item.id}/>
                        })}
                    </div>
                )
            })}
        </div>
    )

}
export default PlayList