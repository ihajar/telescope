import { ProjectAnalyticsResponseType } from "@/features/projects/api/use-get-project-analytics";

import { AnalyticsCard } from "./analytics-card";
import { DottedSeparator } from "./dotted-separator";

import { ScrollArea, ScrollBar } from "./ui/scroll-area";



export const Analytics = ({ data }: ProjectAnalyticsResponseType) => {
    return (
        <ScrollArea className="border rounded-lg w-full whitespace-nowrap shrink-0">
            <div className="w-full flex flex-row">
                <div className="flex items-center flex-1">
                    <AnalyticsCard
                        title="Total tasks"
                        value={data.taskCount}
                        variant={data.taskDifference > 0 ? "up" : "down"}
                        increaseValue={data.taskDifference}
                    />
                    <DottedSeparator direction="vertical" />
                </div>
                <div className="flex items-center flex-1">
                    <AnalyticsCard
                        title="Assigned Tasks"
                        value={data.assignedTaskCount}
                        variant={data.assignedTaskDifference > 0 ? "up" : "down"}
                        increaseValue={data.assignedTaskDifference}
                    />
                    <DottedSeparator direction="vertical" />
                </div>
                <div className="flex items-center flex-1">
                    <AnalyticsCard
                        title="Completed Tasks"
                        value={data.completedTaskCount}
                        variant={data.completedTaskDifference > 0 ? "up" : "down"}
                        increaseValue={data.completedTaskDifference}
                    />
                    <DottedSeparator direction="vertical" />
                </div>
                <div className="flex items-center flex-1">
                    <AnalyticsCard
                        title="Overdue Tasks"
                        value={data.overdueTaskCount}
                        variant={data.overdueTaskDIfference > 0 ? "up" : "down"}
                        increaseValue={data.overdueTaskDIfference}
                    />
                    <DottedSeparator direction="vertical" />
                </div>
                <div className="flex items-center flex-1">
                    <AnalyticsCard
                        title="Incomplete Tasks"
                        value={data.incompleteTaskCount}
                        variant={data.incompleteTaskDifference > 0 ? "up" : "down"}
                        increaseValue={data.incompleteTaskDifference}
                    />
                    {/* <DottedSeparator direction="vertical" /> */}
                </div>
            </div>
            <ScrollBar orientation='horizontal' />
        </ScrollArea>
    );
};