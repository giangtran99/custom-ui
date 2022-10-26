/**
 * 📝 Notes for Contributors:
 * 
 * - When creating an interactive component, we recommend consuming the
 * component hook created.
 * 
 * For example, if you wanted to build an accordion component,
 * you'll first create a `useAccordion` hook and then create an `Accordion` component
 * 
 * - Ensure this component is properly themable by following [this guide](https://chakra-ui.com/docs/theming/component-style)
 * 
 * - Ensure the component is composable and can adapt to multiple use-cases
 * 
 * @see Guide https://chakra-ui.com/guides/component-guide
 * @see Theming https://chakra-ui.com/docs/theming/component-style
 */

import React, { FC, useEffect, useRef, useState } from 'react'
import { formatMoney, getElipsisString } from '@hoanggiangg199/utilities'
import { Tag } from '@chakra-ui/tag'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

interface CarouselBarProps {
  autoPlay?: boolean
  listItems: any[]
  title: string,
}

export  function CarouselBar({ listItems, title = "Game On Sales" }: CarouselBarProps) {
  const [itemsPerPage, setItemsPerPage] = useState(5)
  const numberOfPage = Math.ceil(listItems.length / itemsPerPage)
  const currentFrameRef = useRef(1)

  useEffect(() => {
    onResize()
  }, [])



  const onResize = () => {
    const scrollBar = document.getElementById("scroll-bar")
    scrollBar?.addEventListener("wheel", (e) => e.preventDefault(), { passive: false })
    window.addEventListener("resize", () => {
      const break_point_1 = 1000
      const break_point_2 = 887
      if (window.innerWidth > break_point_1) {
        setItemsPerPage(5)
      }
      if (window.innerWidth <= break_point_1 && window.innerWidth >= break_point_2) {
        setItemsPerPage(4)
      }
      if (window.innerWidth < break_point_2) {
        setItemsPerPage(3)
      }
    });
  }

  const slideNext = () => {
    const numberOfRestItem = (listItems.length % itemsPerPage)
    const numberOfRestItemsInLastPage = numberOfRestItem === 0 ? itemsPerPage : numberOfRestItem
    const scrollBar = document.getElementById("scroll-bar")
    const widthScrollBar = (103 / 100) * (scrollBar?.offsetWidth || 0)
    if (currentFrameRef.current === numberOfPage - 1) {
      scrollBar?.scrollTo(((currentFrameRef.current - 1) * widthScrollBar + ((widthScrollBar * numberOfRestItemsInLastPage / itemsPerPage))), 0);
    }
    else {
      scrollBar?.scrollTo(((currentFrameRef.current - 1) * widthScrollBar + widthScrollBar), 0);
    }
    if (currentFrameRef.current < numberOfPage - 1) {
      currentFrameRef.current += 1
    }
  }

  const slidePrev = () => {
    const scrollBar = document.getElementById("scroll-bar")
    const widthScrollBar = scrollBar?.offsetWidth || 0
    scrollBar?.scrollTo((currentFrameRef.current - 2) * widthScrollBar, 0);
    if (currentFrameRef.current > 1) {
      currentFrameRef.current -= 1
    }
  }


  const renderPagingListItem = () => {
    const ratioPerItem = Math.ceil(90 / itemsPerPage)
    return <>
      {Array(numberOfPage).fill(null).map((value, currentPage) => {
        let end = (currentPage + 1) * itemsPerPage
        let start = (currentPage + 1) * itemsPerPage - itemsPerPage

        const isFirstPage = currentPage + 1 === 1
        const isEnoughtItemsPerPage = listItems.length % itemsPerPage === 0
        return (<>
          <div key={currentPage + 1} className={`inline-block w-full ${!isFirstPage ? "ml-[2.3%]" : ""} `}>
            <div className={`flex flex-wrap mt-3  ${isEnoughtItemsPerPage || isFirstPage ? "justify-between" : "gap-x-[3%]"}`}>
              {listItems.slice(start, end).map((item: any) => {
                return <>
                  <div key={item.id} style={{ flexBasis: `${ratioPerItem}%` }}>
                    <div className='basis-3/4'>
                      <img className='rounded' src={`${item.thumbnailUrl}`}></img>
                    </div>
                    <div className='mt-3 basis-1/4'>
                      <p className='text-[10px] text-slate-300 '>BASE GAME</p>
                      <p className='text-base'>{getElipsisString(item.name, 34)}</p>
                      <div className='flex flex-row mt-2'>
                        <Tag className='px-6 h-[100%] m-auto py-1 basis-1/4' size={"sm"} key={3} variant='solid' colorScheme='teal'>
                          -50%
                        </Tag>
                        <div className='basis-3/4'>
                          <div className='float-right p-auto'>
                            <p className='text-sm line-through'>{`${formatMoney(item.price)}`}</p>
                            <p className='text-sm'>{`${formatMoney(item.price / 2)}`}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              })}
            </div>
          </div>
        </>)
      })}
    </>
  }

  return <>
    <div className='flex flex-row place-content-between mt-5'>
      <div className='flex items-center gap-x-1'>
        <h2 className='leading-[8px] text-lg font-medium'>{title}</h2>
        <ChevronRightIcon width={3} height={3} className="" />

      </div>
      <div className='flex flex-row'>
        <ChevronLeftIcon width={6} height={6} onClick={slidePrev} className="rounded-full bg-gray-700 mr-2 border-2 w-[28px] h-[28px]" />
        <ChevronRightIcon width={6} height={6} onClick={slideNext} className="rounded-full bg-gray-700 border-2 w-[28px] h-[28px]" />

      </div>
    </div>
    <div>
      <div id="scroll-bar" className='pointer-events-none scroll-smooth overflow-x-scroll bordered whitespace-nowrap'>
        {renderPagingListItem()}

        {/* <div className='inline-block'>
                     <div className={`flex flex-wrap mt-3 justify-between`}>
                         {listItems.slice(0, 5).map((item: any) => {
                             return <>
                                 <div key={item.id} className={`basis-[19%]`}>
                                     <img className='rounded' src={`${item.thumbnailUrl}`}></img>
                                 </div>
                             </>
                         })}
                     </div>
                 </div> */}


        {/* <div className='bg-white w-[1000px] h-[300px] inline-table'>
 
                 </div> */}
      </div>
    </div>


  </>
}

CarouselBar.displayName = CarouselBar