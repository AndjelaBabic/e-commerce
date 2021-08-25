import React from 'react'; 
import CollectionsOverview from '../../components/collection/collections-overview/collections-overview.component';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
import { connect } from 'react-redux';
import {
    firestore,
    convertCollectionsSnapshotToMap
  } from '../../firebase/firebase.utils.js';
  import { updateCollections } from '../../redux/shop/shop.actions';
  import WithSpinner from '../../components/util/withSpinner/withSpinner.component';
  
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
  
  
// TODO Check why in shop page I'm not able to use hooks or to have class component 

class ShopPage extends React.Component {

    state = {
        loading: true
      };
    
    unsubscribeFromSnapshot = null;
    
    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');
        
        collectionRef.get().then(snapshot => {
          const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
          console.log(collectionsMap);
          updateCollections(collectionsMap);
          this.setState({ loading: false });
        });
      }
    
    
      render() {
        const { match } = this.props;
        const { loading } = this.state;
        return (
          <div className='shop-page'>
            <Route
              exact
              path={`${match.path}`}
              render={props => (
                <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
              )}
            />
            <Route
              path={`${match.path}/:collectionId`}
              render={props => (
                <CollectionPageWithSpinner isLoading={loading} {...props} />
              )}
            />
          </div>
        );
      }
    }
    
    const mapDispatchToProps = dispatch => ({
      updateCollections: collectionsMap =>
        dispatch(updateCollections(collectionsMap))
    });

export default connect(
    null,
    mapDispatchToProps
  )(ShopPage);
  