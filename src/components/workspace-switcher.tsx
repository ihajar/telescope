"use client";

import { useRouter } from "next/navigation";
import { RiAddCircleFill } from "react-icons/ri";

import { useGetWorkspaces } from "@/features/workspaces/api/use-get-workspaces";
import { WorkspaceAvatar } from "@/features/workspaces/components/workspace-avatar";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";





export const WorkspaceSwitcher = () => {
    const workspaceId = useWorkspaceId();
    const router = useRouter();
    const { data: workspaces } = useGetWorkspaces();

    const onSelect = (id: string) => {
        router.push(`/dashboard/workspaces/${id}`);
    };

    return (
        <div className="flex flex-col gap-y-2">
            <div className="flex items-center justify-between">
                <p className="text-xs uppercase text-white">Workspaces</p>
                <RiAddCircleFill className="size-6 text-white cursor-pointer hover:text-[#8E7BED] transition" />
            </div>
             <Select onValueChange={onSelect} value={workspaceId}>
                <SelectTrigger className="w-full bg-[#30008F] text-white font-medium p-2 border-none">
                    <SelectValue placeholder="No workspace selected" />
                </SelectTrigger>
                <SelectContent className="bg-[#30008F] text-white border-none">
                    {workspaces?.documents.map((workspace) => (
                        <SelectItem key={workspace.$id} value={workspace.$id} >
                            <div className="flex justify-start items-center gap-3 font-medium">
                                <WorkspaceAvatar name={workspace.name} image={workspace.imageUrl} />
                                <span className="truncate">{workspace.name}</span>
                            </div>
                        </SelectItem>
                    ))}
                </SelectContent>
             </Select>
        </div>
    )
}