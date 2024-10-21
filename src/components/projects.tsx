"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useGetProjects } from "@/features/projects/api/use-get-projetcs";
import { useCreateProjectModal } from "@/features/projects/hooks/use-create-project-modal";
import { ProjectAvatar } from "@/features/projects/components/project-avatar";

import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";

import { RiAddCircleFill } from "react-icons/ri";
import { cn } from "@/lib/utils";




export const Projects = () => {
    const pathname = usePathname();
    const { open } = useCreateProjectModal();

    const projectId = null; // TODO: use projectId hook
    const workspaceId = useWorkspaceId();
    const { data } = useGetProjects({ workspaceId });
    
    return (
        <div className="flex flex-col gap-y-2">
            <div className="flex items-center justify-between">
                <p className="text-xs uppercase text-white">Projects</p>
                <RiAddCircleFill onClick={open} className="size-6 text-white cursor-pointer hover:text-[#8E7BED] transition" />
            </div>
            {data?.documents.map((project) => {
                const href = `/worksapces/${workspaceId}/projects/${projectId}`;
                const isActive = pathname === href;

                return (
                    <Link href={href} key={project.$id}>
                        <div
                            className={cn(
                                "flex items-center gap-2.5 p-2.5 rounded-md hover:opacity-75 transition cursor-pointer text-white",
                                isActive && "bg-white shadow-sm hover:opacity-100 text-primary"
                            )}
                        >
                            <ProjectAvatar image={project.imageUrl} name={project.name} />
                            <span className="truncate">{project.name}</span>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
};