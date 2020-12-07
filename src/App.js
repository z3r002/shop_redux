import './App.css';
import {connect} from "react-redux";
import {productsFetchData} from "./actions/products";
import {Component} from "react";


class App extends Component {

    componentDidMount() {
        this.props.fetchData('http://localhost:7070/api/items')
    }

    render() {
       return (

           <div>
               {
                   this.props.products.map((product, index)=>(
                       <div className='product-wrap'>
                           <div className='product-item'>
                               <img src={product.images[1]}/>
                               <div className='product-buttons'>
                                   <a href='' className='button'>В Корзину</a>
                               </div>
                           </div>
                           <div className='product-title'>
                               <a href=''>{product.title}</a>
                               <span className='product-price'>{ product.price} $</span>
                           </div>

                       </div>
                   ))
               }
           </div>




       );
   }


}
const mapStateToProps = state => {
  return {
      products: state.products
  };
};
const mapDispatchToProps = dispatch => {
  return{
      fetchData: url => dispatch(productsFetchData(url))
  };
};

export default connect(mapStateToProps,mapDispatchToProps) (App);
