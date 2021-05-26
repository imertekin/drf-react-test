import React from 'react';

export const Store = React.createContext();

class contextProvider extends React.Component{

    state={
        token:{'key':'123'}
    }


render(){
    return(
        <Store.Provider>
           
        </Store.Provider>
    )
}

}

export default contextProvider