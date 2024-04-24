import Left from "@/app/components/icons/Left";
import { fullProject } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { Card, CardContent } from "@/components/ui/card";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 30; // revalidate at most 30 seconds

async function getData(slug: string) {
  const query = `    
  *[_type == "project" && slug.current == '${slug}'] {
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
    titleImage,
    content
  }[0]`;

  const data = await client.fetch(query);
  return data;
}

export default async function ProjectArticle({
  params,
}: {
  params: { slug: string };
}) 
{
  const data: fullProject = await getData(params.slug);


  return (
    <div className="mt-8">
        <div className="flex justify-between items-center mb-4">
        <Link href="/" className="flex font-semibold hover:underline seta-link">
          <Left />
          Back
        </Link>    
        <div className="text-center">
          <span className="block text-base text-primary font-semibold tracking-wide uppercase">
            Bears <span className="text-orange-500">Dev</span> - PROJECT
          </span>
        </div>
        <div></div> 
    </div>

      <h1>        
        <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
          {data.title}
        </span>
      </h1>

      <Image
        src={urlFor(data.titleImage).url()}
        width={800}
        height={800}
        alt="Title Image"
        priority
        className="rounded-lg mt-8 border"
      />

      <div className="flex flex-wrap mt-4" style={{ maxHeight: "150px", overflowY: "auto" }}>
        {Object.keys(data).map((key, index) => {
          if (key.includes("photo") && data[key]) {
            return (
              <div key={index} className="flex-none mr-1 mb-4">
                <Image
                  src={urlFor(data[key]).url()}
                  width={200}
                  height={200}
                  alt="Photo"
                  priority
                  className="rounded-lg border"
                />
              </div>
            );
          }
          return null;
        })}
      </div>      

      <div className="mt-4">
        <Card>
          <CardContent>
            <div className="flex justify-between">
              <div>
                <h3 className="mt-2 ">Technologies Used:</h3>
                <div className="flex flex-wrap mb--2 ">                
                  {Object.keys(data).map((key, index) => {
                    if (key.includes("tecsImage") && data[key]) {
                      return (
                        <div key={index} className="w-1/8 md:w-1/8 lg:w-1/10 p-1">                        
                          <Image
                            src={urlFor(data[key]).url()}
                            alt="technology image"
                            width={40}
                            height={40}
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
                <Link href={data.githubUrl} target="_blank" className="underline italic hover:scale-110">
                  Github
                  <Image src={'/github.png'}  width={40} height={40} alt="github logo"/>  
                </Link>                 
              </div>
              <div className="mt-2">
                <Link href={data.website} target="_blank" className="underline italic hover:scale-110">
                  Website                
                </Link>
              </div>
            </div>            
          </CardContent>              
        </Card>
      </div>
      

      <div className="mt-16 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary">
        <h1>O que eu aprendi criando esse projeto?</h1>
        <PortableText value={data.content} />
      </div>
    </div>
  );
}
