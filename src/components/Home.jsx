import {arr} from './'
import {Button} from "@/components/ui/button.jsx";
import {Link} from "react-router";
import { ExternalLink } from 'lucide-react';
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip.jsx";
import { FileUser } from 'lucide-react';

export default function Home() {
    return <>
        <nav className='text-lg font-semibold '>
            Goto
        </nav>
        <div className='flex flex-col justify-center gap-5 h-full lg:mx-10 text-center'>
            <h1 className='text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-bl from-pink-500 to-indigo-500 '>
                Hello, World!
            </h1>
            <p className='text-2xl capitalize'>
                I am <b>Manoj Rayi</b>
                <br/>
                Aspiring Full Stack Web <b>Developer</b>
            </p>
            <div className='border w-full rounded flex flex-wrap px-4 py-2 justify-evenly gap-2'>
                {
                    arr.map((item, index) => (
                        <TooltipProvider key={index}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <img
                                        className={'h-12 mt-2 hover:scale-110 hover:shadow transition ease-in-out'}
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
            <Button variant='link'>
                <Link to='/about'>
                    Know More About Me <ExternalLink className={'inline ml-2 hover:scale-105'}/>
                </Link>
            </Button>
            
            <Button variant='link'>
                <Link to='https://drive.google.com/file/d/18exKNBmsy4a_IFRC12xdQrKMr00ysOUl/view' target='_blank'>
                    <FileUser className='inline'/> Get My Latest Resume Here
                </Link>
            </Button>
        </div>
    </>
}