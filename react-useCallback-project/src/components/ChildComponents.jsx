import React from 'react'

const ChildComponents = React.memo(
    (props) => {
        console.log('Child Components go re-rendered again')
      return (
        <div>
          <button onClick={props.handleClick}>
                {props.buttonName}
          </button>
        </div>
      )
    }
)

export default ChildComponents
//React.memo -> wrap -> component-> component re-render tabhi hoga jab props change honge
//  , nhi to re-render nhn hoga

// If u r sending a function then react.memo won't save u
