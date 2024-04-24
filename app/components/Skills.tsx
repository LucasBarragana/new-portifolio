import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default async function Skills(){
    return(
        <section id="Skills" className="max-w-screen-lg mx-auto mt-10">
            <div>
                <h1 className="text-4xl mb-5 font-semibold underline" >Tecnologies</h1>
                <blockquote className="italic mb-5">
                &quot;When you first learn how to understand and read technologies/frameworks, you can work and be a professional in any of them.&quot;
                </blockquote>
            </div>
            <div>
            <Card>
                <CardContent className="flex flex-wrap justify-center">
                    <h2 className="w-full text-center mb-4 mt-4">Here are some technologies that I have been using in my projects:</h2>
                    <div className="flex flex-wrap justify-center">
                        <Card className="mr-2 mb-2 w-24 md:w-32 flex justify-center items-center hover:scale-110 transition ease-in-out duration-300">                            
                            <CardContent className="flex flex-col items-center mt-5">
                                <div>
                                    <Image src={'/html.png'} width={40} height={40} alt="logo"/>                                    
                                </div>
                                <p className="text-center mt-2">HTML</p>
                            </CardContent>                                                       
                        </Card>
                        <Card className="mr-2 mb-2 w-24 md:w-32 hover:scale-110 transition ease-in-out duration-300">                            
                            <CardContent className="flex flex-col items-center mt-5">
                                <div >
                                    <Image src={'/css.png'} width={40} height={40} alt="logo"/>                                    
                                </div>
                                <p className="text-center mt-2">CSS</p>
                            </CardContent>                                                       
                        </Card>
                        <Card className="mr-2 mb-2 w-24 md:w-32 hover:scale-110 transition ease-in-out duration-300">                            
                            <CardContent className="flex flex-col items-center mt-5">
                                <div >
                                    <Image src={'/js.png'} width={40} height={40} alt="logo"/>                                    
                                </div>
                                <p className="text-center mt-2">Javascript</p>
                            </CardContent>                                                       
                        </Card>
                        <Card className="mr-2 mb-2 w-24 md:w-32 hover:scale-110 transition ease-in-out duration-300">                            
                            <CardContent className="flex flex-col items-center mt-5">
                                <div >
                                    <Image src={'/react2.png'} width={40} height={40} alt="logo"/>                                    
                                </div>
                                <p className="text-center mt-2">React.js</p>
                            </CardContent>                                                       
                        </Card>
                        <Card className="mr-2 mb-2 w-24 md:w-32 hover:scale-110 transition ease-in-out duration-300">                            
                            <CardContent className="flex flex-col items-center mt-5">
                                <div >
                                    <Image src={'/next.png'} width={40} height={40} alt="logo"/>                                    
                                </div>
                                <p className="text-center mt-2">Next.js</p>
                            </CardContent>                                                       
                        </Card>
                        <Card className="mr-2 mb-2 w-24 md:w-32 hover:scale-110 transition ease-in-out duration-300">                            
                            <CardContent className="flex flex-col items-center mt-5">
                                <div >
                                    <Image src={'/angular.png'} width={40} height={40} alt="logo"/>                                    
                                </div>
                                <p className="text-center mt-2">Angular</p>
                            </CardContent>                                                       
                        </Card>
                        <Card className="mr-2 mb-2 w-24 md:w-32 hover:scale-110 transition ease-in-out duration-300">                            
                            <CardContent className="flex flex-col items-center mt-5">
                                <div >
                                    <Image src={'/ts.png'} width={40} height={40} alt="logo"/>                                    
                                </div>
                                <p className="text-center mt-2">Typescript</p>
                            </CardContent>                                                       
                        </Card>
                        <Card className="mr-2 mb-2 w-24 md:w-32 hover:scale-110 transition ease-in-out duration-300">                            
                            <CardContent className="flex flex-col items-center mt-5">
                                <div >
                                    <Image src={'/mongo.png'} width={40} height={40} alt="logo"/>                                    
                                </div>
                                <p className="text-center mt-2 ">MongoDb</p>
                            </CardContent>                                                       
                        </Card>
                        <Card className="mr-2 mb-2 w-24 md:w-32 hover:scale-110 transition ease-in-out duration-300">                            
                            <CardContent className="flex flex-col items-center mt-5">
                                <div >
                                    <Image src={'/postgre.png'} width={40} height={40} alt="logo"/>                                    
                                </div>
                                <p className="text-center mt-2">PostegreSQL</p>
                            </CardContent>                                                       
                        </Card>
                        <Card className="mr-2 mb-2 w-24 md:w-32 hover:scale-110 transition ease-in-out duration-300">                            
                            <CardContent className="flex flex-col items-center mt-5">
                                <div >
                                    <Image src={'/aws.png'} width={40} height={40} alt="logo"/>                                    
                                </div>
                                <p className="text-center mt-2">AWSCloud</p>
                            </CardContent>                                                       
                        </Card>
                        <Card className="mr-2 mb-2 w-24 md:w-32 hover:scale-110 transition ease-in-out duration-300">                            
                            <CardContent className="flex flex-col items-center mt-5">
                                <div >
                                    <Image src={'/tailwind.png'} width={40} height={40} alt="logo"/>                                    
                                </div>
                                <p className="text-center mt-2">Tailwind</p>
                            </CardContent>                                                       
                        </Card>
                        <Card className="mr-2 mb-2 w-24 md:w-32 hover:scale-110 transition ease-in-out duration-300">                            
                            <CardContent className="flex flex-col items-center mt-5">
                                <div >
                                    <Image src={'/Sass.png'} width={40} height={40} alt="logo"/>                                    
                                </div>
                                <p className="text-center mt-2">Sass</p>
                            </CardContent>                                                       
                        </Card>
                        <Card className="mr-2 mb-2 w-24 md:w-32 hover:scale-110 transition ease-in-out duration-300">                            
                            <CardContent className="flex flex-col items-center mt-5">
                                <div >
                                    <Image src={'/redux.png'} width={40} height={40} alt="logo"/>                                    
                                </div>
                                <p className="text-center mt-2">Redux</p>
                            </CardContent>                                                       
                        </Card>
                        <Card className="mr-2 mb-2 w-24 md:w-32 hover:scale-110 transition ease-in-out duration-300">                            
                            <CardContent className="flex flex-col items-center mt-5">
                                <div >
                                    <Image src={'/nodejs.png'} width={40} height={40} alt="logo"/>                                    
                                </div>
                                <p className="text-center mt-2">Node.js</p>
                            </CardContent>                                                       
                        </Card>
                    </div>
                </CardContent>
            </Card>
            </div>            
        </section>
    )
}
