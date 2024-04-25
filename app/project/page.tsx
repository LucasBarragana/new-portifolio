import { Card, CardContent } from "@/components/ui/card";
import {simpleProjectCard } from "../lib/interface"; 
import { client, urlFor } from "../lib/sanity";
import Image from "next/image";
import Link from "next/link";
import BackHome from "../components/BackHome";

export const revalidate = 30; 

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
  
    return data;
  }

export default async function ProjectPage(){
    const projectData: simpleProjectCard[] = await getProjectData();
    return(
        <div>
            <h1 className="flex align-center justify-center text-4xl font-semibold  mb-5 mt-10 underline">Projects</h1>
            <BackHome />
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
                    <div>
                    <h3 className="text-lg line-clamp-2 font-bold">{post.title}</h3>
                    <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">
                        {post.description}
                    </p>
                    <Card className="mt-2">
                        <CardContent className="flex justify-between">
                        <div className="mt-4">
                            <h3 className="text-xs">Technologies Used:</h3>
                            <div className="flex flex-wrap mb--2 ">                
                            {Object.entries(post).map(([key, value]) => {
                                if (key.includes("tecsImage") && value) {
                                    return (
                                    <div key={key} className=" p-1">                        
                                        <Image
                                        src={urlFor(value).url()}
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
                        </div>
                        <div className="mt-2">
                            <Link href={post.githubUrl} target="_blank" className="underline text-xs italic hover:scale-110">
                            Github
                            <Image src={'/github.png'} width={25} height={25} alt="github logo" />  
                            </Link>                       
                        </div>     
                        <div className="mt-2">
                            <Link href={post.website} target="_blank" className="underline text-xs itali hover:scale-110">
                            Website                
                            </Link>
                        </div>
                        </CardContent>              
                    </Card>
                    </div>    
                </CardContent>
                </Card>
            ))}        
            </div>
        </div>            
    )
}