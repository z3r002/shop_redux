import {productsFetchData} from "../actions/products";
import {connect} from "react-redux";
import {Link, NavLink} from "react-router-dom";
import {Component} from "react";

class HomePage extends Component {

    componentDidMount() {
        this.props.fetchData('http://localhost:7070/api/items')
    }

    render() {
        return (
            <div>
                <div className='item'>
                    {
                        this.props.products.map((product, index) => (
                            <div className='product-wrap'>
                                <div className='product-item'>
                                    <img src={product.images[1]}/>
                                    <div className='product-buttons'>
                                        <a href='' className='button'>В Корзину</a>
                                    </div>
                                </div>
                                <div className='product-title'>
                                    {/*<Link to ={{pathname: '/details', state: {data: product.price}}}>{product.title}</Link>*/}
                                    <NavLink to={{
                                        pathname: "/details",
                                       aboutProps:{name: 'suck'}
                                    }}>{product.title}</ NavLink>
                                    <span className='product-price'>{product.price} $</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
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
    return {
        fetchData: url => dispatch(productsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);