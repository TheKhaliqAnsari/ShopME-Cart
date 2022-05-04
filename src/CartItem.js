import React from "react";

class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      price: 10000,
      title: "iPhone",
      qty: 1,
      img: "",
    };
  }
  // increase Qty :-
  increaseQty = () => {
      // this.state.qty += 1;
      // console.log('this', this.state);
      //form one
      // this.setState({
      //   qty: this.state.qty + 1
      // });
      // form 2
      this.setState((prevState) => {
        console.log('this.qty', this.state.qty);
        return{
          
          qty: prevState.qty + 1,
          
        }
        
      }, () => {
         console.log('this.state', this.state);
      });
  }
  // decrese Qty:-
  decreseQty = () => {
    

    this.setState((prevState) => {
      const {qty} = this.state;
      if(qty === 1){
        return;
      }
      return{
        
        qty: prevState.qty - 1
      }
    });
  }
  render() {
    const { price, title, qty } = this.state;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color: "#777" }}>Rs : {price}</div>
          <div style={{ color: "#777" }}>Qty : {qty}</div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img
              alt="increase"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
              onClick={this.increaseQty}
            />

            <img
              alt="decrese"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
              onClick={this.decreseQty}
            />

            <img
              alt="delete"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/1/1570.png"
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: "#ccc",
  },
};

export default CartItem;
