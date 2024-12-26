import FeaturePR1 from "./featurePR1"
import ProductBarDesign from "./ProductBarDesign"
import FeaturePR2 from "./featurePR2"
import FeaturePR3 from "./featurePR3"
import FeaturePR4 from "./featurePR4"
import LatestPR1 from "./latestPR1"
import LatestPR2 from "./latestPR2"
import LatestPR3 from "./latestPR3"
import LatestPR4 from "./latestPR4"
import LatestPR5 from "./latestPR5"
import LatestPR6 from "./latestPR6"
import TrendPR1 from "./trendPR1"
import TrendPR2 from "./trendPR2"
import TrendPR3 from "./trendPR3"
import TrendPR4 from "./trendPR4"
import CategoryProduct1 from "./CategoryProduct1"
import CategoryProduct2 from "./CategoryProduct2"
import CategoryProduct3 from "./CategoryProduct3"
import CategoryProduct4 from "./CategoryProduct4"
import PRGrid1 from "./PRGrid1"
import PRGrid4 from "./PRGrid4"
import PRGrid3 from "./PRGrid3"
import PRGrid2 from "./PRGrid2"
import PRGrid8 from "./PRGrid8"
import PRGrid7 from "./PRGrid7"
import PRGrid6 from "./PRGrid6"
import PRGrid5 from "./PRGrid5"


const ProductCard = ({ designType, showDots = false }: { designType: "PRGrid9" |"PRGrid8" |"PRGrid7" |"PRGrid6" |"PRGrid5" |"PRGrid4" |"PRGrid3" |"PRGrid2" |"PRGrid1" | "SIMPLEFR 1/4" |"SIMPLEFR 1/3" | "SIMPLEFR 1/2" | "SIMPLEFR 1/1" | "SIMPLE 1/4" | "MEDIUMLT 1/1" |  "MEDIUMLT 1/2" |  "MEDIUMLT 1/3" |  "MEDIUMLT 1/4" |  "MEDIUMLT 1/5" |  "MEDIUMLT 1/6" | "SIMPLEST 1/1" | "SIMPLEST 1/2" | "SIMPLEST 1/3" | "SIMPLEST 1/4" | "CATEGORY PR1" | "CATEGORY PR2" | "CATEGORY PR3" | "CATEGORY PR4" | "BAR", showDots?:boolean,  }) => {
    return ( 
        <>
           {designType == "SIMPLEFR 1/1" && <FeaturePR1 />}
           {designType == "SIMPLEFR 1/2" && <FeaturePR2 />}
           {designType == "SIMPLEFR 1/3" && <FeaturePR3 />}
           {designType == "SIMPLEFR 1/4" && <FeaturePR4 />}
           {designType == "MEDIUMLT 1/1" && <LatestPR1 />}
           {designType == "MEDIUMLT 1/2" && <LatestPR2 />}
           {designType == "MEDIUMLT 1/3" && <LatestPR3 />}
           {designType == "MEDIUMLT 1/4" && <LatestPR4 />}
           {designType == "MEDIUMLT 1/5" && <LatestPR5 />}
           {designType == "MEDIUMLT 1/6" && <LatestPR6 />}
           {designType == "SIMPLEST 1/1" && <TrendPR1 />}
           {designType == "SIMPLEST 1/2" && <TrendPR2 />}
           {designType == "SIMPLEST 1/3" && <TrendPR3 />}
           {designType == "SIMPLEST 1/4" && <TrendPR4 />}
           {designType == "CATEGORY PR1" && <CategoryProduct1 />}
           {designType == "CATEGORY PR2" && <CategoryProduct2 />}
           {designType == "CATEGORY PR3" && <CategoryProduct3 />}
           {designType == "CATEGORY PR4" && <CategoryProduct4 />}
           
           {designType == "PRGrid1" && <PRGrid1 showDots={showDots} />}
           {designType == "PRGrid2" && <PRGrid2 showDots={showDots} />}
           {designType == "PRGrid3" && <PRGrid3 showDots={showDots} />}
           {designType == "PRGrid4" && <PRGrid4 showDots={showDots} />}
           {designType == "PRGrid5" && <PRGrid5 showDots={showDots} />}
           {designType == "PRGrid6" && <PRGrid6 showDots={showDots} />}
           {designType == "PRGrid7" && <PRGrid7 showDots={showDots} />}
           {designType == "PRGrid8" && <PRGrid8 showDots={showDots} />}
           {designType == "BAR" && <ProductBarDesign />}
        </>
    )
}

export default ProductCard
