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
               <ul>
                   {
                       this.props.products.map((product, index)=>(
                           <div className='item' key={index}>
                               <img className='img' src={product.images[1]}/>

                           </div>
                       ))
                   }

               </ul>


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
