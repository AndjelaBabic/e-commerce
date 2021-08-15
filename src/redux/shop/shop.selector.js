import { createSelector } from "reselect";

const selectShop = state => state.shop; 


const COLLECTION_ID_MAP = {
    hats: 1, 
    sneakers: 2,
    jackets: 3,
    womens: 4, 
    mens: 5
}

export const selectShopData = createSelector(
    [selectShop], 
    shop => shop.shopData
);

export const selectCollection = collectionUrlParam => createSelector(
    [selectShopData], 
    collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
);