import { View, Text } from "react-native";
import React from "react";
import { Circle, Svg } from "react-native-svg";
import { LegendItem } from "./_components";
import { StatType } from "@/app/tabs/(tabs)/stats";


const CHART_SIZE = 184;
const STROKE_WIDTH = 22;
const RADIUS = (CHART_SIZE - STROKE_WIDTH) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function DonutChart({ activeType }: { activeType: StatType }) {
  const firstLabel = activeType === "Income" ? "Salary" : "Food";
  const secondLabel = activeType === "Income" ? "KPI" : "Social";
  const legendLabels =
    activeType === "Income" ? ["Salary", "KPI"] : ["Social", "Food"];
  const segmentOne = CIRCUMFERENCE * 0.6;
  const segmentTwo = CIRCUMFERENCE * 0.32;
  const gap = CIRCUMFERENCE * 0.08;

  return (
    <View className="mt-5 rounded-[18px] border border-[#EEF0F3] bg-white px-4 pb-6 pt-6 shadow-sm">
      <View className="items-center">
        <View className="h-[184px] w-[232px] items-center justify-center">
          <Svg
            width={CHART_SIZE}
            height={CHART_SIZE}
            viewBox={`0 0 ${CHART_SIZE} ${CHART_SIZE}`}
          >
            <Circle
              cx={CHART_SIZE / 2}
              cy={CHART_SIZE / 2}
              r={RADIUS}
              stroke="#EAF3FF"
              strokeWidth={STROKE_WIDTH}
              fill="none"
            />
            <Circle
              cx={CHART_SIZE / 2}
              cy={CHART_SIZE / 2}
              r={RADIUS}
              stroke="#2D8CFF"
              strokeWidth={STROKE_WIDTH}
              fill="none"
              strokeLinecap="butt"
              strokeDasharray={[segmentOne, CIRCUMFERENCE - segmentOne]}
              strokeDashoffset={-CIRCUMFERENCE * 0.13}
              rotation={-90}
              originX={CHART_SIZE / 2}
              originY={CHART_SIZE / 2}
            />
            <Circle
              cx={CHART_SIZE / 2}
              cy={CHART_SIZE / 2}
              r={RADIUS}
              stroke="#7DB9FF"
              strokeWidth={STROKE_WIDTH}
              fill="none"
              strokeLinecap="butt"
              strokeDasharray={[segmentTwo, CIRCUMFERENCE - segmentTwo]}
              strokeDashoffset={-(segmentOne + gap)}
              rotation={-90}
              originX={CHART_SIZE / 2}
              originY={CHART_SIZE / 2}
            />
          </Svg>

          <View className="absolute h-[88px] w-[88px] items-center justify-center rounded-full bg-[#F6F8FC]">
            <Text className="text-center text-[#33405B] text-xl font-bold">
              $200.00
            </Text>
            <Text className="mt-0.5 text-center text-[#75809A] text-sm font-semibold">
              Total
            </Text>
          </View>

          <View className="absolute left-0 top-[76px] rounded border border-[#DCE4EF] bg-white px-2 py-1">
            <Text className="text-[#33405B] text-[10px]">{firstLabel} 28%</Text>
          </View>

          <View className="absolute right-0 top-[96px] rounded border border-[#DCE4EF] bg-white px-2 py-1">
            <Text className="text-[#33405B] text-[10px]">
              {secondLabel} 28%
            </Text>
          </View>
        </View>

        <View className="mt-3 flex-row justify-center gap-10">
          {legendLabels.map((label) => (
            <LegendItem key={label} label={label} />
          ))}
        </View>
      </View>
    </View>
  );
}
