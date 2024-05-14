import React from 'react'

export const BentoGallery = () => {
  return (
<section
      id="bento"
      className="flex flex-col h-screen w-full relative items-center overflow-hidden justify-center bg-gradient-to-b from-rose-200/30 via-white to-rose-200/30 space-y-10"
    >
      <div className="w-4/5 h-[70%]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-[90%]">
          <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
            <a
              href=""
              className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
            >
              <img
                src="https://scontent.fpei3-1.fna.fbcdn.net/v/t39.30808-6/439432783_122139078248207485_817957288521230196_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=kfZ2Y6-nAGgQ7kNvgFVsIjn&_nc_ht=scontent.fpei3-1.fna&oh=00_AYB7qwSyabq8qHL3pbhUjuUNsiHytTWfT5rrxwc7zw5oAA&oe=66499F21"
                alt="Curso"
                className="absolute inset-0 h-full w-full object-contain  group-hover:scale-105 transition-transform duration-500 ease-in-out "
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                Cursos
              </h3>
            </a>
          </div>
          <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50 items-center my-auto">
            <a
              href=""
              className="group relative flex flex-col overflow-hidden rounded-lg pb-4 pt-48 mb-4"
            >
              <img
                src="./two.webp"
                alt=""
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">

              </h3>
            </a>
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-64"
              >
                <img
                  src="./hibrid.webp"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">

                </h3>
              </a>
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
              >
                <img
                  src="./3.webp"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">

                </h3>
              </a>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
            <a
              href=""
              className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
            >
              <img
                src="./messagelove.webp"
                alt=""
                className="absolute inset-0  h-full w-full object-cover  group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                {'<3'}
              </h3>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
