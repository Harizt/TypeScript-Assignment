const mergeSortArray: (collection_1: number[], collection_2: number[]) => number[] = function (
    collection_1: number[],
    collection_2: number[]
  ): number[] {
      let mergeArray:number[] = []
      let index_c1: number = 0
      let index_c2: number = 0
      while (index_c1 < collection_1.length && index_c2 < collection_2.length) {
        if (collection_1[index_c1] <= collection_2[index_c2]){
          mergeArray.push(collection_1[index_c1])
          index_c1+=1
        }
        else {
          mergeArray.push(collection_2[index_c2])
          index_c2+=1
        }
    }
      if (index_c1 >= collection_1.length && index_c2 < collection_2.length){
        mergeArray.push(...collection_2.slice(index_c2, collection_2.length))
      }
      if (index_c2 >= collection_2.length && index_c1 < collection_1.length){
        mergeArray.push(...collection_1.slice(index_c1, collection_1.length))
      }
    return mergeArray;
  };
//   console.log(mergeSortArray([1,4,4,10,11], [2,6,7,7,9]))
  
  export {mergeSortArray};