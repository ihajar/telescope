import { Models } from "node-appwrite";

export enum MemberRole {
    ADMIN = "ADMIN",
    MEMBER = "MEMBER",
    CLIENT = "CLIENT",
    PM = "PROJECT_MANAGER"
};


export type Member = Models.Document & {
    workspaceId: string;
    userId: string;
    role: MemberRole;
};