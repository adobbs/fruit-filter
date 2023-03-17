import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

function FilterableProductTable({ products }) {

    // TODO: Modify products data based on state of search and filter control.

    return (
        <>
            <SearchBar />
            <ProductTable products={products} />
        </>
    );
}

export default FilterableProductTable;
