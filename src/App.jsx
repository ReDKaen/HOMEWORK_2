import React, { useState } from "react";
import ProductComponent from "./components/ProductComponents/ProductRender";
import Modal from "./components/Modal/Modal";
import Header from "./components/Header/Header";
import { addToCart } from "./Utils/Utils";
import "./App.scss";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModalWindow = (product) => {
    setSelectedProduct(product);
    setOpenModal(true);
  };

  const closeModalWindow = () => {
    setOpenModal(false);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    closeModalWindow();
  };

  return (
    <>
      <Header />
      <div>
        <ProductComponent onAddToCart={openModalWindow} />
      </div>

      {openModal && selectedProduct && (
        <Modal
          onClose={closeModalWindow}
          headerText="Додати товар"
          firstText="Додати у кошик"
          firstClick={() => handleAddToCart(selectedProduct)}
        >
          <p>Опис товару: {selectedProduct.name}</p>
        </Modal>
      )}
    </>
  );
}

export default App;