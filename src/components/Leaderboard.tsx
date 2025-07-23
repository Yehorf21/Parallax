import { useEffect, useState } from "react";
import { Button } from "./helpers/Button";
import { useFade } from "./helpers/useFade";
import type { LeaderBoardTable, RowType } from "./helpers/types";

export const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState<LeaderBoardTable>();
  const [page, setPage] = useState<number>(0);

  useFade("#leaderboardSection");

  const handleButton = () => {
    if (page === 0) {
      setPage(1);
      return;
    }
    setPage(0);
  };

  const getSlicedData = () => {
    const arr = leaderboard?.data.rows;

    if (page === 0) return arr?.slice(0, 8);

    return arr?.slice(8, 16);
  };

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await fetch("/data/table.json");
        const data = await response.json();

        setLeaderboard(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <section id="leaderboardSection" className="flex flex-col gap-8 padding-inline">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 sm:gap-0">
        <h2 className="text-[40px] lg:text-5xl font-title">LLM Leaderboard</h2>

        <Button text="Submit your model" />
      </div>

      <p>
        We evaluate LLMs on key benchmarks using the Eleuther AI, a framework to
        test LLMs on a large number of different evaluation tasks. The higher
        the score, the better the LLM.
      </p>

      <div className="flex flex-col items-end gap-8">
        {leaderboard ? (
          <>
            <div className="w-full overflow-x-auto" aria-label="table wrapper">
              <table className="mt-8 w-full min-w-[700px] border-collapse">
                <thead>
                  <tr className="text-left">
                    {leaderboard.data.columns.map((column) => (
                      <th
                        key={column.field}
                        className="px-3 font-semibold table-column-name-color"
                      >
                        {column.headerName}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {getSlicedData()?.map((row) => (
                    <tr
                      key={row.id}
                      className="odd:bg-[var(--color-table-odd-row)]"
                    >
                      {leaderboard.data.columns.map((column, i) => (
                        <td
                          key={column.headerName}
                          className={`pt-6 pb-6 px-3 ${
                            i > 2 && "font-numeric"
                          }`}
                          style={{
                            minWidth: column.width,
                            maxWidth: column.width,
                          }}
                          width={column.width}
                        >
                          {column.headerName ? (
                            row[column.field as keyof RowType]
                          ) : (
                            <div
                              className={`w-6 h-6 bg-contain bg-no-repeat table-${
                                row[column.field as keyof RowType]
                              }`}
                            />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <button
              onClick={handleButton}
              className={`w-11 h-11 bg-contain bg-no-repeat cursor-pointer table-button ${
                page === 0 && "rotate-180 "
              }`}
              aria-label="go to the next or previous page of the table"
            />
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  );
};
