import React from 'react'; 
import CollectionsOverview from '../../components/collection/collections-overview/collections-overview.component';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';


// TODO Check why in shop page I'm not able to use hooks or to have class component 

const ShopPage = ({match}) => {
    console.log(match)
    return (
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview}></Route> 
        <Route path={`${match.path}/:collectionId`} component={CollectionPage}></Route>
    </div>
    )
};

export default ShopPage; 