import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/queries";
import { TaskViewSwitcher } from "@/features/tasks/components/task-view-switcher";



const TasksPage = async () => {
    const user = await getCurrent();
    if (!user) redirect("/sign-in");

    return (
        <div className="h-full w-full bg-white flex flex-col p-4 rounded-md">
            <TaskViewSwitcher />
        </div>
    );
};
export default TasksPage;