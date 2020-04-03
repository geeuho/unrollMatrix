//Assumed the matrix was a square array
//Example odd length matrix
let myMatrix = [[1, 2, 3, 4, 5],
                [16, 17, 18, 19, 6],
                [15, 24, 25, 20, 7],
                [14, 23, 22, 21, 8],
                [13, 12, 11, 10, 9]];
//Example even length matrix
let myMatrix2 = [[1, 2, 3, 4],
                [12, 13, 14, 5],
                [11, 16, 15, 6],
                [10, 9, 8, 7]]
//For storing results
let array = []
// let factor = 0
let unroll = (matrix, xStart, yStart, yEnd, xEnd) => {
  console.log('new start')
  //for cases where there is a middle element in odd numbered matrix
  if(xStart == xEnd){
    array.push(matrix[xStart][yStart])
    console.log(array)
    return array
  } 
  //Push the origin before starting loop
  array.push(matrix[yStart][xStart])
  // Start adding elements from the matrix one index right of the origin so condition of while loop can terminate when hitting origin again
  let i = yStart;
  let j = xStart + 1;

  //When the loop hits the origin again, terminate loop
    while(matrix[i][j] !== matrix[yStart][xStart]){
      array.push(matrix[i][j])
      console.log('loopdeloop')
      // Expected conditions written in reverse order to prevent conflict
      // When you hit the left side of matrix go up to origin
      if(j == xStart){
        i--
      } 
      // When you hit the bottom of matrix go left
      else if(i == yEnd){
        j--
      } 
      //When you hit the right of the matrix go down
      else if(j == xEnd){ 
        i++
      } 
      //Default start, move index to the right 
      else {
        j++
      }
      console.log(array, xStart, xEnd, yStart, yEnd, i, j)
    }
  //If another layer exists in the matrix, run with the origin point of next layer, last condition written to check for odd matrices
  if(!!matrix[yStart + 1][xStart + 1] && !!(xEnd > xStart) && (xEnd - xStart >= 2)){
    console.log(xStart, xEnd , yStart, yEnd, 'length')
    unroll(matrix, yStart + 1, xStart + 1, xEnd - 1, yEnd - 1)
  //if not return the array
  } else {
    console.log(array, 'returned!')
    return array
  }
}

//Run intial function with the origin and the start and the length/width of matrix)
//Example case for odd length square matrix(assumes square matrix)
unroll(myMatrix, 0, 0, myMatrix.length - 1, myMatrix[0].length - 1)
//Example case for even length square matrix
// unroll(myMatrix2, 0, 0, myMatrix2.length - 1, myMatrix2[0].length - 1)
