function useLatestState(setState:any):Promise<any>{
    return new Promise((resolve:any)=>{
        setState((latestState:any)=>{
            resolve(latestState)
            return latestState
        })
    })
}


export default useLatestState