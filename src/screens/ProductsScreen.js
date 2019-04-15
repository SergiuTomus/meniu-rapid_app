import React, { Component } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import { connect } from 'react-redux';
import { getProducts, addToCart } from '../store/actions/orderActions';
import Product from '../components/Product';
import ShoppingCart from '../components/ShoppingCart';

class ProductsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (<ShoppingCart navigation={navigation} />)
    };
  };

  componentDidMount() {
    const id = this.props.navigation.getParam('id', 'no_key');
    this.props.getProducts(id);
  }

  productSelected = (product) => {
    const product_order = {
      product_id: product.id,
      product_name: product.name,
      single_price: product.price
    };
    this.props.addToCart(product_order);
  }

  render() {
    let productsContent;
    if (this.props.products === null) {
      productsContent = (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator size={80} color="#156D14" />
        </View>
      );
    } else {
      productsContent = (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <FlatList
            style={{ width: '100%', marginTop: 5, textAlign: 'center', height: 320 }}
            data={this.props.products.Products}
            keyExtractor={(item, index) => index.toString()}
            renderItem={(info) => (
              <Product
                productName={info.item.name}
                key={info.item.id}
                onItemPressed={() => this.productSelected(info.item)}
              />
            )}
          />
        </View>
      );
    }
    return (
      <View>
        {productsContent}
      </View>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    products: state.orderReducer.products,
    loading: state.loadingReducer.loading
  };
};

export default connect(mapStateToProps, { getProducts, addToCart })(ProductsScreen);