const useLatestState = (setState:any):Promise<any>=>{
    return new Promise((resolve)=>{
        setState((latestState:any)=>{
            resolve(latestState)
            return latestState
        })
    })
}


export default useLatestState