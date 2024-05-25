import type { NextApiRequest, NextApiResponse } from "next";
// import { parseForm, FormidableError } from "../../lib/parse-form";

type Data = {
  name: string;
};

export default function handler (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'hello file uploader' });
}


// const handler = async (
//   req: NextApiRequest,
//   res: NextApiResponse<{
//     data: {
//       url: string | string[];
//     } | null;
//     error: string | null;
//   }>
// ) => {
//   if (req.method !== "POST") {
//     res.setHeader("Allow", "POST");
//     res.status(405).json({
//       data: null,
//       error: "Method Not Allowed",
//     });
//     return;
//   }
//   // Just after the "Method Not Allowed" code
//   try {
//     const { fields, files } = await parseForm(req);

//     const file = files.media;
//     console.log(file);
//     let url = Array.isArray(file) ? file.map((f) => f.filepath) : file.filepath;

//     res.status(200).json({
//       data: {
//         url,
//       },
//       error: null,
//     });
//   } catch (e) {
//     if (e instanceof FormidableError) {
//       res.status(e.httpCode || 400).json({ data: null, error: e.message });
//     } else {
//       console.error(e);
//       res.status(500).json({ data: null, error: "Internal Server Error" });
//     }
//   }
// };

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// export default handler;