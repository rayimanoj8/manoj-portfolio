import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator"

export default function About() {
    return (
        <div className="container mx-auto p-8">
            <div className="flex flex-col gap-8">
                {/* Introduction Section */}
                <Card className=" shadow-md">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold">About Me</CardTitle>
                    </CardHeader>
                    <CardContent >
                        <p className="text-lg ">
                            Hi, I'm <b>Manoj Rayi</b>! I'm a final-year B.Tech student with a passion for
                            building robust and efficient software solutions. With expertise
                            in both frontend and backend technologies, I strive to create
                            seamless and user-friendly applications.
                        </p>
                    </CardContent>
                    <Separator />
                    <CardHeader>
                        <CardTitle className="text-xl font-bold">
                            Academic Background
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>
                            I'm pursuing my Bachelor of Technology from <b>Pragati Engineering College</b>, graduating in 2025. My academic focus includes
                            coursework in cloud computing, deep learning, and software
                            engineering principles.
                        </p>
                    </CardContent>
                    <Separator />

                    <CardHeader>
                        <CardTitle className="text-xl font-bold">Technical Skills</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc list-inside space-y-2">
                            <li><b className='font-semibold text-lg'>Frontend</b>: React, Tailwind CSS, HTML, CSS</li>
                            <li><b className='font-semibold text-lg'>Backend</b>: Spring Boot, Flask</li>
                            <li><b className='font-semibold text-lg'>Database</b>: MySQL</li>
                            <li><b className='font-semibold text-lg'>ServiceNow Expertise</b>: Certified Developer and Administrator</li>
                            <li><b className='font-semibold text-lg'>Tools</b>: Git, Postman</li>
                        </ul>
                    </CardContent>
                    <Separator />

                    <CardHeader>
                        <CardTitle className="text-xl font-bold">
                            ServiceNow Expertise
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>
                            I'm a certified ServiceNow Application Developer and System
                            Administrator. I specialize in ITSM processes, custom
                            application development, and problem-solving within the ServiceNow
                            ecosystem. I enjoy automating workflows to streamline business
                            operations.
                        </p>
                    </CardContent>
                    <Separator />

                    <CardHeader>
                        <CardTitle className="text-xl font-bold">Interests and Goals</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>
                            My professional goal is to contribute to impactful software
                            solutions that solve real-world problems. In my free time, I
                            enjoy exploring new technologies, contributing to open-source
                            projects, and enhancing my coding skills through hands-on
                            challenges.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
