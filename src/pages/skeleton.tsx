import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

// Text legibility:
// https://www.smashingmagazine.com/2020/07/css-techniques-legibility/

const Skeleton = () => {
  return (
    // Nice text-shadow for orange titles (or any text, but change the shadow color)
    // text-shadow: 1px 1px 0px rgb(82 35 17 / 30%);
    // TODO: We can wrap this in another div to control the scrolling right here in the page, if we want.
    <div
      className={`flex min-h-screen flex-col bg-[#a2bba8] px-32 py-16 ${inter.className}`}
    >
      <div className="my-6 flex grow flex-col items-center justify-between rounded-lg bg-[#fdecd9] shadow-2xl shadow-[#1e2b20]">
        <h1 className="-mt-6 select-none rounded-sm bg-[#dc815f] px-6 py-2 text-sm font-medium uppercase text-gray-100 shadow">
          Lorem, ipsum.
        </h1>
        <div className="grow p-4">
          <p className="mb-4 text-gray-900">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
            suscipit, voluptates, ut reprehenderit deserunt doloribus hic dolor
            possimus non repellendus consectetur fuga? Reiciendis quod
            repudiandae quia ex id vitae libero cumque, dolores omnis nesciunt
            neque quisquam veritatis. Quis voluptatibus eos eum accusantium
            eaque dolor vitae omnis, qui, totam iste in, hic assumenda ducimus.
            Architecto doloribus rerum, repudiandae voluptates facere excepturi
            aliquam. Eum, laudantium reprehenderit animi ad similique,
            consectetur minima laboriosam, sint nisi sequi qui quos accusantium.
            Repellat, aliquam? Quas porro unde distinctio voluptas, dolorem vel
            soluta eaque iusto, culpa animi quidem. Rerum voluptatum
            reprehenderit vel cum nesciunt quas officia harum.
          </p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            eveniet aliquid expedita unde? Optio asperiores aliquam odit,
            voluptatibus unde suscipit culpa quae ab rerum eveniet, laudantium
            amet vero labore ut sapiente quisquam laboriosam ratione iure quod
            tempora quis cum. Deserunt fugit doloribus hic suscipit sequi
            explicabo sunt dolor officiis, ipsam maiores exercitationem fuga
            mollitia. Eveniet ducimus pariatur dolores doloribus nulla iure
            ipsum adipisci ullam qui vero? Enim adipisci magni eum tempore nam
            cupiditate pariatur molestias sequi quis iure, natus praesentium
            velit officiis rem accusantium maxime amet in reiciendis! Esse
            libero sunt voluptates molestias distinctio, dolore quidem magnam
            aliquid veniam doloremque modi minus ullam aliquam ea odio unde
            repudiandae maxime perferendis? Asperiores autem reprehenderit sequi
            sunt, natus aspernatur sed dolorem sapiente cumque soluta, expedita
            optio quasi magnam laboriosam qui libero placeat commodi, sint
            tempore sit. Consequatur, magnam! Incidunt, itaque cum vero quod non
            explicabo voluptas minima ipsum dicta eum dolores voluptatibus quam.
            Asperiores, placeat voluptate consequatur magni necessitatibus
            maiores, error architecto amet ut suscipit debitis deleniti,
            similique officia molestias nostrum! Molestiae voluptatem fugiat
            totam quaerat. Quibusdam praesentium blanditiis deleniti consequatur
            sequi id rem iusto iure? Ea aperiam voluptatibus provident fuga
            impedit at earum aliquid accusamus voluptatum, voluptates eum vel
            quasi illo tempora architecto necessitatibus quo culpa blanditiis
            mollitia, excepturi libero totam incidunt assumenda ullam. Est
            dolor, iusto culpa hic minima laudantium accusamus totam molestias
            accusantium mollitia officiis temporibus earum id cum alias. Harum,
            repudiandae nesciunt. Ipsum aliquam dolorum deleniti libero
            doloribus quo rem quam neque, dignissimos iure praesentium
            architecto reprehenderit placeat ea nulla expedita corrupti qui at
            laborum. Atque accusantium repudiandae excepturi minima totam
            aliquam nisi fuga ipsa quas consequatur. Porro tempore sequi
            cupiditate ipsam sunt quas laudantium, excepturi ex, sapiente
            reiciendis iure neque exercitationem. Assumenda labore accusantium
            animi illum fuga fugit odit, neque provident ratione magni veritatis
            dicta deserunt aut obcaecati non eum culpa architecto doloremque
            quae, facere consequatur. Exercitationem non natus accusamus
            reprehenderit a? Suscipit quod beatae doloribus debitis ab facere
            iste maiores reprehenderit laboriosam, aperiam provident obcaecati
            distinctio nisi aliquid. Praesentium commodi nemo itaque, deleniti
            cumque et illo tempore maiores optio officiis voluptatem, expedita
            impedit, in provident dignissimos eius aliquam fuga! Exercitationem
            vitae beatae cupiditate saepe nisi quis magnam. Nemo neque eaque
            aliquid sed totam debitis in iste id, delectus vero perferendis unde
            perspiciatis repudiandae saepe hic. Neque cumque, laboriosam optio
            tempora et adipisci facilis quae omnis non laudantium dolorum,
            provident, blanditiis officiis debitis deleniti ex inventore totam
            at ipsa eaque autem sunt harum! Beatae vero ipsam suscipit, quis
            omnis nihil? Nostrum, ad? Nesciunt quos in, aut amet voluptatum iure
            optio dignissimos necessitatibus eligendi reiciendis nemo ipsam unde
            tempora, voluptates accusamus fugiat mollitia. Fugiat, quos quo
            consectetur et soluta minus dolorum id quisquam possimus expedita,
            voluptates minima! Nemo, velit magni animi exercitationem a
            perspiciatis. Voluptatum, ipsum dolorum distinctio molestiae
            explicabo quia magni dicta soluta nisi delectus incidunt accusantium
            inventore labore totam mollitia atque, quas, id quam odio neque?
            Accusantium nihil explicabo corrupti perspiciatis velit, recusandae
            quibusdam nostrum! Rerum eos aperiam inventore ab in ratione
            exercitationem amet excepturi quisquam?
          </p>
        </div>
        <h1 className="-mb-6 select-none rounded-sm bg-[#dc815f] px-6 py-2 text-sm font-medium uppercase text-gray-100 shadow">
          Lorem, ipsum.
        </h1>
      </div>
    </div>
  )
}

export default Skeleton
