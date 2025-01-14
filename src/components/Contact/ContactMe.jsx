import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {Textarea} from "@/components/ui/textarea.jsx";

export default function ContactMe() {
    return (
        <div className='h-full flex flex-col justify-center'>
            <Card className="w-[350px] mx-auto">
                <CardHeader>
                    <CardTitle>Contact Me</CardTitle>
                </CardHeader>
                <form action="https://api.web3forms.com/submit" method="POST">
                <CardContent>
                        <input type="hidden" name="access_key" value="99cf474f-d5e1-407b-8125-4b4be7397869"/>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" name='name' placeholder="Your Name"/>
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" name='email' placeholder="Your Email"/>
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="message">Message</Label>
                                <Textarea id='message' name='message' placeholder="Your Message"/>
                            </div>
                        </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button type='submit'>
                        <input type='submit' value='submit'/>
                    </Button>
                </CardFooter>
                </form>
            </Card>
        </div>
    )
}
