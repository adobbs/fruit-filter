import { useState } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

function FilterableProductTable({ products }) {
    // TODO: Modify products data based on state of search and filter control.
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    return (
        <>
            <SearchBar 
                filterText = {filterText}
                inStockOnly = {inStockOnly}
                onFilterTextChange = {setFilterText}
                onInStockOnlyChange = {setInStockOnly} />
            <ProductTable 
                products={products}
                filterText = {filterText}
                inStockOnly = {inStockOnly} />
        </>
    );
}

export default FilterableProductTable;
