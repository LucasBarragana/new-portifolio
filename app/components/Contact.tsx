'use client'
import { Button } from "@/components/ui/button";
import React, { useRef, useState } from 'react';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser'; 
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
    const form = useRef<HTMLFormElement>(null); // Definindo o tipo do ref
    const [isSent, setIsSent] = useState(false);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return; // Verificando se form.current é nulo

        emailjs
            .sendForm('service_98t0arv', 'template_497qyiy', form.current, 'F90y2jauO5TdVD3iN')
            .then(
                (result: EmailJSResponseStatus) => {
                    console.log('Success', result.text);
                    setIsSent(true);
                    setTimeout(() => {
                        setIsSent(false);
                    }, 3000);
                    form.current!.reset(); 
                },
                (error: EmailJSResponseStatus) => {
                    console.log('Error', error.text);
                }
            );
    };

    return (
        <section id="contact" className="mt-10 max-w-5xl mx-auto p-4">
            <h1 className="text-4xl mb-5 font-semibold">Contact</h1>
            <blockquote className="italic mb-5">
            &quot;People around you influence you personally. Just as the places you work influence you professionally.
                Great people, great projects, great work.&quot;
            </blockquote>
            <Card>
                <CardContent>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="flex flex-col justify-center items-center p-10 rounded-lg">
                            <div>
                                <h2 className="text-xl mb-3 font-semibold">Send me a message and letlet&apos;ss work together</h2>
                            </div>
                            <div className="flex mb-3">
                                <div className="flex flex-col mr-5" style={{ width: '40%' }}>
                                    <label htmlFor="from_name" className="block mb-1">
                                        Name:
                                    </label>
                                    <input
                                        type="text"
                                        id="from_name"
                                        name="from_name"
                                        required
                                        className="border border-blue-900 bg-white rounded px-3 py-2 white mb-2"
                                        style={{ width: '100%' }}
                                    />
                                </div>

                                <div className="flex flex-col" style={{ width: '60%' }}>
                                    <label htmlFor="user_email" className="block  mb-1">
                                        Email:
                                    </label>
                                    <input
                                        type="email"
                                        id="user_email"
                                        name="user_email"
                                        required
                                        className="border border-blue-900 bg-white rounded px-3 py-2 mb-2"
                                        style={{ width: '100%' }}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col mb-3" style={{ width: '100%' }}>
                                <label htmlFor="message" className="block mb-1">
                                    Message:
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    required
                                    className="border border-blue-900 bg-white rounded px-3 py-2 mb-2"
                                    style={{ width: '100%' }}
                                ></textarea>
                            </div>

                            <Button  id="btnSend"
                                type="submit"
                                className="flex items-center justify-center px-4 py-2 rounded">
                                Send
                                <Image width={22} height={22}  src="/send.png" alt="send" />
                            </Button>
                            {isSent && (
                                <p className="bg-green-900 text-white p-5 rounded-lg mt-2 font-semibold mt-5">
                                    Email sent successfully!
                                </p>
                            )}
                        </div>
                    </form>
                </CardContent>
            </Card>
            
        </section>
    );
}
