import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import MainLayout from "./MainLayout";
import ProductList from "./pages/ProductList";
import Category from "./pages/Category";
import Contact from "./pages/Contact";
import ProtectedRoute from "./routes/ProtectedRoute";

const ProductDetails = lazy(() => import("./pages/ProductDetails"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/category" element={<Category />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/products/:id"
            element={
              <ProtectedRoute>
                <Suspense
                  fallback={
                    <div className="text-white text-center mt-20">
                      Loading...
                    </div>
                  }
                >
                  <ProductDetails />
                </Suspense>
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
