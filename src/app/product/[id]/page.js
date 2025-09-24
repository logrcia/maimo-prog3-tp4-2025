import ProductContainer from "@/components/ProductContainer"

const page = ({ params }) => {
    const { id } = params;
  return (
    <div><ProductContainer id={id} /></div>
  )
}

export default page