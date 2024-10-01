import { Square } from "./Square"
export function Column({children, updateBoard, index}) {
    return(
        <>
        {
            children.map((_,indx)=>{
                return (
                    <Square key={`${index} ${indx}`} updateBoard={updateBoard} index={index}>
                        {children[indx]}
                    </Square>
                )
            })
        }
        
        </>

    )
}