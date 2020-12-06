export function productsFetchDataSuccess(products){
    return {
        type: "PRODUCTS_FETCH_DATA_SUCCESS",
        products
    }
}

export function productsFetchData(url){
    return (dispatch) => {
        fetch(url)
            .then(response => {
                if(!response.ok){
                    throw new Error(response.statusText)
                }
                return response;
            })
            .then(response=> response.json())
            .then(products => dispatch(productsFetchDataSuccess(products)))

    }
}