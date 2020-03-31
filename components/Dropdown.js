import React, { Component } from 'react';

class Dropdown extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu(event) {
    
    if (!this.dropdownMenu.contains(event.target)) {
      
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
      
    }
  }

  render() {
    return (
      <div>
        <button type="button" className="btn btn-danger" style={{marginTop:15}} onClick={this.showMenu}>
          What are you looking for? 
        </button>
        
        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <button type="button" className="btn btn-success" style={{marginTop:10}}> Completly Vegan </button>
                <button type="button" className="btn btn-info" style={{marginLeft:20, marginTop:10}}> Mixed </button>
                
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}

export default Dropdown