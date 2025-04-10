const callouts = [
  {
    name: 'Desk and Office',
    description: 'Work from home accessories',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-02-edition-01.jpg',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'Self-Improvement',
    description: 'Journals and note-taking',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-02-edition-02.jpg',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'Travel',
    description: 'Daily commute essentials',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-02-edition-03.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
]

export default function ProductPrev() {
  return (
    <>
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-10 lg:max-w-none">
            <h2 className="text-2xl font-bold text-gray-900">Shop by Category</h2>

            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <img
                    alt={callout.imageAlt}
                    src={callout.imageSrc}
                    className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
                  />
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex bg-gray-100 ssm:flex-col lg:flex-row items-center justify-center gap-3">
        <div className="relative rounded-xl overflow-auto p-2 hover:animate-pulse">
          <div className="overflow-hidden relative max-w-md mx-auto bg-white dark:bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 dark:highlight-white/5">
            <img src="https://store.rhyner.ch/media/9593/catalog/kuhn-rikon-inox-duromatic-comfort-schnellkochtopf-60-liter-5.jpg?size=600" alt="" className="absolute -left-6 w-28 rounded-full shadow-lg" />
            <div className="min-w-0 py-5 pl-28 pr-5">
              <div className="text-slate-900 font-medium text-sm sm:text-base truncate dark:text-shadow-slate-200">
                Home Appliances
              </div>
              <div className="text-slate-500 font-medium text-sm sm:text-base leading-tight truncate dark:text-slate-400">
              View More...
              </div>
            </div>
          </div>
        </div>
        <div className="relative rounded-xl overflow-auto p-2 hover:animate-pulse">
          <div className="overflow-hidden relative max-w-md mx-auto bg-white dark:bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 dark:highlight-white/5">
            <img src="https://th.bing.com/th/id/R.4166b7d1cc8241de36a326ab87b4e363?rik=MX44Xo2giFv%2fjA&riu=http%3a%2f%2fwww.lovethispic.com%2fuploaded_images%2f62005-Modern-Home-Decor.jpg&ehk=8P7wHnpaiQGH8M99WMSLnSumG1lw1Ga6che%2bN419byM%3d&risl=&pid=ImgRaw&r=0" alt="" className="absolute -left-6 w-28 rounded-full shadow-lg" />
            <div className="min-w-0 py-5 pl-28 pr-5">
              <div className="text-slate-900 font-medium text-sm sm:text-base truncate dark:text-shadow-slate-200">
                Home Decor
              </div>
              <div className="text-slate-500 font-medium text-sm sm:text-base leading-tight truncate dark:text-slate-400">
              View More...
              </div>
            </div>
          </div>
        </div>
        <div className="relative rounded-xl overflow-auto p-2 hover:animate-pulse">
          <div className="overflow-hidden relative max-w-md mx-auto bg-white dark:bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 dark:highlight-white/5">
            <img src="https://image.smythstoys.com/zoom/187819_1.jpg" alt="" className="absolute -left-6 w-28 rounded-full shadow-lg" />
            <div className="min-w-0 py-5 pl-28 pr-5">
              <div className="text-slate-900 font-medium text-sm sm:text-base truncate dark:text-shadow-slate-200">
                Toys and Games
              </div>
              <div className="text-slate-500 font-medium text-sm sm:text-base leading-tight truncate dark:text-slate-400">
              View More...
              </div>
            </div>
          </div>
        </div>
        <div className="relative rounded-xl overflow-auto p-2 hover:animate-pulse">
          <div className="overflow-hidden relative max-w-md mx-auto bg-white dark:bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 dark:highlight-white/5">
            <img src="https://img.freepik.com/premium-photo/school-supplies-light-background_926199-9327.jpg" alt="" className="absolute -left-6 w-28 rounded-full shadow-lg" />
            <div className="min-w-0 py-5 pl-28 pr-5">
              <div className="text-slate-900 font-medium text-sm sm:text-base truncate dark:text-shadow-slate-200">
                School Supplies
              </div>
              <div className="text-slate-500 font-medium text-sm sm:text-base leading-tight truncate dark:text-slate-400">
              View More...
              </div>
            </div>
          </div>
        </div>
        <div className="relative rounded-xl overflow-auto p-2 hover:animate-pulse">
          <div className="overflow-hidden relative max-w-md mx-auto bg-white dark:bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 dark:highlight-white/5">
            <img src="https://10best.co.za/wp-content/uploads/2021/04/Best-Tech-Gadgets-2020.webp" alt="" className="absolute -left-6 w-28 rounded-full shadow-lg" />
            <div className="min-w-0 py-5 pl-28 pr-5">
              <div className="text-slate-900 font-medium text-sm sm:text-base truncate dark:text-shadow-slate-200">
                Gadgets
              </div>
              <div className="text-slate-500 font-medium text-sm sm:text-base leading-tight truncate dark:text-slate-400">
                View More...
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}
