import React, { Component } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import { connect } from 'react-redux';
import { getOrders } from '../store/actions/orderActions';
import Order from '../components/Order';


class UserOrdersScreen extends Component {
  componentDidMount() {
    user_id = 1,
      this.props.getOrders(user_id);
  }

  render() {
    let ordersContent;
    if (this.props.orders === null) {
      ordersContent = (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator size={80} color="#156D14" />
        </View>
      );
    } else {
      console.log(this.props.orders);
      let orders = this.props.orders;
      ordersContent = (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <FlatList
            style={{ width: '100%', marginTop: 5, textAlign: 'center', height: '100%' }}
            data={orders}
            keyExtractor={(item, index) => index.toString()}
            renderItem={(info) => (
              <Order
                key={info.item.id}
                status={info.item.status}
                totalPrice={info.item.total_price}
              />
            )}
          />
        </View>
      );
    }
    return (
      <View>
        {ordersContent}
      </View>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    orders: state.orderReducer.orders,
    loading: state.loadingReducer.loading
  };
};

export default connect(mapStateToProps, { getOrders })(UserOrdersScreen);