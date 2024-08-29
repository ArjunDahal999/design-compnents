import { AreaChartComponent } from "@/components/area-chart";
import { BarGraphComponent } from "@/components/bar-graph";
import { PieChartCompenent } from "@/components/pie-chart";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <>
        <PieChartCompenent />
        <BarGraphComponent />
        <AreaChartComponent />
      </>
    </main>
  );
}
