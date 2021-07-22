// function idGenerator() {
//     let id = 0
//     return () =>{
//         return id+= 1
//     }
// }
// const createNewId = idGenerator()

const createNewId = () => {
  return Date.now();
};

export { createNewId };
