export interface ChartDataPoint {
  name: string
  value?: number
  total?: number
}

export interface BaseChartProps {
  data: ChartDataPoint[]
  height?: number
}

export interface BaseAxisProps {
  dataKey?: string
  tickFormatter?: (value: any) => string
  orientation?: "left" | "right" | "top" | "bottom"
}

export interface DataSeriesProps extends BaseChartProps {
  dataKey: string
}