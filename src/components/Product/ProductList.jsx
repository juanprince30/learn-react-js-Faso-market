import Product from "./Product";

export default function ProductList(){
    return(
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-1">
            <div class="p-4"><Product /></div>
            <div class="p-4"><Product /></div>
            <div class="p-4"><Product /></div>
            <div class="p-4"><Product /></div>
            <div class="p-4"><Product /></div>
            <div class="p-4"><Product /></div>
            <div class="p-4"><Product /></div>
            <div class="p-4"><Product /></div>
        </div>

    );
}