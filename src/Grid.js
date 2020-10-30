import React from 'react';

export default function Grid(props) {
  // map through tileData
  // let tileArr = props.tileData.map((x, i) => i)
  let grid = []
  let subArr = []

  for (let j = 0; j < props.tileData.length; j++) {
    let col = <div onClick={() => props.onTileClicked(props.tileData[j])} className='col btn-primary' style={{ width: '150px' }}>{props.tileData[j].id}</div>
    subArr.push(col)
    if ((j + 1) % 4 === 0) {
      //console.log("in if")
      let row = <div className='row btn-primary' style={{ height: '150px' }}>{subArr}</div>
      grid.push(row)
      subArr = []
    }
  }
  console.log(grid, subArr)
  return (
    <div className='container'>
      {grid}
    </div>
  )
}
