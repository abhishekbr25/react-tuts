import React from 'react'

function Cards(props) {
  return (
    <div>
        <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800 justify-center">
         <img class="w-36 rounded-2xl" src="https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F292d0562-b78f-4fe1-936b-1b6df7a69c78_800x500.gif" alt="" width="384" height="512"/>
         <div class="pt-6 space-y-4">
            <p class="text-lg">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, veniam!
            </p>
    <figcaption>
      <div>
        {props.name}
      </div>
      <div>
        Staff Engineer, Algolia
      </div>
      <button>google</button>
    </figcaption>
  </div>
</figure>
    </div>
  )
}

export default Cards