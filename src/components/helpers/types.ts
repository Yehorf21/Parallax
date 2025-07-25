import type { GridColDef } from "@mui/x-data-grid";

export interface RowType {
  status: "constant" | "up" | "down";
  id: number;
  modelName: string;
  avg: string;
  arc: string;
  hellaSwag: string;
  mmlu: string;
  truthfulQa: string;
  winogrande: string;
  gsm8k: string;
  usage: string;
}

export interface LeaderBoardTable {
  data: {
    columns: GridColDef[];
    rows: RowType[];
  };
}
