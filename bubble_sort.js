
bubbleSort = (arr) => {
    let count = arr.length

    while (count > 0) {
        arr.forEach((n, i) => {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
            }           
        })
      count--
    }
    // return arr   
    console.log(arr) 
}


bubbleSort([4,3,78,2,0,2])