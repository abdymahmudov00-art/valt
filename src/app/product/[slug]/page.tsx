import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Product from "@/components/pages/product/Product";
import { getProduct, products } from "@/components/mock/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/product/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  return product
    ? { title: product.name, description: product.description }
    : { title: "Товар не найден" };
}

async function ProductLoader({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  return <Product product={product} />;
}

const page = ({ params }: PageProps<"/product/[slug]">) => {
  return (
    <Suspense>
      <ProductLoader params={params} />
    </Suspense>
  );
};

export default page;
