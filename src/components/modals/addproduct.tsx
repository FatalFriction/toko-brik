"use client"

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { useForm } from "react-hook-form";
import { ProductSchema } from "@/lib/validation/productSchema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Label } from "../ui/label";
import { useState } from "react";
import { getCategoryId } from "@/lib/categoryId";

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
    const [ uploading,setUploading ] = useState(false)
    const [ image,SetImage ] = useState("")
    const [ file, setFile ] = useState<File>();
    const [open, setOpen] = useState(false);

    const form = useForm<z.infer<typeof ProductSchema>>({
        resolver: zodResolver(ProductSchema),
        defaultValues: {
          name: "",
          description: "",
          sku: "",
          categoryName: "",
          categoryId: 1,
          weight: 0,
          width: 0,
          length: 0,
          height: 0,
          harga: 0
        },
      })
  
      const router = useRouter()
      
      const handleUpload = async () => {
        setUploading(true)
        try {
            if(!file) return;

            const formData = new FormData();
            formData.append("images",file)

            const res = await fetch('/api/image', {
                method: 'POST',
                body: formData,
            })
            
            if (res.ok) {
                const data = await res.json()
                toast.success("Product uploaded successfully")
                setUploading(false)
                SetImage('')
                return data.fileName
                // Handle success, e.g., show a success message
            } else {
                toast.error("Error uploading product")
                // Handle error, e.g., show an error message
            }

        } catch (error:any) {
            console.log(error.response?.data)
        }
      }

      const onSubmit = async (values: z.infer<typeof ProductSchema>) => {
        
        const imageurl = await handleUpload()
        console.log(imageurl)

        const res = await fetch('/api/product', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: values.name,
            description: values.description,
            categoryId: getCategoryId(values.categoryName),
            categoryName: values.categoryName,
            sku: values.sku,
            weight: values.weight,
            width: values.width,
            length: values.length,
            height: values.height,
            harga: values.harga,
            image: imageurl,
        })
        })

        if(res.ok) {
            router.refresh()
            setOpen(false)
            form.reset()
            toast.success("Product successfully registered")
        }
        else {
            toast.error("Product registration failed")
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger className="mx-4 px-4 bg-[#53D769] text-secondary-foreground hover:bg-[#53D769]/80 h-10 py-2 rounded-md font-bold">Add Product</DialogTrigger>
            <DialogContent className="flex flex-col max-w-4xl">
                <DialogHeader>
                    <DialogTitle className="pb-4">Add Product</DialogTitle>
                    <div className="flex flex-row justify-evenly">
                    <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-col justify-center space-y-2">
                                <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="input product name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                                />
                                <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>description</FormLabel>
                                    <FormControl>
                                        <Input placeholder="input product description" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                                />
                            </div>
                            <Image src={image} alt="no_images_found" width={200} height={100} className="p-2 rounded-lg"/>
                        </div>
                        <div className="flex flex-row justify-evenly space-x-4">
                            <div className="w-full">
                                <FormField
                                    control={form.control}
                                    name="categoryName"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Category</FormLabel>
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            value={field.value}
                                        >
                                            <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a category" />
                                            </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="Cemilan">Cemilan</SelectItem>
                                                <SelectItem value="Minuman">Minuman</SelectItem>
                                                <SelectItem value="Permen">Permen</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="picture">Picture</Label>
                                <Input id="picture" type="file" onChange={({target}) => {
                                    if(target.files) {
                                        const file = target.files[0];
                                        SetImage(URL.createObjectURL(file))
                                        setFile(file)
                                    }
                                }}/>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between">
                        <section className="flex flex-col border rounded-lg py-5 px-4 border-black w-[55%]">
                            <p className="text-lg font-semibold text-center">Dimensions</p>
                        <Separator/>
                        <div className="flex flex-col h-full text-center items-center space-y-4 text-sm font-semibold">
                            <div className="flex space-x-2 space-y-4">
                                <Separator orientation="vertical" />
                                <FormField
                                control={form.control}
                                name="weight"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Weight</FormLabel>
                                    <FormControl>
                                        <Input 
                                            type="number"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                                />
                                <Separator orientation="vertical" />
                                <FormField
                                control={form.control}
                                name="width"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Width</FormLabel>
                                    <FormControl>
                                        <Input 
                                            type="number"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                                />
                            </div>
                            <div className="flex space-x-2">
                                <Separator orientation="vertical" />
                                <FormField
                                control={form.control}
                                name="length"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Length</FormLabel>
                                    <FormControl>
                                        <Input 
                                            type="number"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                                />
                                <Separator orientation="vertical" />
                                <FormField
                                control={form.control}
                                name="height"
                                render={({ field }) => (
                                <FormItem>
                                <FormLabel>Height</FormLabel>
                                <FormControl>
                                        <Input 
                                            type="number"
                                            {...field}
                                        />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                                )}
                                />
                            </div>
                        </div>
                        <Separator/>
                        </section>
                        <div className="flex flex-col justify-between">    
                            <FormField
                            control={form.control}
                            name="sku"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>sku</FormLabel>
                                <FormControl>
                                    <Input placeholder="input product sku" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                                <FormField
                                control={form.control}
                                name="harga"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Price</FormLabel>
                                    <FormControl>
                                        <Input placeholder="input product price" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                                />
                            <Button className="mt-8" type="submit" disabled={uploading}>Add Product</Button>
                        </div>
                        </div>
                    </form>
                    </Form>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};
