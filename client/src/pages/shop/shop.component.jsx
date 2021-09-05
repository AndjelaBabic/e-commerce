import React, { useEffect, useState } from "react";
import CollectionsOverview from "../../components/collection/collections-overview/collections-overview.component";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/util/withSpinner/withSpinner.component";
import CollectionPageContainer from "../collection/collection.container";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);

// TODO Check why in shop page I'm not able to use hooks or to have class component

const ShopPage = ({ fetchCollectionsStart, match }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCollectionsStart();
    setLoading(false); 
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`} component={CollectionPageContainer}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
