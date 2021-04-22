import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, onChangePage } from '../redux/actions/products';
import { getPageChange } from '../configuration/app';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { ProductItem, Loader, SortPopup, CategoryFilter } from "../components/_index";
import ReactPaginate from "react-paginate";
import "../sass/components/Pagination.sass";

const categoryNames = ['Dairy and Eggs', 'Fruits and Vegetables', 'Drinks']
const sortItems = [
    { name: 'popular',  type: 'popular' },
    { name: 'price',    type: 'price'   },
    { name: 'name',     type: 'name'    },
]
  
function ProductPage() {
    const dispatch  = useDispatch()
    const items = useSelector(({products}) => products.items)
    const isLoaded = useSelector(({products}) => products.isLoaded)
    const { category, sortBy } = useSelector(({ filters }) => filters)

    useEffect(() => {
        dispatch(fetchProducts(category, sortBy))
    }, [category, sortBy]);
    
    const onSelectCategory = index => {
        dispatch(setCategory(index))
    };
    
    const onSelectSortType = type => {
        dispatch(setSortBy(type.name))
    };

    const handlePageChange = ({ selected }) => {
        getPageChange(selected + 1);
        dispatch(onChangePage(selected + 1));
    }

    const pageCount = Math.ceil(items.totalRecords / items.pageSize)

    console.log("items", items)
    return (
        <div className="content-inner">
            <div className="content-stretch space-bottom">
                <CategoryFilter
                    items = { categoryNames }
                    activeCategory = { category }
                    onClickCategory = { onSelectCategory }
                />

                <SortPopup
                    items = { sortItems }          
                    activeSortType = { sortBy }
                    onClickSortType = { onSelectSortType }
                /> 
            </div>
            
            <div className="list__item">
                {
                    
                    isLoaded ? items.data.map(item => 
                        <ProductItem
                            key={ item.id }
                            image={ item.thumbnail }
                            title={ item.label }
                            description={ item.description }
                            price={ item.price }
                            discount="-10%"
                            link={ item.id }
                        />
                    ) : 
                    Array(12)
                    .fill(0)
                    .map((_, index) => (<Loader key={index} />))

                }
            </div>
            
            <ReactPaginate
                previousLabel={"← Previous"}
                nextLabel={"Next →"}
                pageCount={ pageCount }
                containerClassName={ "pagination" }
                previousLinkClassName={ "pagination__link" }
                nextLinkClassName={ "pagination__link" }
                disabledClassName={ "pagination__link--disabled" }
                activeClassName={ "pagination__link--active" }
                onPageChange={handlePageChange}
            />
        </div>
    )
}

export default ProductPage