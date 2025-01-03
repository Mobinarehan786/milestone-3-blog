import React from 'react'

function Newsletter() {
  return (
    <section className="w-full overflow-hidden">
      <div className="md:mt-10 my-14 text-center mx-4 md:mx-0">
        <h2 className="font-inter text-[36px] font-medium text-red-700 underline mb-4">Stay Updated with Our Newsletter</h2>
        <p className="font-inter text-[18px] text-[#333333] font-normal mb-8">
          Subscribe to our newsletter to receive the latest blog posts, tips, and exclusive offers directly in your inbox.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 border-[1px] border-[#68686894] rounded-[4px]"
            required
          />
          <button
            className="px-6 py-2 bg-fuchsia-950 text-[#ffffff] font-normal text-[17px] rounded-[4px] mt-6 md:mt-0"
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
