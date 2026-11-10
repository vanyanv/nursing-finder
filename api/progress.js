import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL);
const clean = (s, n = 80) => String(s || "").replace(/[^\w.-]/g, "").slice(0, n);

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  const profile = clean(req.query.p) || "main";
  try {
    if (req.method === "GET") {
      const rows = await sql`SELECT school, item, done FROM progress WHERE profile = ${profile}`;
      const out = {};
      for (const r of rows) (out[r.school] ||= {})[r.item] = r.done;
      const st = await sql`SELECT school, status, to_char(updated_at, 'YYYY-MM-DD') AS at FROM app_status WHERE profile = ${profile}`;
      out.__status = {};
      for (const r of st) out.__status[r.school] = { value: r.status, at: r.at };
      return res.status(200).json(out);
    }
    if (req.method === "POST") {
      const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};
      if (body.status && typeof body.status === "object") {
        const entries = Object.entries(body.status).slice(0, 50);
        for (const [sch, v] of entries) {
          const value = clean(v && v.value, 20) || "none";
          await sql`INSERT INTO app_status (profile, school, status, updated_at)
                    VALUES (${profile}, ${clean(sch)}, ${value}, now())
                    ON CONFLICT (profile, school) DO UPDATE SET status = EXCLUDED.status,
                      updated_at = CASE WHEN app_status.status = EXCLUDED.status THEN app_status.updated_at ELSE now() END`;
        }
        return res.status(200).json({ ok: true, saved: entries.length });
      }
      const school = clean(body.school);
      const ticks = body.ticks && typeof body.ticks === "object" ? body.ticks : {};
      if (!school) return res.status(400).json({ error: "school required" });
      const entries = Object.entries(ticks).slice(0, 200);
      for (const [item, done] of entries) {
        await sql`INSERT INTO progress (profile, school, item, done, updated_at)
                  VALUES (${profile}, ${school}, ${clean(item)}, ${!!done}, now())
                  ON CONFLICT (profile, school, item) DO UPDATE SET done = EXCLUDED.done, updated_at = now()`;
      }
      return res.status(200).json({ ok: true, saved: entries.length });
    }
    res.setHeader("Allow", "GET, POST");
    return res.status(405).end();
  } catch (e) {
    return res.status(500).json({ error: "database error" });
  }
}
