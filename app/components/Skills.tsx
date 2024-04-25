// Importações
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

// Componente principal
export default async function Skills(){
    return(
        <section id="Skills" className="max-w-screen-lg mx-auto mt-10">
            <Image src={"/fundo-contact.jpg"} alt='fundoSkills' className='absolute z-5 opacity-10 left-20' width={1400} height={100}/>      
            <div>
                <h1 className="text-4xl mb-5 font-semibold underline">Tecnologies</h1>
                <blockquote className="italic mb-5">
                &quot;When you first learn how to understand and read technologies/frameworks, you can work and be a professional in any of them.&quot;
                </blockquote>
            </div>            
            <div>   
                <Card>
                    <CardContent className="flex flex-wrap justify-center z-20">
                        <h2 className="w-full text-center mb-4 mt-4">Here are some technologies that I have been using in my projects:</h2>
                        <div className="flex flex-wrap justify-center z-20">
                            <CardWrapper image="/html.png" alt="HTML" text="HTML" />
                            <CardWrapper image="/css.png" alt="CSS" text="CSS" />
                            <CardWrapper image="/js.png" alt="JavaScript" text="JavaScript" />
                            <CardWrapper image="/react2.png" alt="React.js" text="React.js" />
                            <CardWrapper image="/next.png" alt="Next.js" text="Next.js" />
                            <CardWrapper image="/angular.png" alt="Angular" text="Angular" />
                            <CardWrapper image="/ts.png" alt="TypeScript" text="TypeScript" />
                            <CardWrapper image="/mongo.png" alt="MongoDB" text="MongoDB" />
                            <CardWrapper image="/postgre.png" alt="PostgreSQL" text="PostgreSQL" />
                            <CardWrapper image="/aws.png" alt="AWS Cloud" text="AWS Cloud" />
                            <CardWrapper image="/tailwind.png" alt="Tailwind CSS" text="Tailwind" />
                            <CardWrapper image="/sass.png" alt="Sass" text="Sass" />
                            <CardWrapper image="/redux.png" alt="Redux" text="Redux" />
                            <CardWrapper image="/nodejs.png" alt="Node.js" text="Node.js" />
                        </div>
                    </CardContent>
                </Card>
            </div>            
        </section>
    )
}

// Componente CardWrapper
interface CardWrapperProps {
    image: any;
    alt: string;
    text: string;
}

function CardWrapper({ image, alt, text }: CardWrapperProps) {
    return (
        <div className="lg:w-1/5 sm:w-1/4 text-xs mb-2 z-20">
            <Card className="hover:scale-110 transition ease-in-out duration-300 mr-2">                            
                <CardContent className="flex flex-col items-center mt-5">
                    <div>
                        <Image src={image} width={20} height={20} alt={alt} className="sm:hidden" />
                        <Image src={image} width={40} height={40} alt={alt} className="hidden sm:block" />
                    </div>
                    <p className="text-center mt-2 ">{text}</p>
                </CardContent>                                                       
            </Card>
        </div>
    );
}
