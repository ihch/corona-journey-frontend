import { rest } from 'msw';

export const handlers = [
  rest.get("/search", (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        prefectures: [
          {
            prefecture: "東京都",
            infected_persons: [
              {
                date: "2020-04-01",
                patients: 10,
                total_patients: 100,
              },
            ],
          },
          {
            prefecture: "沖縄県",
            infected_persons: [
              {
                date: "2020-04-01",
                patients: 7,
                total_patients: 80,
              },
            ],
          },
        ],
      })
    );
  }),
  rest.get("/prefectures", (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        prefectures: [
          {
            prefecture: "北海道",
            total_patients: 42,
          },
          {
            prefecture: "東京都",
            total_patients: 100,
          },
          {
            prefecture: "沖縄県",
            total_patients: 80,
          },
        ],
      })
    );
  }),
  rest.get("/ping", (_, res, ctx) =>
    res(ctx.status(200), ctx.json({ status: "running" }))
  ),
];
