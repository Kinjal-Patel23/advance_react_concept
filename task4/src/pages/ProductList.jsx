import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../products/productSlice";

const ProductList = () => {
    const dispatch = useDispatch();

    const { products, loading, error } = useSelector(
        (state) => state.product
    );

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (loading) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center text-white text-xl">
                Loading products...
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center text-red-500 text-lg">
                {error}
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black px-10 py-12">
            <h1 className="text-3xl font-bold text-center text-white mb-12 tracking-wide">
                Beauty Collection
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {products.map((item) => (
                    <div
                        key={item.id}
                        className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-emerald-500 transition-all duration-300 group"
                    >
                        <div className="h-52 bg-black overflow-hidden">
                            <img
                                src={item.thumbnail}
                                alt={item.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-5 space-y-3">
                            <span className="text-xs uppercase tracking-widest text-zinc-400">
                                {item.category}
                            </span>

                            <h2 className="text-lg font-semibold text-white line-clamp-1">
                                {item.title}
                            </h2>

                            <p className="text-sm text-zinc-400 line-clamp-2">
                                {item.description}
                            </p>

                            <div className="flex items-center justify-between pt-3">
                                <span className="text-xl font-bold text-emerald-400">
                                    ${item.price}
                                </span>

                                <button className="px-4 py-2 text-sm font-medium text-black bg-emerald-400 rounded-lg hover:bg-emerald-500 transition">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
