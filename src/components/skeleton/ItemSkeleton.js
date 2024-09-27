import React from 'react'
import logo from '../../assets/images/logos/logo.webp'

function ItemSkeleton() {
  return (
    <div role="status" className="space-y-5 animate-pulse">
      <div className="flex items-center justify-center w-full h-80  bg-gray-300 rounded  dark:bg-gray-700">
        <img src={logo} className="opacity-40" />
      </div>
      <div className="w-full">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-4"></div>
        <div className="h-fit flex justify-between">
          <div className="h-2.5 w-14 bg-gray-200 rounded-full dark:bg-gray-700 mb-4"></div>
          <div className="h-2.5 w-14 bg-gray-200 rounded-full dark:bg-gray-700 mb-4"></div>
        </div>
      </div>
    </div>
  );
}

export default ItemSkeleton