import Product from '../Product/Product'
import './Home.css'
import {Link} from 'react-router-dom'

function Home(){
    return(
        <div className="home">
            <img className="home__image"
            src="https://image.jimcdn.com/app/cms/image/transf/dimension=954x10000:format=jpg/path/sba169de8b689fda5/image/icd6fe2bf4bab5a7d/version/1585268823/image.jpg"
            alt=""/>
        <div className="home__row">
            <Product
            id="1029"
            title="pollones"
            price={11.1}
            image="https://i.ytimg.com/vi/qkm5LVuBzvw/hqdefault.jpg"
            rating={4}
            />
             <Product
            id="1029"
            title="pollones"
            price={11.1}
            image="https://i.ytimg.com/vi/qkm5LVuBzvw/hqdefault.jpg"
            rating={4}
            />
             <Product
            id="1029"
            title="pollones"
            price={11.1}
            image="https://i.ytimg.com/vi/qkm5LVuBzvw/hqdefault.jpg"
            rating={4}
            />
        </div>
        <div className="home__row">
            <Product
            id="1029"
            title="pollones"
            price={11.1}
            image="https://i.ytimg.com/vi/qkm5LVuBzvw/hqdefault.jpg"
            rating={4}
            />
             <Product
            id="1029"
            title="pollones"
            price={11.1}
            image="https://i.ytimg.com/vi/qkm5LVuBzvw/hqdefault.jpg"
            rating={4}
            />
             <Product
            id="1029"
            title="pollones"
            price={11.1}
            image="https://i.ytimg.com/vi/qkm5LVuBzvw/hqdefault.jpg"
            rating={4}
            />
            <Product
            id="1029"
            title="pollones"
            price={11.1}
            image="https://i.ytimg.com/vi/qkm5LVuBzvw/hqdefault.jpg"
            rating={4}
            />
        </div>
        
        
        </div>
    )
}
export default Home