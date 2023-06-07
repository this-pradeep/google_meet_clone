import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
<section className="bg-primary relative z-10 py-[120px]">
  <div className="container mx-auto">
    <div className="-mx-4 flex">
      <div className="w-full px-4">
        <div className="mx-auto max-w-[400px] text-center">
          <h2
            className="mb-2 text-[50px] font-bold leading-none text-gray-800 sm:text-[80px] md:text-[100px]">
            404
          </h2>
          <h4 className="mb-3 text-[22px] font-semibold leading-tight text-gray-800">
            Oops! That page can’t be found
          </h4>
          <p className="mb-8 text-lg text-gray-800">
            The page you are looking for it maybe deleted
          </p>
          <Link
            to="/"
            className="hover:text-primary inline-block rounded-lg border border-gray-800 px-8 py-3 text-center text-base font-semibold text-gray-800 transition hover:bg-white"
          >
            Go To Home
          </Link>
        </div>
      </div>
    </div>
  </div>

</section>

  )
}

export default NotFound