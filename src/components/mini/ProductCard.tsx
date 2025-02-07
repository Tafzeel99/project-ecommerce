import CategoryProduct1 from "./CategoryProduct1"
import CategoryProduct2 from "./CategoryProduct2"
import CategoryProduct3 from "./CategoryProduct3"
import CategoryProduct4 from "./CategoryProduct4"


const ProductCard = ({ designType }: { designType: "PRGrid9" |"PRGrid8" |"PRGrid7" |"PRGrid6" |"PRGrid5" |"PRGrid4" |"PRGrid3" |"PRGrid2" |"PRGrid1" | "SIMPLEFR 1/4" |"SIMPLEFR 1/3" | "SIMPLEFR 1/2" | "SIMPLEFR 1/1" | "SIMPLE 1/4" | "MEDIUMLT 1/1" |  "MEDIUMLT 1/2" |  "MEDIUMLT 1/3" |  "MEDIUMLT 1/4" |  "MEDIUMLT 1/5" |  "MEDIUMLT 1/6" | "SIMPLEST 1/1" | "SIMPLEST 1/2" | "SIMPLEST 1/3" | "SIMPLEST 1/4" | "CATEGORY PR1" | "CATEGORY PR2" | "CATEGORY PR3" | "CATEGORY PR4" | "BAR", showDots?:boolean,  }) => {
    return ( 
        <>
           {designType == "CATEGORY PR1" && <CategoryProduct1 />}
           {designType == "CATEGORY PR2" && <CategoryProduct2 />}
           {designType == "CATEGORY PR3" && <CategoryProduct3 />}
           {designType == "CATEGORY PR4" && <CategoryProduct4 />}
           
        </>
    )
}

export default ProductCard
