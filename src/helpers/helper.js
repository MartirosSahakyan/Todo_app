function idGenerator() {
    let id = 0
    return () =>{
        return id+= 1 
    }
}
const createNewId = idGenerator()




export {createNewId}