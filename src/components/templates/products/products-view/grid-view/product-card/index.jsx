import React, { useState } from "react";
import PublishmentState from "./fragments/publishment-state";
import Entity from "./fragments/entity";
import Title from "./fragments/title";
import ProductImage from "./fragments/product-img";
import Description from "./fragments/description";
import Card from "./fragments/card";
import Price from "./fragments/price";
import Modal from "../../../../../common/modal";
import Manage from "./fragments/manage";
import EditProductModal from "../../../common/edit-product-modal/";

export default function ProductCard(product) {
  const [initialValues, setInitialValues] = useState(product);

  console.log(product);
  return (
    <Card>
      <header className="h-[200px] w-full rounded-lg  flex-center overflow-hidden!">
        <ProductImage src={product.img} alt={product.title} />
      </header>
      <main className="space-y-2">
        <Title title={product.title} />
        <Description content={product.description} />

        <div className="flex items-center justify-between gap-1">
          <PublishmentState isVisible={product.isPublished} />
          <Entity entityCount={product.entity} />
        </div>
      </main>
      <footer className="flex items-center justify-between">
        <Price price={product.price} />
        <Modal
          Trigger={<Manage />}
          title={`ویرایش محصول ${product.title}`}
          onSubmit={() => {
            //
            console.log(initialValues);
          }}
        >
          <EditProductModal product={product} />
        </Modal>
      </footer>
    </Card>
  );
}
