import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: boolean;
  status_code: number;
  data: {
    id: string;
    nama: string;
    harga: string;
    ukuran: string;
    warna: string;
  }[];
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const data = [
    {
      id: "1",
      nama: "Kaos Polos",
      harga: "Rp. 50.000",
      ukuran: "M",
      warna: "Hitam",
    },
    {
      id: "2",
      nama: "Kemeja Flanel",
      harga: "Rp. 150.000",
      ukuran: "L",
      warna: "Merah",
    },
  ];

  res.status(200).json({
    status: true,
    status_code: 200,
    data: data,
  });
}
