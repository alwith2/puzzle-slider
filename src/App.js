import { Component } from 'react';
import Grid from './Grid';

class App extends Component {
  constructor() {
    super();

    this.state = {
      tileData: [

        { id: 0, currRow: 1, currCol: 1 }, { id: 1, currRow: 1, currCol: 2 }, { id: 2, currRow: 1, currCol: 3 }, { id: 3, currRow: 1, currCol: 4 },
        { id: 4, currRow: 2, currCol: 1 }, { id: 5, currRow: 2, currCol: 2 }, { id: 6, currRow: 2, currCol: 3 }, { id: 7, currRow: 2, currCol: 4 },
        { id: 8, currRow: 3, currCol: 1 }, { id: 9, currRow: 3, currCol: 2 }, { id: 10, currRow: 3, currCol: 3 }, { id: 11, currRow: 3, currCol: 4 },
        { id: 12, currRow: 4, currCol: 1 }, { id: 13, currRow: 4, currCol: 2 }, { id: 14, currRow: 4, currCol: 3 }, { id: 15, currRow: 4, currCol: 4 },
      ],
    }


    this.handleReset = this.handleReset.bind(this);
    this.tileClick = this.tileClick.bind(this);

  }

  tileClick(tileObj) {
    // blanktile is tile with id 0

    if (tileObj.id !== 0) {
      // parameter of function
      let tempObj = this
      // store variable for state of data structure
      let tempArr = this.state.tileData
      // store variable for location of blank tile
      var blankLoc = 0
      // store variable for location of tile to swap
      var targetLoc = 0
      // for loop to count through tiles
      for (let i = 0; i < 16; i++) {

        // set the blank tile to equal id 0 by using if statement to determine if the index of the id is 0
        if (this.state.tileData[i].id === 0) {
          blankLoc = i;
          console.log(this.state.tileData[i].currRow, this.state.tileData[tileObj.id].currRow);
          // if(currRow and currCol is one less or one more than blankTile)
          // if true, swap
          //else don't swap
          // if the absolute value of the row of blankLoc - the row of the target =1 and same for col, valid move
          if ((Math.abs(this.state.tileData[i].currRow - this.state.tileData[tileObj.id].currRow) === 1 &&
            Math.abs(this.state.tileData[i].currCol - this.state.tileData[tileObj.id].currCol) === 1)) {
            console.log("oneDifference");
          }

        }
        // the index of targetLoc is set by determining that id is not 0
        else if (this.state.tileData[i].id === tileObj.id) {
          targetLoc = i;
        }

      }

      tempArr[blankLoc].id = tileObj.id;
      tempArr[targetLoc].id = 0;
      this.setState({
        tileData: tempArr
      })
    }
  }
  // if(currRow and currCol is one less or one more than blankTile)
  // swap with blankTile
  // in same row = id is one less or one more
  // in same col = id is one less or one more
  // if true, swap
  //else don't swap
  // set new state
  // swap tiles



  // console.log(blankLoc);
  // console.log(targetLoc);
  // console.log(tileObj.id);
  //}


  winState() {
    // make win state when ids = values
    // tileData: tileData
  }

  // checkWin
  checkWin(e) {
    // const winArr = this.state.tileData.id
    // const tempArr = this.state.winPosition

    // const winPosition = (element) => element.id == winArr;


  }
  // get arr of items
  // set winPosition
  // loop through
  // look at index of
  // check each index



  // setWinState
  // value: winState

  // assert moveTile

  // devMode = true

  // randomState
  handleReset(e) {
    // shuffle state

  }

  // winState


  render() {
    return (

      <>
        <h1>Sliding Puzzle</h1>
        <Grid key={this.id} tileData={this.state.tileData} onTileClicked={this.tileClick} />
        <button onClick={this.handleReset} > Reset </button>
      </>


    )
  }

}


export default App;
