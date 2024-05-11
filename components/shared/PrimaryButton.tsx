import { Button } from "@/components/ui/button"

export default function PrimaryButton({variant,label}: {variant: any,label:string}) {
    return (
        <Button className="w-full rounded-[60px] border-[1px] border-slate-800 min-h-[43px]" variant={variant}>{label}</Button>
    );
    
}