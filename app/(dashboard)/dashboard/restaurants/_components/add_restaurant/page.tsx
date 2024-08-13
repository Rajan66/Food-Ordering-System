import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronLeft } from "lucide-react";
import RestaurantForm from '../RestaurantForm';

const page = () => {
    return (
        <div className='mb-2'>
            <div className="flex justify-between flex-col xvsm:flex-row gap-y-3">
                <h1 className="font-semibold text-3xl xvsm:pb-10 opacity-80">
                    Add Restaurant
                </h1>
                <Link href={"/dashboard/Restaurants"} className='xvsm:p-0 pb-6 m-0'>
                    <Button className="px-5 py-2.5 my-auto text-[16px] w-[160px] h-[40px] font-medium text-white rounded-md bg-accent border-r-0 !p-0">
                        <ChevronLeft className="size-5" />
                        &nbsp; Go Back
                    </Button>
                </Link>
            </div>
            <RestaurantForm />
        </div>
    )
}

export default page