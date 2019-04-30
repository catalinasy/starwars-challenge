import React, { PureComponent } from 'react'

export default class List extends PureComponent {
  render() {
    return (
      <div className="ListContainer">
        <ul>
            <li className="ListItem">First Item</li>
            <li className="ListItem">Second Item</li>
            <li className="ListItem">Third Item</li>  
        </ul>
      </div>
    )
  }
}
