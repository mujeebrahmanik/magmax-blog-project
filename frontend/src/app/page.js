import Image from "next/image";
import { getArticles } from "../../lib/api";
import ArticleCard from "@/components/ArticleCard";
import Link from "next/link";
import SearchBar from "@/components/SearchBar";



export const metadata = {
  title : 'Blog - Home',
  description : 'Latest articles and news'
}


export default async function Home(props) {
  const searchParams = await props.searchParams;
  const searchQuery = searchParams.search || '';
  const page = Number(searchParams?.page) || 1;
  const data = await getArticles(page,searchQuery);
  const articles = data.results || [];
  const totalPages = Math.ceil(data.count / 8);


  const links =[];
  for (let i=1;i<=totalPages;i++){
      links.push(
        <Link key={i} href={`?page=${i}`}  className={`px-4 py-2 rounded ${i === page ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300" }`}>
            {i}
          </Link>
      );
  }

 

  return (
    <div className="flex flex-col min-h-screen justify-center  bg-zinc-50 font-sans dark:bg-black">
     <div className="flex flex-col py-10 px-8 lg:px-15 max-w-[1400px] ">
      <h1 className="text-4xl text-center font-bold mt-5 mb-3">
        Latest Articles
      </h1>

      <SearchBar/>

      {searchQuery &&(

        <div className="mb-8 text-lg text-gray-300 text-center ">
          {data.count > 0 ?(
            <h6>Found {data.count} result(s) for <strong>{searchQuery}</strong></h6>

          ):(
            <h6>No results found for <strong>{searchQuery}</strong></h6>
          )
          }
        </div>

      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 space-y-6">
        {articles.map((i,index)=>(
          <ArticleCard article={i} key={index}/>
        ))}
      </div>
      
      {/* pagination */}
        {totalPages>1 &&(
            <div className="flex justify-center items-center gap-2 lg:mt-2 mt-6">
              {page > 1 ?(
                  <Link href={`?page=${page-1}`} className="px-4 py-2 rounded bg-gray-800 text-white  hover:bg-gray-700">
                      Prev
                  </Link>
              ):(
                <span className="px-4 py-2 rounded bg-gray-300 text-gray-500 cursor-not-allowed">
                  Prev
                </span>
              )}
                
                {links}

              {page<totalPages ? (
                <Link href={`?page=${page+1}`} className="px-4 py-2 rounded bg-gray-800 text-white hover:bg-gray-700">
                    Next
                </Link>
              ):(
                <span className="px-4 py-2 rounded bg-gray-300 text-gray-500 cursor-not-allowed">
                  Next
                </span>
              )}
                
            </div>
        )}

      
     </div>

    </div>
  );
}
