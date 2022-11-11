import React from 'react'

import Helmet from '../components/Helmet'
import Section, {SectionBody} from '../components/Section'

import ProductView from '../components/ProductView'

import productData from '../assets/fake-data/products'

const Product = props => {

    const product = productData.getProductBySlug(props.match.params.slug)

    React.useEffect(() => {
        window.scrollTo(0,0)
    }, [product])

    return (
        <Helmet title={product.title}>
            <Section>
                <SectionBody>
                    <ProductView product={product}/>
                </SectionBody>
            </Section>
        </Helmet>
    )
}

export default Product
