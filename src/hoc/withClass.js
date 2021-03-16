import React from 'react';

const withClass = (WrappedContent,className) =>{
    return props =>(
        <div className={className}>
            <WrappedContent {...props}/>
        </div>
        
    );
}

export default withClass;