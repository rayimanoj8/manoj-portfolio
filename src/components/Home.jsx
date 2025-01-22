import {arr, Github, FileUser, Linkedin, Mail, Code, Instagram, Info, flask} from './'
import {Button} from "@/components/ui/button.jsx";
import {Link} from "react-router";
import { ExternalLink } from 'lucide-react';
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip.jsx";
import {TypewriterEffectSmooth} from "@/components/ui/typewriter-effect.jsx";

export default function Home() {
    const words = [
        {
            text: "Hello, World!",
            className: "gradient",
        },
    ];
    return <>

        <div className='flex flex-col justify-center gap-5 h-full lg:mx-10 text-center'>
            {/*<h1 className='text-6xl font-bold'>*/}
            {/*    Hello, World!*/}
            {/*</h1>*/}
            <TypewriterEffectSmooth words={words}/>
            <p className='text-2xl capitalize'>
                I am <b>Manoj Rayi</b>
                <br/>
                Aspiring Full Stack Web <b>Developer</b>
            </p>
            <ul className='flex justify-around lg:justify-center lg:gap-5 mt-5'>
                <li>
                    <a href='https://github.com/rayimanoj8'>
                        <Github className='hover:scale-105 size-10'/>
                    </a>
                </li>
                <li>
                    <a href='https://drive.google.com/file/d/13WU2H9QqCELn3-O9cxj5hdPPwsid3kAE/view?usp=drivesdk'>
                        <FileUser className='hover:scale-105 size-10'/>
                    </a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/rayimanoj8/'>
                        <Linkedin className='hover:scale-105 size-10'/>
                    </a>
                </li>
                <li>
                    <a href='https://leetcode.com/u/manoj_rayi_369/'>
                        <Code className='hover:scale-105 size-10'/>
                    </a>
                </li>
                <li>
                    <a href='https://www.instagram.com/manoj_rayi_369/'>
                        <Instagram className='hover:scale-105 size-10'/>
                    </a>
                </li>
            </ul>
            <Button variant='link'>
                <Link to='/manoj-portfolio/about'>
                    Know More About Me <ExternalLink className={'inline ml-2 hover:scale-105'}/>
                </Link>
            </Button>
            <div className='w-full rounded flex flex-wrap px-4 py-2 justify-evenly gap-2'>
                {
                    arr.map((item, index) => (
                        <TooltipProvider key={index}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <img
                                        className={`h-12 ${item.img === flask ? 'invert dark:invert-0' : ''} mt-2 hover:scale-110 hover:shadow transition ease-in-out`}
                                        key={index}
                                        src={item.img}
                                    />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className='capitalize'>{item.tooltip}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    ))
                }
            </div>
        </div>
    </>
}