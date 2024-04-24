import { Card, CardContent } from "@/components/ui/card";
import { simpleBlogCard, simpleProjectCard } from "./lib/interface"; // Adicione o tipo de dados do projeto
import { client, urlFor } from "./lib/sanity";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Hero from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

export const revalidate = 30; 

async function getBlogData() {
  const query = `
    *[_type == 'blog'] | order(_createdAt desc) {
      title,
      smallDescription,
      "currentSlug": slug.current,
      titleImage
    }`;

  const data = await client.fetch(query);

  return data.slice(0, 4);
}

async function getProjectData() {
  const query = `
    *[_type == 'project'] | order(_createdAt desc) {
      "currentSlug": slug.current,
      title,
      description,
      githubUrl,
      website,
      tecsImage1,
      tecsImage2,
      tecsImage3,
      tecsImage4,
      tecsImage5,
      tecsImage6,
      photo1,
      photo2,
      photo3,
      photo4,
      photo5,
      photo6,
      titleImage
    }`;

  const data = await client.fetch(query);

  return data.slice(0, 4);
}

export default async function Home() {
  const blogData: simpleBlogCard[] = await getBlogData();
  const projectData: simpleProjectCard[] = await getProjectData();

  console.log(blogData);
  console.log(projectData);

  return (
    <div>
      <Hero />
      <About />
      <Skills />


      <h1 className="text-4xl font-semibold  mb-5 mt-10 underline">Projects</h1>

      <div id="projects" className="grid grid-cols-1  md:grid-cols-2 mt-5 gap-5 ">     
        {projectData.map((post, idx) => (
          <Card key={idx} className="hover:scale-110 ease-in-out duration-300">
            <Image
              src={urlFor(post.titleImage).url()}
              alt="image"
              width={500}
              height={500}
              className="rounded-t-lg h-[200px] object-cover"
            />

            <CardContent className="mt-5">
              <h3 className="text-lg line-clamp-2 font-bold">{post.title}</h3>
              <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">
                {post.description}
              </p>
              <div>
                <Card>
                  <CardContent>
                  <h3 className="mt-2 text-xs">Technologies Used:</h3>
                <div className="flex flex-wrap mb--2 ">                
                  {Object.keys(post).map((key) => {
                    if (key.includes("tecsImage") && post[key]) {
                      return (
                        <div key={key} className=" p-1">                        
                          <Image
                            src={urlFor(post[key]).url()}
                            alt="technology image"
                            width={30}
                            height={30}
                            className="object-cover rounded-lg"
                          />
                        </div>
                      );
                    }
                    return null;
                  })}
                  </div>
                  <div className="flex justify-between mt-2">
                    <Link href={post.githubUrl} target="_blank" className="underline text-xs italic hover:scale-110">
                      Github
                      <Image src={'/github.png'} width={30} height={30} alt="github logo"/>  
                    </Link> 
                    <Link href={post.website} target="_blank" className="underline text-xs itali hover:scale-110">
                      Website                
                    </Link>
                  </div>
                  </CardContent>              
                </Card>
              </div>
             
              
              <Button asChild className="w-full mt-7">
                <Link href={`/project/${post.currentSlug}`} className="hover:text-orange-500 transition ease-in-out duration-300">Read More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>


      <h1 className="text-4xl font-semibold  mb-5 mt-10 underline">Blog</h1>
      <div id="blog" className="grid grid-cols-1  md:grid-cols-2 mt-5 gap-5 ">        
        {/* Renderização dos posts do blog */}
        {blogData.map((post, idx) => (          
          <Card key={idx} className="hover:scale-110 transition ease-in-out duration-300">
            <Image
              src={urlFor(post.titleImage).url()}
              alt="image"
              width={500}
              height={500}
              className="rounded-t-lg h-[200px] object-cover"
            />

            <CardContent className="mt-5">
              <h3 className="text-lg line-clamp-2 font-bold">{post.title}</h3>
              <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">
                {post.smallDescription}
              </p>
              <Button asChild className="w-full mt-7">
                <Link href={`/blog/${post.currentSlug}` } className="hover:text-orange-500 transition ease-in-out duration-300">Read More</Link>
              </Button>
            </CardContent>
          </Card>          
        ))}
      </div>

      

      <Contact />
    </div>
  );
}
