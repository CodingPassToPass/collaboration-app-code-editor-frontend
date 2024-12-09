import { LinearProgress, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export default function CodeRunnerOutput(){

    const dispatch = useDispatch();
    const {   responseOutput, isCodeRunLoading } = useSelector(state=>state.editor);
    
      console.log(responseOutput);
    return(
        <div style={{ position:"absolute", bottom:"0px", width:"100%", height:"30%", color:"white", background:"rgb(66, 71, 105)", overflow:"scroll"}}>
            {
                isCodeRunLoading
                ?
                (<div style={{ display:"flex", flexDirection:"column", justifyContent:"space-between", width:"100%",height:"100%"}}>
                    <LinearProgress  sx={{
                                          height:"5px", 
                                          backgroundColor:"rgb(239, 236, 236)" ,
                                          '& .MuiLinearProgress-bar':{
                                              backgroundColor: "rgb(31, 156, 150)",
                                          }
                                        }}/>
                    <LinearProgress  sx={{
                                          height:"6px", 
                                          backgroundColor:"rgb(239, 236, 236)" ,
                                          '& .MuiLinearProgress-bar':{
                                              backgroundColor: "rgb(31, 156, 150)",
                                          }
                                      }}/>
                </div>)
                :
                (<div>
                {
                    responseOutput
                    ?
                    (<>
                    {
                        responseOutput?.run?.stderr===""
                        ?
                        (<div className="output">
                            <Typography sx={{whiteSpace:"pre-wrap"}}>{responseOutput?.run?.output}</Typography>
                            <Typography sx={{marginTop:"25px"}}>=== Code Execution Successful ===</Typography> 
                        </div>)
                        :
                        (<div>
                            <Typography sx={{whiteSpace:"pre-wrap", color:"rgb(250, 93, 93)"}}>{responseOutput?.run?.output}</Typography>
                            <Typography sx={{marginTop:"25px"}}>=== Code Exited With Errors ===</Typography>
                        </div>)
                    }
                    </>)
                    :
                    (<div>
                        <Typography>=== Code Outputs !! ===</Typography>
                    </div>)
                    
                }
            </div>)
            }
        </div>
    )
}