'use client'
import { useTranslation } from "@/i18n/client";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { CardBalance1 } from "./card-balance1";
import { CardBalance2 } from "./card-balance2";
import { CardBalance3 } from "./card-balance3";
import dynamic from "next/dynamic";

const Chart = dynamic(
  () => import("../../../../components/charts/steam").then((mod) => mod.Steam),
  {
    ssr: false,
  }
);
export default function Content() {
  const params: any = useParams()
  const { t } = useTranslation(params.lng, 'client-page')
  return (
    <div className="h-full lg:px-6">
      <div className="flex justify-center gap-4 xl:gap-6 pt-3 px-4 lg:px-0  flex-wrap xl:flex-nowrap sm:pt-10 max-w-[90rem] mx-auto w-full">
        <div className="mt-6 gap-6 flex flex-col w-full">
          {/* Card Section Top */}
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold">Available Balance</h3>
            <div className="grid md:grid-cols-2 grid-cols-1 2xl:grid-cols-3 gap-5  justify-center w-full">
              <CardBalance1 />
              <CardBalance2 />
              <CardBalance3 />
            </div>
          </div>
 {/* Chart */}
 <div className="h-full flex flex-col gap-2">
          <h3 className="text-xl font-semibold">Statistics</h3>
          <div className="w-full bg-default-50 shadow-lg rounded-2xl p-6 ">
            <Chart />
          </div>
        </div>
        </div>
      </div>
      <div><Button color="primary">{t('back-to-home')}</Button></div>
    </div>)
}