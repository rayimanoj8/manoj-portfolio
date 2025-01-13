import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.jsx";
import {Input} from "@/components/ui/input.jsx";
import {Button} from "@/components/ui/button.jsx";
import {Github, Mail, Code, Instagram, Info} from 'lucide-react';
import { Linkedin } from 'lucide-react';
import {Link} from "react-router";
import { useToast } from "@/hooks/use-toast.js";
import {Toaster} from "@/components/ui/toaster.jsx";

export default function Contact() {
    const {toast} = useToast();
    const handleClick = () => {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard
                .writeText('rayimanoj8@gmail.com')
                .then(() => {})
                .catch((err) => {
                    console.error("Failed to copy: ", err);
                });
                toast({
                    description: "Email Copied to Your ClipBoard",
                });
        } else {
            // Fallback for unsupported browsers
            const textArea = document.createElement("textarea");
            textArea.value = "rayimanoj8@gmail.com";
            textArea.style.position = "fixed"; // Prevent scrolling
            textArea.style.opacity = "0";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            try {
                document.execCommand("copy");
                toast({
                    description: "Email Copied to Your ClipBoard",
                });
            } catch (err) {
                toast({
                    description: "Error Copying",
                    variant: "destructive",
                });
            }
            document.body.removeChild(textArea);
        }
    };
    return <>
        <Card>
            <CardHeader>
                <CardTitle>Contact Me 🤗🤗</CardTitle>
            </CardHeader>
            <CardContent>
                <div className='flex gap-2'>
                    <Mail className={`size-8`}/>
                    <Input disabled value={'rayimanoj8@gmail.com'} className='select-none'/>
                    <Button variant='outline' onClick={handleClick}>Copy</Button>
                </div>
            </CardContent>
            <CardContent>
                <div className='flex gap-2'>
                    <Linkedin className={`size-8`}/>
                    <Button variant='link'>
                        <Link to={'https://www.linkedin.com/in/rayimanoj8/'} target={'_blank'}>
                            rayimanoj8
                        </Link>
                    </Button>
                </div>
            </CardContent>
            <CardContent>
                <div className='flex gap-2'>
                    <Github className={`size-8`}/>
                    <Button variant='link'>
                        <Link to={'https://github.com/rayimanoj8'} target={'_blank'}>
                            @rayimanoj8
                        </Link>
                    </Button>
                </div>
            </CardContent>
            <CardContent>
                <div className='flex gap-2'>
                    <Instagram className={`size-8`}/>
                    <Button variant='link'>
                        <Link to='https://www.instagram.com/manoj_rayi_369/' target={'_blank'}>
                            @manoj_rayi_369
                        </Link>
                    </Button>
                </div>
            </CardContent>
            <CardContent>
                <div className='flex gap-2'>
                    <Code className={`size-8`}/>
                    <Button variant='link'>
                        <Link to={'https://leetcode.com/u/manoj_rayi_369/'} target={'_blank'}>
                            @rayimanoj8
                        </Link>
                    </Button>
                </div>
            </CardContent>
            <CardContent>
                <div className='flex gap-2'>
                    <Info className={`size-8`}/>
                    <Button variant='link'>
                        <Link to='manoj-portfolio/about'>
                            Know More About Me
                        </Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
        <Toaster />
    </>
}