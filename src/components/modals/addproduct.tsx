import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

interface Product {
    id: number;
    categoryId: number;
    categoryName: string;
    sku: string;
    name: string;
    description: string;
    weight: number;
    width: number;
    length: number;
    height: number;
    image: string;
    harga: number;
}

export const AddProductCardModal = () => {
    return (
        <Dialog>
            <DialogTrigger className="mx-4 px-4 bg-[#53D769] text-secondary-foreground hover:bg-[#53D769]/80 h-10 py-2 rounded-md font-bold">Add Product</DialogTrigger>
            <DialogContent className="flex flex-col max-w-5xl max-h-full">
                <DialogHeader>
                    <DialogTitle className="pb-4">Add Product</DialogTitle>
                    <div className="flex flex-row justify-evenly space-y-2">
                        {/* <Image src={data.image} alt="product_images" width={600} height={200}/> */}
                        <div className="flex flex-col space-y-3 text-center">
                            <h1 className="font-extrabold">nama product</h1>
                            {/* <Button variant="secondary" className="pointer-events-none">{data.categoryName}</Button> */}
                            <Separator/>
                            <section className="border border-black space-y-1 px-4">
                            <p className="text-lg font-semibold pt-1">Dimensions</p>
                            <Separator/>
                                <div className="flex h-5 items-center space-x-4 text-sm font-semibold">
                                    <div>Width</div>
                                    <Separator orientation="vertical" />
                                    <div>Length</div>
                                    <Separator orientation="vertical" />
                                    <div>Height</div>
                                </div>
                                <Separator/>
                                <div className="flex h-6 justify-evenly items-center space-x-3.5 text-sm py-5">
                                    {/* <div>{data.width}</div> */}
                                    <Separator orientation="vertical" />
                                    {/* <div>{data.length}</div> */}
                                    <Separator orientation="vertical" />
                                    {/* <div>{data.height}</div> */}
                                </div>
                            </section>
                        </div>
                    </div>
                    <DialogDescription className="py-4 px-4 space-y-4">
                        {/* <p className="break-words text-base">{data.description}</p> */}
                        <div className="flex flex-row items-center font-medium text-lg justify-center">Harga:
                            <p className="px-4 text-base text-black font-bold">
                                {/* {formatted} */}
                            </p>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};