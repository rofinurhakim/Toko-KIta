import React from 'react';
import Carousel from '../../components/carousel';
import Category from '../../components/category';
import Sale from '../../components/sale';

const Home = () => {
    return (
        <>
           <div className='container'>
            <div className="row">
              <div className='col-md-11 m-auto mt-5'>
                  <Carousel />
                  <Category />
                  <Sale />
                </div>
            </div>
           </div>
        </>
    )
    
}

export default Home;