import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets, categories, languages } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

{/* pilas con el sort by para que se cambie el texto vuelva al default cuando se cambien las opciones de los filtros */}
 
const Collection = () => {

  const { products, search, showSearch } = useContext(ShopContext);

  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);

  const [category, setCategory] = useState([]);
  const [language, setLanguage] = useState([]);
  const [bestSeller, setBestSeller] = useState(null);

  const [sortType, setSortType] = useState('relevant')

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)){
      setCategory(prev => prev.filter(item => item !== e.target.value)) /* Si ya está lo quita */
    }
    else {
      setCategory(prev => [...prev, e.target.value]) /* si no está lo agrega */
    }
  }

  const toggleLanguage = (e) => {
    if (language.includes(e.target.value)){
      setLanguage(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setLanguage(prev => [...prev, e.target.value])
    }
  }

  /* despues lo cambio así
  const toggleFilter = (e, filterType, setFilterState) => {
    if (filterType.includes(e.target.value)) {
      setFilterState(prev => prev.filter(item => item !== e.target.value));
    } else {
      setFilterState(prev => [...prev, e.target.value]);
    }

    el onchange iria asi
    onChange={(e) => toggleFilter(e, category, setCategory)
  }; */

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category))
    }

    if (language.length > 0) {
      productsCopy = productsCopy.filter(item => 
        item.language.some(lang => language.includes(lang)) /* item.language es una lista de idiomas del libro. *//* some(lang => subCategory.includes(lang)) revisa si al menos un idioma del libro está en la lista de filtros seleccionados. */
      );
    }

    if (bestSeller != null){
      productsCopy = productsCopy.filter(item => item.bestseller === bestSeller)
    }

    setFilterProducts(productsCopy);

  }

  const sortProduct = () => {

    let filterProdCopy = filterProducts.slice();

    switch(sortType){
      case 'low-high':
        setFilterProducts(filterProdCopy.sort((a, b)=>(a.price - b.price)));
        break;
      case 'high-low':
        setFilterProducts(filterProdCopy.sort((a,b)=>(b.price - a.price)));
        break;
      default:
        applyFilter();
        break;
    }
  }

  useEffect(()=>{
    applyFilter();
  }, [category, language, bestSeller, search, showSearch])

  useEffect(()=>{
    sortProduct();
  }, [sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      {/* Filter Options */}   
      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img className={`h-3 sm:hidden ${showFilter?'rotate-90':''}`} src={assets.dropdown_icon} alt="" />
        </p>
        
        {/* Category filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter? '':'hidden'} sm:block`} > {/* sm:block para que se muestren par default en todas las pantallas menos la pequeña los filtros */}
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            {categories.map((cat, index)=> (
              <p className='flex gap-2'  key={index}>
                <input className='w-3' type="checkbox" value={cat} onChange={toggleCategory}/>{cat}
              </p>
            ))}
          </div>
        </div>

        {/* Language filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter? '':'hidden'} sm:block`} >
          <p className='mb-3 text-sm font-medium'>LANGUAGES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            {languages.map((lang, index)=> (
              <p className='flex gap-2' key={index}>
                <input className='w-3' type="checkbox" value={lang} onChange={toggleLanguage}/>{lang}
              </p>
            ))}
          </div>
        </div>

        {/* Bestseller Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter? '':'hidden'} sm:block`} >
          <div>
            <p className='flex gap-2'> 
              <input className='w-3' type="checkbox" onChange={() => (bestSeller? setBestSeller(false): setBestSeller(true)) }/>Bestseller
            </p>
          </div>

          {/* o puede ser
          <p className='mb-3 text-sm font-medium'>BESTSELLER</p>
          <div className='flex gap-4 text-sm font-light text-gray-700'>
            <label>
              <input type="radio" name="bestseller" value="true" onChange={() => setBestseller(true)} /> Yes
            </label>
            <label>
              <input type="radio" name="bestseller" value="false" onChange={() => setBestseller(false)} /> No
            </label>
            <label>
              <input type="radio" name="bestseller" value="all" onChange={() => setBestseller(null)} defaultChecked /> All
            </label>
          </div> */}
        </div>

      </div>

      {/* Right Side */}
      <div className='flex-1'>

        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'}/>

          {/* Product Sort */}
          <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by price: Low to High</option>
            <option value="high-low">Sort by price: High to Low</option>
          </select>
        </div>

        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((item)=>(
              <ProductItem key={item._id} name={item.name} id={item._id} price={item.price} image={item.image}/>
            ))
          }
        </div>

      </div>

    </div>
  )
}

export default Collection
