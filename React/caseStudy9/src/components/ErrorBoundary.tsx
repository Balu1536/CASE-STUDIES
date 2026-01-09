import React from 'react';


interface Props{
    children: React.ReactNode;
}

interface State{
    hasError:boolean;
}

export class ErrorBoundary extends React.Component<Props, State>{
    state:State={ hasError:false };

    static getDerivedStateFromError(){
        return { hasError:true };
    }

    render(){
        if(this.state.hasError){
            return <div> Component has not loaded, Try again...</div>
        }
        return this.props.children;
    }
}