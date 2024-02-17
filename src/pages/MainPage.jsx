import BasicHeader from "../components/common/BasicHeader"
import duck from "../imgs/오리.jpeg"
import clippers from "../imgs/클리퍼스.jpg"
import MainBanner from "./MainBanner"

const BasicLayout = () => {
  return (
    <div>
      <BasicHeader />
      <MainBanner />
      <main className="flex items-center justify-center min-h-[80vh] container mx-auto">
        {/* Grid */}
        <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {/* Card */}
          <section className="card transform hover:scale-105 transition duration-500">
            <div className="p-5 flex flex-col">
              {/* 여기서 overflow가 왜 필요할까? */}
              <div className="rounded-xl overflow-hidden">
                <img src={clippers} alt="" />
              </div>
              <div className=" line-clamp-1">
                <p className="">
                  <span className="mx-2">#수완</span>
                  <span className="mx-2">#수완</span>
                </p>
              </div>
              <p className="font-bold text-2xl md:text-3xl mt-3 line-clamp-1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus impedit esse quos voluptate suscipit
                aspernatur quod, perferendis deleniti harum odio, nesciunt ea animi commodi odit id asperiores alias
                voluptatem ratione?
              </p>
              <p className="text-slate-500 text-lg mt-3 line-clamp-3 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quas fugiat accusantium placeat totam
                quam? Quo necessitatibus eaque dolore, fugiat obcaecati nam, deleniti voluptate, totam maiores fuga
                cumque temporibus nesciunt.
              </p>
              <hr className="my-2  border-stone-900" />
              <div className="flex  items-center justify-between">
                <div className="flex items-center">
                  <img src={duck} alt="" className="w-10 h-10 rounded-xl" />
                  <p className="line-clamp-1 w-28 font-medium text-slate-500">이수완</p>
                </div>
                <p className="text-slate-500 font-medium">2024-01-04</p>
              </div>
            </div>
          </section>
          {/* Card end */}
        </article>
        {/* Grid end */}
      </main>
    </div>
  )
}

export default BasicLayout
