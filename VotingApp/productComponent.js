import React from 'react'

class Product extends React.Component{
    render(){
        const art = {
            width:'200px'
        }
        return(
            <div className='item' style={{  display:'flex', backgroundColor:'#CCD6DD',padding:'10px',margin:'5px',borderRadius:'5px'}}>
                <div style={{borderRadius:'4px' ,width:'30%' }} className='image'>
                    <img style={art} src= {this.props.productImageUrl} alt='gif'/>
                </div>
                <div className='middle'>

                    <div className='description'>
                      <a>{this.props.title}</a>
                      <p>{this.props.description}</p>
                    </div>
                    <div className='extra'>
                            <span>Submitted by : </span>
                            <img style={{width:'40px', borderRadius:'10px'}} src={this.props.submitterAvatarUrl} alt='Avater'/>
                    </div>
                </div>

            </div>
        );
    }
}


export default Product
