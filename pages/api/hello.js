// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import jasper from "../jasper_report";

export default function handler(req, res) {
  // res.json({ name: 'John Doe', method: res.method })
  var report = {
    report: 'hw',
  };
  var pdf = jasper.pdf(report);
  res.set({
    'Content-type': 'application/pdf',
    'Content-Length': pdf.length
  });
  res.send(pdf);
}
