import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends Component{
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
                        src={this.props.images} 
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