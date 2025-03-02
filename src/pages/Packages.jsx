import React from 'react'
import Navbar from '../layout/Navbar'
import PackageListings from '../components/PackageListings'

const Packages = () => {
  return (
    <>
    <Navbar />
    <h2 className="text-4xl font-bold text-center mb-8">Featured Travel Packages</h2>
    <PackageListings />
    </>
  )
}

export default Packages