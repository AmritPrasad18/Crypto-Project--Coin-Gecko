import { ErrorBoundary } from "react-error-boundary";
import React from "react";

function CustomErrorBoundryUi({error , resetErrorBoundary}){ //these props are automatically given by  Boundary Component from Erroreact-error-boundary component
    return(
        <div className="h-[200vw] flex justify-center items-center px-6">
            <div role="alert" className="alert alert-error">
                <p>Something went wrong!</p>
                <div>{error?.message}</div>
                <button onClick={resetErrorBoundary}>
                    Try Again!
                </button>

            </div>
        </div>
    )
}
export default function CustomErrorBoundry({children}){
 return(
    <ErrorBoundary 
    FallbackComponent={CustomErrorBoundryUi}
    onReset={()=>window.location.reload()}
    >
        {children}
        
    </ErrorBoundary>
 )
}
