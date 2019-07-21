// https://stackoverflow.com/questions/54979668/how-can-i-share-state-data-between-components-using-custom-hooks
// https://reactjs.org/docs/hooks-reference.html#usecontext
// https://reactjs.org/docs/context.html#when-to-use-context
// https://stackoverflow.com/questions/53451584/is-it-possible-to-share-states-between-components-using-the-usestate-hook-in-r

import React, { useContext } from 'react';
import HomeContext from '../contextAPI/homecontext';

const useHome = () => {
    const { homeState, setHomeState } = useContext(HomeContext);
    return homeState;
}

export {useHome};
