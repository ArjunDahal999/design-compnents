import { AreaChartComponent } from "@/components/area-chart";
import { BarGraphComponent } from "@/components/bar-graph";
import GridWrapper from "@/components/design/grid-background";
import { PieChartCompenent } from "@/components/pie-chart";
import Image from "next/image";

export default function Home()
{
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <>
        <GridWrapper color="" className="min-h-screen flex w-full ">
          <div className=" flex justify-center max-w-full max-h-full bg-red-400">
            <h1>fsdfsdfsdf</h1>
          </div>
        </GridWrapper>
        <PieChartCompenent />
        <BarGraphComponent />
        <AreaChartComponent />
      </>
    </main >
  );
}
