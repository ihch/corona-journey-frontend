import { rest } from "msw";

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
              {
                date: "2020-04-01",
                patients: 10,
                total_patients: 100,
              },
              {
                date: "2020-04-03",
                patients: 13,
                total_patients: 113,
              },
              {
                date: "2020-04-01",
                patients: 10,
                total_patients: 100,
              },
              {
                date: "2020-04-03",
                patients: 13,
                total_patients: 113,
              },
              {
                date: "2020-04-03",
                patients: 13,
                total_patients: 113,
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
              {
                date: "2020-04-03",
                patients: 9,
                total_patients: 89,
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
          },
          {
            prefecture: "青森県",
          },
          {
            prefecture: "岩手県",
          },
          {
            prefecture: "宮城県",
          },
          {
            prefecture: "秋田県",
          },
          {
            prefecture: "山形県",
          },
          {
            prefecture: "福島県",
          },
          {
            prefecture: "茨城県",
          },
          {
            prefecture: "栃木県",
          },
          {
            prefecture: "群馬県",
          },
          {
            prefecture: "埼玉県",
          },
          {
            prefecture: "千葉県",
          },
          {
            prefecture: "東京都",
          },
          {
            prefecture: "神奈川県",
          },
          {
            prefecture: "新潟県",
          },
          {
            prefecture: "富山県",
          },
          {
            prefecture: "石川県",
          },
          {
            prefecture: "福井県",
          },
          {
            prefecture: "山梨県",
          },
          {
            prefecture: "長野県",
          },
          {
            prefecture: "岐阜県",
          },
          {
            prefecture: "静岡県",
          },
          {
            prefecture: "愛知県",
          },
          {
            prefecture: "三重県",
          },
          {
            prefecture: "滋賀県",
          },
          {
            prefecture: "京都府",
          },
          {
            prefecture: "大阪府",
          },
          {
            prefecture: "兵庫県",
          },
          {
            prefecture: "奈良県",
          },
          {
            prefecture: "和歌山県",
          },
          {
            prefecture: "鳥取県",
          },
          {
            prefecture: "島根県",
          },
          {
            prefecture: "岡山県",
          },
          {
            prefecture: "広島県",
          },
          {
            prefecture: "山口県",
          },
          {
            prefecture: "徳島県",
          },
          {
            prefecture: "香川県",
          },
          {
            prefecture: "愛媛県",
          },
          {
            prefecture: "高知県",
          },
          {
            prefecture: "福岡県",
          },
          {
            prefecture: "佐賀県",
          },
          {
            prefecture: "長崎県",
          },
          {
            prefecture: "熊本県",
          },
          {
            prefecture: "大分県",
          },
          {
            prefecture: "宮崎県",
          },
          {
            prefecture: "鹿児島県",
          },
          {
            prefecture: "沖縄県",
          },
        ],
      })
    );
  }),
  rest.get("/ping", (_, res, ctx) =>
    res(ctx.status(200), ctx.json({ status: "running" }))
  ),
];
