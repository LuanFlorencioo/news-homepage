import { Fragment } from 'react';

export default function Aside({
  data,
}: {
  data: {
    title: string,
    articles: {
      title: string,
      description: string,
    }[],
  },
}) {
  return (
    <aside className="w-full max-w-[343px] mx-auto px-6 py-7 bg-gray-100 flex flex-col gap-7">
      <h3 className="font-title-200 text-orange">
        {data.title}
      </h3>

      <nav className="w-full flex flex-col gap-7">
        {
          data.articles.map((article, i) => (
            <Fragment key={i}>
              {i > 0 && <span className="w-full h-[1px] bg-gray-200" />}

              <article className="w-full flex flex-col gap-2 group">
                <h4 className="font-title-300 text-gray-400 group-hover:text-orange md:cursor-pointer">
                  {article.title}
                </h4>

                <p className="font-text-normal text-gray-300">
                  {article.description}
                </p>
              </article>
            </Fragment>
          ))
        }
      </nav>
    </aside>
  )
}
