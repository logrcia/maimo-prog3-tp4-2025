import ProductContainer from "@/components/ProductContainer"

const page = async ({ params }) => {
    const { id } = await params;
  return (
    <div><ProductContainer params={params} /></div>
  )
}

export default page