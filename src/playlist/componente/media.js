import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends PureComponent{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = (event) => {
        console.log(this.props.title);
    }
    render(){
        const styles = {
            container: {
              color: '#44546b',
              cursor: 'pointer',
              width: 260,
              border: '1px solid red'
            }
        }
        return(
            <div className='Media' onClick={this.handleClick}>
                <div className='Media-cover'>
                    <img 
                        src={this.props.cover} 
                        atl="" 
                        width={260}
                        height={160}/>
                </div>
                <h3 className="Media-title">{this.props.title}</h3>
                <p className="Media-author">{this.props.author}</p>
            </div>
        )
    }
} 

Media.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    type: PropTypes.oneOf(['video', 'audio']),
}
  
export default Media



/*
	constructor(){
	// Enlazo (bind) eventos y/o inicializo estado
	}
	componentWillMount(){
	// Se ejecuta antes de montar el componente
	// Se podría usar para hacer un setState()
	}
	render(){
	// Contiene todos los elementos a renderizar
	// podrías usarlo para calcular propiedades (ej: concatenar una cadena)
	}
	componentDidMount(){
	//Solo se lanza una vez
	//Ideal para llamar a una API, hacer un setInteval, etc
	}

	//Actualización:
	componentWillReceiveProps(){
	//Es llamado cuando el componente recibe nuevas propiedades.

	}
	shouldComponentUpdate(){
	//Idea para poner una condición y  si las propiedades que le llegaron anteriormente
	// eran las mismas que tenia retornar false para evitar re-renderear el componente
	}
	componentWillUpdate(){
	//metodo llamado antes de re-renderizar el componente si shouldComponentUpdate devolvió true
	}

	// re-render si es necesario...

	componentDidUpdate(){
	//Método llamado luego del re-render
	}
	componentWillUnmount(){
	//Método llamado antes de desmontar el componente
	}
	componentDidCatch(){
	// Si ocurre algún error, lo capturo desde acá:
	}

*/
