import React from 'react'; 
import "./collection.styles.scss";

import CollectionItem from '../../components/collection/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selector';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

const CollectionPage = () => {
    const params = useParams(); 
    const collection = useSelector(selectCollection(params.collectionId)); 
    const { title, items } = collection;
    return (
    <div className="collection-page">
        <h2 className='title'> {title} </h2>
        <div className='items'>
            {
                items.map(item => (
                    <CollectionItem key={item.id} item={item}></CollectionItem>
                ))
            }
        </div>
    </div>
)};

export default CollectionPage; 