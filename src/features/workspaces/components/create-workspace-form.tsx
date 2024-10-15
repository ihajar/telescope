"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { createWorkspaceSchema } from "../schemas";
import { useCreateWorkspace } from "../api/use-create-workspace";

import { DottedSeparator } from "@/components/dotted-separator";
import { 
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { 
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


interface CreateWorkspaceFormProps {
    onCancel?: () => void;
};


export const CreateWorkspaceForm = ({ onCancel }: CreateWorkspaceFormProps) => {
    const { mutate, isPending } = useCreateWorkspace();

    const form = useForm<z.infer<typeof createWorkspaceSchema>>({
        resolver: zodResolver(createWorkspaceSchema),
        defaultValues: {
            name: "",
        },
    });

    const onSubmit = (values: z.infer<typeof createWorkspaceSchema>) => {
        mutate({ json: values });
    };

    return (
        <Card className="w-full h-full border-none shadow-none">
            <CardHeader className="flex p-7">
                <CardTitle className="text-xl font-bold">
                    Create a new workspace
                </CardTitle>
            </CardHeader>
            <div className="px-7">
                <DottedSeparator />
            </div>
            <CardContent className="p-7">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="flex flex-col gap-y-4">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Workspace Name</FormLabel>
                                        <FormControl>
                                            <Input 
                                                {...field}
                                                placeholder="Enter workspace name"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <DottedSeparator className="py-7" />
                        <div className="flex flex-col lg:flex-row gap-y-3 items-center justify-between">
                            <Button
                                type="button"
                                size="lg"
                                variant="muted"
                                onClick={onCancel}
                                disabled={isPending}
                                className="order-2 lg:order-1"
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                size="lg"
                                variant="primary"
                                disabled={isPending}
                                className="order-1 lg:order-2"
                            >
                                Create Workspace
                            </Button>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
};