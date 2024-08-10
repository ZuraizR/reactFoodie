import React, { useContext } from 'react'

import './SideBar.css'
import { StoreContext } from '../../context/StoreContext'
import { assets } from '../../assets/assets'
import FoodItem from '../FoodItem/FoodItem'
import ExploreMenu from '../ExploreMenu/ExploreMenu'

const SideBar = () => {
  const { food_list, category } = useContext(StoreContext)

  return (
    <>
      <ExploreMenu />
      <section className='collectionleft mt-5 mb-5 pb-5 pt-md-5'>
        <div className='collectionleft-inner '>
          <div className='grid px-sm-0 px-4 '>
            {/*main col 1 */}
            <div className='col-lg-3 p-0 '>
              <div className='d-none d-lg-block '>
                <div className='collection-filter'>
                  {/* categories  */}
                  <div>
                    <h5 className='text-uppercase fw-bold ps-1 mb-5 mt-2  '>
                      <i className='fa-solid fa-bars fa-xs pe-2 ' />
                      Categories
                    </h5>
                    <div className='row custom-padding'>
                      <div className='col-12 mb-1 p-1 collection-bg'>
                        Hoodies
                      </div>
                      <div className='col-12 mb-1 p-1 collection-bg'>
                        Couple Tee
                      </div>
                      <div className='col-12 mb-1 p-1 collection-bg'>
                        Funny Quotes
                      </div>
                      <div className='col-12 mb-1 p-1 collection-bg'>Man</div>
                      <div className='col-12 mb-1 p-1 collection-bg'>Mug</div>
                    </div>
                    {/* Accordion   */}
                    <div
                      className='accordion accordion-flush collection-acordians'
                      id='seeMore'
                    >
                      {/* 1 */}
                      <div className='accordion-item'>
                        <div
                          id='collapseOneSeeMore'
                          className='accordion-collapse collapse '
                          data-bs-parent='#accordionExample'
                        >
                          <div className='accordion-body px-0 '>
                            <h6 className='accordian-h6 w-100 mb-1 '>1</h6>
                            <h6 className='accordian-h6 w-100 mb-1 '>3</h6>
                            <h6 className='accordian-h6 w-100 mb-1 '>3</h6>
                            <h6 className='accordian-h6 w-100 mb-1 '>4</h6>
                            <h6 className='accordian-h6 w-100 mb-1 '>5</h6>
                          </div>
                        </div>
                        <h2 className='accordion-header'>
                          <button
                            className='accordion-button collapsed px-0 fs-6  accordian-h6 rounded-0 '
                            type='button'
                            data-bs-toggle='collapse'
                            data-bs-target='#collapseOneSeeMore'
                            aria-expanded='true'
                            aria-controls='collapseOne'
                          >
                            See More
                            <i className='fa-solid fa-plus fa-xs ps-2 ' />
                          </button>
                        </h2>
                      </div>
                    </div>
                    <h5 className='text-uppercase fw-bold mt-4  pb-2 '>
                      <i className='fa-solid fa-bars fa-xs pe-2 ' />
                      Filter By
                    </h5>
                    <hr />
                  </div>
                  {/* clear filter  */}
                  <div className='clear-filter mt-4 mb-4 '>
                    <button className='border-0 p-2 w-100  rounded-5 clr-btn '>
                      Clear All
                    </button>
                    <ul>{/* <li></li> */}</ul>
                  </div>
                  <hr />
                  {/* Avalibility  */}
                  <div className='filter-avalibility mt-4  mb-4 '>
                    <div className='d-flex justify-content-between align-items-center  mt-4'>
                      <h6 className='text-uppercase fw-bold  text-uppercase'>
                        <i className='fa-solid fa-chevron-up fa-sm pe-3 ' />
                        Avalibility
                      </h6>
                      <p>reset</p>
                    </div>
                    <div>
                      <div className='in-stock d-flex justify-content-between '>
                        <label className='checkbox-container'>
                          <input type='checkbox' />
                          <span className='checkmark' />
                          In Stock
                        </label>
                        <h6>(22)</h6>
                      </div>
                      <div className='out-stock d-flex justify-content-between '>
                        <label className='checkbox-container'>
                          <input type='checkbox' />
                          <span className='checkmark' />
                          Out of Stock
                        </label>
                        <h6>(3)</h6>
                      </div>
                    </div>
                  </div>
                  <hr />
                  {/* product type  */}
                  <div className='filter-producttype mt-4  mb-4 '>
                    <div className='d-flex justify-content-between  mt-4'>
                      <h6 className='text-uppercase fw-bold  text-uppercase'>
                        <i className='fa-solid fa-chevron-up fa-sm pe-3 ' />
                        Product types
                      </h6>
                      <p>reset</p>
                    </div>
                    <div>
                      <div className='d-flex justify-content-between '>
                        <label className='checkbox-container'>
                          <input type='checkbox' />
                          <span className='checkmark' />
                          Men
                        </label>
                        <h6>(22)</h6>
                      </div>
                      <div className='d-flex justify-content-between '>
                        <label className='checkbox-container'>
                          <input type='checkbox' />
                          <span className='checkmark' />
                          women
                        </label>
                        <h6>(3)</h6>
                      </div>
                      <div className='d-flex justify-content-between '>
                        <label className='checkbox-container'>
                          <input type='checkbox' />
                          <span className='checkmark' />
                          blouses
                        </label>
                        <h6>(22)</h6>
                      </div>
                      <div className='d-flex justify-content-between '>
                        <label className='checkbox-container'>
                          <input type='checkbox' />
                          <span className='checkmark' />
                          Denim
                        </label>
                        <h6>(3)</h6>
                      </div>
                      <div className='d-flex justify-content-between '>
                        <label className='checkbox-container'>
                          <input type='checkbox' />
                          <span className='checkmark' />
                          Jacket
                        </label>
                        <h6>(22)</h6>
                      </div>
                      <div className='d-flex justify-content-between '>
                        <label className='checkbox-container'>
                          <input type='checkbox' />
                          <span className='checkmark' />
                          Jeans
                        </label>
                        <h6>(3)</h6>
                      </div>
                      <div className='d-flex justify-content-between '>
                        <label className='checkbox-container'>
                          <input type='checkbox' />
                          <span className='checkmark' />
                          Outer Wear
                        </label>
                        <h6>(22)</h6>
                      </div>
                      <div className='d-flex justify-content-between '>
                        <label className='checkbox-container'>
                          <input type='checkbox' />
                          <span className='checkmark' />
                          Trouser
                        </label>
                        <h6>(3)</h6>
                      </div>
                    </div>
                  </div>
                  <hr />
                  {/* more filter */}
                  <div className='filter-more mt-4  mb-4 '>
                    <div className='d-flex justify-content-between  mt-4'>
                      <h6 className='text-uppercase fw-bold  '>
                        <i className='fa-solid fa-chevron-up fa-sm pe-3 ' />
                        more filter
                      </h6>
                      <p>reset</p>
                    </div>
                    <div>
                      <div className='d-flex justify-content-between '>
                        <label className='checkbox-container'>
                          <input type='checkbox' />
                          <span className='checkmark' />
                          Men
                        </label>
                        <h6>(22)</h6>
                      </div>
                      <div className='d-flex justify-content-between '>
                        <label className='checkbox-container'>
                          <input type='checkbox' />
                          <span className='checkmark' />
                          women
                        </label>
                        <h6>(3)</h6>
                      </div>
                      <div className='d-flex justify-content-between '>
                        <label className='checkbox-container'>
                          <input type='checkbox' />
                          <span className='checkmark' />
                          blouses
                        </label>
                        <h6>(22)</h6>
                      </div>
                      <div className='d-flex justify-content-between '>
                        <label className='checkbox-container'>
                          <input type='checkbox' />
                          <span className='checkmark' />
                          Denim
                        </label>
                        <h6>(3)</h6>
                      </div>
                      <div className='d-flex justify-content-between '>
                        <label className='checkbox-container'>
                          <input type='checkbox' />
                          <span className='checkmark' />
                          Jacket
                        </label>
                        <h6>(22)</h6>
                      </div>
                      <div className='d-flex justify-content-between '>
                        <label className='checkbox-container'>
                          <input type='checkbox' />
                          <span className='checkmark' />
                          Jeans
                        </label>
                        <h6>(3)</h6>
                      </div>
                      <div className='d-flex justify-content-between '>
                        <label className='checkbox-container'>
                          <input type='checkbox' />
                          <span className='checkmark' />
                          Outer Wear
                        </label>
                        <h6>(22)</h6>
                      </div>
                      <div className='d-flex justify-content-between '>
                        <label className='checkbox-container'>
                          <input type='checkbox' />
                          <span className='checkmark' />
                          Trouser
                        </label>
                        <h6>(3)</h6>
                      </div>
                    </div>
                  </div>
                  <hr />
                  {/* brand filter */}
                  <div className='filter-brand mt-4  mb-4 '>
                    <div className='d-flex justify-content-between  mt-4'>
                      <h6 className='text-uppercase fw-bold  '>
                        <i className='fa-solid fa-chevron-up fa-sm pe-3 ' />
                        Brand
                      </h6>
                      <p>reset</p>
                    </div>
                    <div>
                      <div className='d-flex justify-content-between '>
                        <label className='checkbox-container'>
                          <input type='checkbox' />
                          <span className='checkmark' />
                          Men
                        </label>
                        <h6>(22)</h6>
                      </div>
                      <div className='d-flex justify-content-between '>
                        <label className='checkbox-container'>
                          <input type='checkbox' />
                          <span className='checkmark' />
                          women
                        </label>
                        <h6>(3)</h6>
                      </div>
                      <div className='d-flex justify-content-between '>
                        <label className='checkbox-container'>
                          <input type='checkbox' />
                          <span className='checkmark' />
                          blouses
                        </label>
                        <h6>(22)</h6>
                      </div>
                      <div className='d-flex justify-content-between '>
                        <label className='checkbox-container'>
                          <input type='checkbox' />
                          <span className='checkmark' />
                          Denim
                        </label>
                        <h6>(3)</h6>
                      </div>
                      <div className='d-flex justify-content-between '>
                        <label className='checkbox-container'>
                          <input type='checkbox' />
                          <span className='checkmark' />
                          Jacket
                        </label>
                        <h6>(22)</h6>
                      </div>
                      <div className='d-flex justify-content-between '>
                        <label className='checkbox-container'>
                          <input type='checkbox' />
                          <span className='checkmark' />
                          Jeans
                        </label>
                        <h6>(3)</h6>
                      </div>
                      <div className='d-flex justify-content-between '>
                        <label className='checkbox-container'>
                          <input type='checkbox' />
                          <span className='checkmark' />
                          Outer Wear
                        </label>
                        <h6>(22)</h6>
                      </div>
                      <div className='d-flex justify-content-between '>
                        <label className='checkbox-container'>
                          <input type='checkbox' />
                          <span className='checkmark' />
                          Trouser
                        </label>
                        <h6>(3)</h6>
                      </div>
                    </div>
                  </div>
                  <hr />
                  {/* Material filter */}
                  <div className='filter-material mt-4  mb-4 '>
                    <div className='d-flex justify-content-between  mt-4'>
                      <h6 className='text-uppercase fw-bold  '>
                        <i className='fa-solid fa-chevron-up fa-sm pe-3 ' />
                        Material
                      </h6>
                      <p>reset</p>
                    </div>
                    <div>
                      <div className='d-flex justify-content-between '>
                        <label className='checkbox-container'>
                          <input type='checkbox' />
                          <span className='checkmark' />
                          Men
                        </label>
                        <h6>(22)</h6>
                      </div>
                      <div className='d-flex justify-content-between '>
                        <label className='checkbox-container'>
                          <input type='checkbox' />
                          <span className='checkmark' />
                          Trouser
                        </label>
                        <h6>(3)</h6>
                      </div>
                    </div>
                  </div>
                  <hr />
                  {/* Size filter */}
                  <div className='filter-size mt-4  mb-4 '>
                    <div className='d-flex justify-content-between  mt-4'>
                      <h6 className='text-uppercase fw-bold  '>
                        <i className='fa-solid fa-chevron-up fa-sm pe-3 ' />
                        Size
                      </h6>
                      <p>reset</p>
                    </div>
                    <div className='d-flex flex-wrap gap-2 '>
                      <div className='size-box'>XS</div>
                      <div className='size-box'>S</div>
                      <div className='size-box'>M</div>
                      <div className='size-box'>L</div>
                      <div className='size-box'>XL</div>
                      <div className='size-box'>XXL</div>
                      <div className='size-box'>3XL</div>
                      <div className='size-box'>4XL</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* on small screen  */}
              <div
                className='filter-small d-lg-none d-block '
                type='button'
                data-bs-toggle='offcanvas'
                data-bs-target='#leftsideFilter'
                aria-controls='offcanvasNavbar'
                aria-label='Toggle navigation'
              >
                <h6 className='text-uppercase fw-bold mt-4  pb-2 '>
                  <i className='fa-solid fa-bars fa-xs pe-2 ' />
                  Filter By <i className='fa-solid fa-angle-down ps-1 ' />
                </h6>
              </div>
              {/*side filter left offcanvas start (click  menu-button) */}
              <div
                className=' offcanvas offcanvas-start '
                tabIndex={-1}
                id='leftsideFilter'
                aria-labelledby='offcanvasNavbarLabel'
              >
                <div className='offcanvas-body d-flex  flex-column justify-content-between '>
                  <div className='collection-filter'>
                    {/* categories  */}
                    <div>
                      <button
                        type='button'
                        className='btn-close fs-6 position-absolute top-0 end-0 '
                        data-bs-dismiss='offcanvas'
                        aria-label='Close'
                      />
                      <h5 className='text-uppercase fw-bold ps-1 mb-4 mt-2  '>
                        <i className='fa-solid fa-bars fa-xs pe-2 ' />
                        Categories
                      </h5>
                      <div className='row custom-padding'>
                        <div className='col-12 mb-1 p-1 collection-bg'>
                          Hoodies
                        </div>
                        <div className='col-12 mb-1 p-1 collection-bg'>
                          Couple Tee
                        </div>
                        <div className='col-12 mb-1 p-1 collection-bg'>
                          Funny Quotes
                        </div>
                        <div className='col-12 mb-1 p-1 collection-bg'>Man</div>
                        <div className='col-12 mb-1 p-1 collection-bg'>Mug</div>
                      </div>
                      {/* Accordion   */}
                      <div
                        className='accordion accordion-flush collection-acordians'
                        id='seeMore'
                      >
                        {/* 1 */}
                        <div className='accordion-item'>
                          <div
                            id='collapseOneSeeMore'
                            className='accordion-collapse collapse '
                            data-bs-parent='#accordionExample'
                          >
                            <div className='accordion-body px-0 '>
                              <h6 className='accordian-h6 w-100 mb-1 '>1</h6>
                              <h6 className='accordian-h6 w-100 mb-1 '>3</h6>
                              <h6 className='accordian-h6 w-100 mb-1 '>3</h6>
                              <h6 className='accordian-h6 w-100 mb-1 '>4</h6>
                              <h6 className='accordian-h6 w-100 mb-1 '>5</h6>
                            </div>
                          </div>
                          <h2 className='accordion-header'>
                            <button
                              className='accordion-button collapsed px-0 fs-6  accordian-h6 rounded-0 '
                              type='button'
                              data-bs-toggle='collapse'
                              data-bs-target='#collapseOneSeeMore'
                              aria-expanded='true'
                              aria-controls='collapseOne'
                            >
                              See More
                              <i className='fa-solid fa-plus fa-xs ps-2 ' />
                            </button>
                          </h2>
                        </div>
                      </div>
                      <h5 className='text-uppercase fw-bold mt-4  pb-2 '>
                        <i className='fa-solid fa-bars fa-xs pe-2 ' />
                        Filter By
                      </h5>
                      <hr />
                    </div>
                    {/* clear filter  */}
                    <div className='clear-filter mt-4 mb-4 '>
                      <button className='border-0 p-2 w-100  rounded-5 clr-btn '>
                        Clear All
                      </button>
                      <ul>{/* <li></li> */}</ul>
                    </div>
                    <hr />
                    {/* Avalibility  */}
                    <div className='filter-avalibility mt-4  mb-4 '>
                      <div className='d-flex justify-content-between align-items-center  mt-4'>
                        <h6 className='text-uppercase fw-bold  text-uppercase'>
                          <i className='fa-solid fa-chevron-up fa-sm pe-3 ' />
                          Avalibility
                        </h6>
                        <p>reset</p>
                      </div>
                      <div>
                        <div className='in-stock d-flex justify-content-between '>
                          <label className='checkbox-container'>
                            <input type='checkbox' />
                            <span className='checkmark' />
                            In Stock
                          </label>
                          <h6>(22)</h6>
                        </div>
                        <div className='out-stock d-flex justify-content-between '>
                          <label className='checkbox-container'>
                            <input type='checkbox' />
                            <span className='checkmark' />
                            Out of Stock
                          </label>
                          <h6>(3)</h6>
                        </div>
                      </div>
                    </div>
                    <hr />
                    {/* product type  */}
                    <div className='filter-producttype mt-4  mb-4 '>
                      <div className='d-flex justify-content-between  mt-4'>
                        <h6 className='text-uppercase fw-bold  text-uppercase'>
                          <i className='fa-solid fa-chevron-up fa-sm pe-3 ' />
                          Product types
                        </h6>
                        <p>reset</p>
                      </div>
                      <div>
                        <div className='d-flex justify-content-between '>
                          <label className='checkbox-container'>
                            <input type='checkbox' />
                            <span className='checkmark' />
                            Men
                          </label>
                          <h6>(22)</h6>
                        </div>
                        <div className='d-flex justify-content-between '>
                          <label className='checkbox-container'>
                            <input type='checkbox' />
                            <span className='checkmark' />
                            women
                          </label>
                          <h6>(3)</h6>
                        </div>
                        <div className='d-flex justify-content-between '>
                          <label className='checkbox-container'>
                            <input type='checkbox' />
                            <span className='checkmark' />
                            blouses
                          </label>
                          <h6>(22)</h6>
                        </div>
                        <div className='d-flex justify-content-between '>
                          <label className='checkbox-container'>
                            <input type='checkbox' />
                            <span className='checkmark' />
                            Denim
                          </label>
                          <h6>(3)</h6>
                        </div>
                        <div className='d-flex justify-content-between '>
                          <label className='checkbox-container'>
                            <input type='checkbox' />
                            <span className='checkmark' />
                            Jacket
                          </label>
                          <h6>(22)</h6>
                        </div>
                        <div className='d-flex justify-content-between '>
                          <label className='checkbox-container'>
                            <input type='checkbox' />
                            <span className='checkmark' />
                            Jeans
                          </label>
                          <h6>(3)</h6>
                        </div>
                        <div className='d-flex justify-content-between '>
                          <label className='checkbox-container'>
                            <input type='checkbox' />
                            <span className='checkmark' />
                            Outer Wear
                          </label>
                          <h6>(22)</h6>
                        </div>
                        <div className='d-flex justify-content-between '>
                          <label className='checkbox-container'>
                            <input type='checkbox' />
                            <span className='checkmark' />
                            Trouser
                          </label>
                          <h6>(3)</h6>
                        </div>
                      </div>
                    </div>
                    <hr />
                    {/* more filter */}
                    <div className='filter-more mt-4  mb-4 '>
                      <div className='d-flex justify-content-between  mt-4'>
                        <h6 className='text-uppercase fw-bold  '>
                          <i className='fa-solid fa-chevron-up fa-sm pe-3 ' />
                          more filter
                        </h6>
                        <p>reset</p>
                      </div>
                      <div>
                        <div className='d-flex justify-content-between '>
                          <label className='checkbox-container'>
                            <input type='checkbox' />
                            <span className='checkmark' />
                            Men
                          </label>
                          <h6>(22)</h6>
                        </div>
                        <div className='d-flex justify-content-between '>
                          <label className='checkbox-container'>
                            <input type='checkbox' />
                            <span className='checkmark' />
                            women
                          </label>
                          <h6>(3)</h6>
                        </div>
                        <div className='d-flex justify-content-between '>
                          <label className='checkbox-container'>
                            <input type='checkbox' />
                            <span className='checkmark' />
                            blouses
                          </label>
                          <h6>(22)</h6>
                        </div>
                        <div className='d-flex justify-content-between '>
                          <label className='checkbox-container'>
                            <input type='checkbox' />
                            <span className='checkmark' />
                            Denim
                          </label>
                          <h6>(3)</h6>
                        </div>
                        <div className='d-flex justify-content-between '>
                          <label className='checkbox-container'>
                            <input type='checkbox' />
                            <span className='checkmark' />
                            Jacket
                          </label>
                          <h6>(22)</h6>
                        </div>
                        <div className='d-flex justify-content-between '>
                          <label className='checkbox-container'>
                            <input type='checkbox' />
                            <span className='checkmark' />
                            Jeans
                          </label>
                          <h6>(3)</h6>
                        </div>
                        <div className='d-flex justify-content-between '>
                          <label className='checkbox-container'>
                            <input type='checkbox' />
                            <span className='checkmark' />
                            Outer Wear
                          </label>
                          <h6>(22)</h6>
                        </div>
                        <div className='d-flex justify-content-between '>
                          <label className='checkbox-container'>
                            <input type='checkbox' />
                            <span className='checkmark' />
                            Trouser
                          </label>
                          <h6>(3)</h6>
                        </div>
                      </div>
                    </div>
                    <hr />
                    {/* brand filter */}
                    <div className='filter-brand mt-4  mb-4 '>
                      <div className='d-flex justify-content-between  mt-4'>
                        <h6 className='text-uppercase fw-bold  '>
                          <i className='fa-solid fa-chevron-up fa-sm pe-3 ' />
                          Brand
                        </h6>
                        <p>reset</p>
                      </div>
                      <div>
                        <div className='d-flex justify-content-between '>
                          <label className='checkbox-container'>
                            <input type='checkbox' />
                            <span className='checkmark' />
                            Men
                          </label>
                          <h6>(22)</h6>
                        </div>
                        <div className='d-flex justify-content-between '>
                          <label className='checkbox-container'>
                            <input type='checkbox' />
                            <span className='checkmark' />
                            women
                          </label>
                          <h6>(3)</h6>
                        </div>
                        <div className='d-flex justify-content-between '>
                          <label className='checkbox-container'>
                            <input type='checkbox' />
                            <span className='checkmark' />
                            blouses
                          </label>
                          <h6>(22)</h6>
                        </div>
                        <div className='d-flex justify-content-between '>
                          <label className='checkbox-container'>
                            <input type='checkbox' />
                            <span className='checkmark' />
                            Denim
                          </label>
                          <h6>(3)</h6>
                        </div>
                        <div className='d-flex justify-content-between '>
                          <label className='checkbox-container'>
                            <input type='checkbox' />
                            <span className='checkmark' />
                            Jacket
                          </label>
                          <h6>(22)</h6>
                        </div>
                        <div className='d-flex justify-content-between '>
                          <label className='checkbox-container'>
                            <input type='checkbox' />
                            <span className='checkmark' />
                            Jeans
                          </label>
                          <h6>(3)</h6>
                        </div>
                        <div className='d-flex justify-content-between '>
                          <label className='checkbox-container'>
                            <input type='checkbox' />
                            <span className='checkmark' />
                            Outer Wear
                          </label>
                          <h6>(22)</h6>
                        </div>
                        <div className='d-flex justify-content-between '>
                          <label className='checkbox-container'>
                            <input type='checkbox' />
                            <span className='checkmark' />
                            Trouser
                          </label>
                          <h6>(3)</h6>
                        </div>
                      </div>
                    </div>
                    <hr />
                    {/* color filter */}
                    <div className='filter-color mt-4  mb-4 '>
                      <div className='d-flex justify-content-between  mt-4'>
                        <h6 className='text-uppercase fw-bold  '>
                          <i className='fa-solid fa-chevron-up fa-sm pe-3 ' />
                          Color
                        </h6>
                        <p>reset</p>
                      </div>
                      <div>
                        {/* Color options */}
                        <ul className='color-options'>
                          <li className='color-option active'>
                            <span />
                          </li>
                          <li className='color-option'>
                            <span />
                          </li>
                          <li className='color-option'>
                            <span />
                          </li>
                          <li className='color-option'>
                            <span />
                          </li>
                          <li className='color-option'>
                            <span />
                          </li>
                          <li className='color-option'>
                            <span />
                          </li>
                          <li className='color-option'>
                            <span />
                          </li>
                          <li className='color-option'>
                            <span />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <hr />
                    {/* Material filter */}
                    <div className='filter-material mt-4  mb-4 '>
                      <div className='d-flex justify-content-between  mt-4'>
                        <h6 className='text-uppercase fw-bold  '>
                          <i className='fa-solid fa-chevron-up fa-sm pe-3 ' />
                          Material
                        </h6>
                        <p>reset</p>
                      </div>
                      <div>
                        <div className='d-flex justify-content-between '>
                          <label className='checkbox-container'>
                            <input type='checkbox' />
                            <span className='checkmark' />
                            Men
                          </label>
                          <h6>(22)</h6>
                        </div>
                        <div className='d-flex justify-content-between '>
                          <label className='checkbox-container'>
                            <input type='checkbox' />
                            <span className='checkmark' />
                            Trouser
                          </label>
                          <h6>(3)</h6>
                        </div>
                      </div>
                    </div>
                    <hr />
                    {/* Size filter */}
                    <div className='filter-size mt-4  mb-4 '>
                      <div className='d-flex justify-content-between  mt-4'>
                        <h6 className='text-uppercase fw-bold  '>
                          <i className='fa-solid fa-chevron-up fa-sm pe-3 ' />
                          Size
                        </h6>
                        <p>reset</p>
                      </div>
                      <div className='d-flex flex-wrap gap-2 '>
                        <div className='size-box'>XS</div>
                        <div className='size-box'>S</div>
                        <div className='size-box'>M</div>
                        <div className='size-box'>L</div>
                        <div className='size-box'>XL</div>
                        <div className='size-box'>XXL</div>
                        <div className='size-box'>3XL</div>
                        <div className='size-box'>4XL</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*filter left offcanvas end */}
            </div>
            <div className='col-lg-9 product-filter'>
              {food_list.map((item, index) => {
                if (category === 'All' || category === item.category) {
                  return (
                    <FoodItem
                      key={index}
                      id={item._id}
                      name={item.name}
                      description={item.description}
                      price={item.price}
                      image={item.image}
                    />
                  )
                }
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SideBar
