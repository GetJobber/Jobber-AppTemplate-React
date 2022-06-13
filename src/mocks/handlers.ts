import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:4000/clients", (req, res, ctx) => {
    return res(
      ctx.json({
        clients: [
          { id: "Z2lkOi8vSm9iYmVyL0NsaWVudC80Njg5NTI0OQ==", name: "Bulma" },
          { id: "Z2lkOi8vSm9iYmVyL0NsaWVudC81MzcxMTA0Mw==", name: "Piccolo" },
          {
            id: "Z2lkOi8vSm9iYmVyL0NsaWVudC80NjE5MDA1OA==",
            name: "Android 18",
          },
        ],
      }),
    );
  }),
  rest.get("http://localhost:4000/logout", (req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.post("http://localhost:4000/request_access_token", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ accountName: "Capsule Corp." }));
  }),
];
