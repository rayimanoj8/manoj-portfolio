import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast.js";

export default function SimpleToast() {
    const {toast} = useToast();
    const showToast = () => {
        toast({
            description: "Email Copied to Your ClipBoard",
        });
    };

    return (
        <Button onClick={showToast} className="bg-blue-500 text-white">
            Show Toast
        </Button>
    );
}
