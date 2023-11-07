import React from 'react'

function Cards({username,studying,field,using}) {

  return (
    <div class="flex max-w-2xl flex-col items-center rounded-md border md:flex-row mb-10 ">
    <div class="h-full w-full md:h-[200px] md:w-[300px]">
      <img
        src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
        alt="Laptop"
        class="h-full w-full rounded-md object-cover"
      />
    </div>
    <div>
      <div class="p-4">
        <h1 class="inline-flex items-center text-lg font-semibold">
          About {username}{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="ml-2 h-4 w-4"
          >
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </h1>
        <p class="mt-3 text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          debitis?
        </p>
        <div class="mt-4">
          <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            {studying}
          </span>
          <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            {field}
          </span>
          <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            {using}
          </span>
        </div>
        <div class="mt-3 flex items-center space-x-2">
          <img
            class="inline-block h-8 w-8 rounded-full"
            src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
            alt="Dan_Abromov"
          />
          <span class="flex flex-col">
            <span class="text-[10px] font-medium text-gray-900">Dan Abromov</span>
            <span class="text-[8px] font-medium text-gray-500">@dan_abromov</span>
          </span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Cards