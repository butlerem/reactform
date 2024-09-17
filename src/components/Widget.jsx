import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export const Widget = () => {
    return (
     <div className="fixed bottom-4 right-4 z-50">
        <Button className="rounded-full shadow-lg
        hover:scale-105">Feedback</Button>
        <div>
            <h3>Send us your feedback</h3>
            <form className="space-y-2">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                        id="name"
                        placeholder="Enter your name"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="feedback">Feedback</Label>
                    <Input 
                    id="feedback" 
                    placeholder="Tell us what you think"
                    className="min-h-[100px]"
                    />
                </div>
                <Button type="submit">Submit</Button>
            </form>
        </div>
    </div>
    );
};