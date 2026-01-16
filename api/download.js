import fetch from 'node-fetch';

export default async function handler(req, res) {
  const videoUrl = req.query.url;
  if (!videoUrl) {
    return res.status(400).json({ error: "ضع رابط فيديو TikTok" });
  }

  try {
    const downloadLink = `https://example.com/download?video=${encodeURIComponent(videoUrl)}`;
    res.status(200).json({ download: downloadLink });
  } catch (err) {
    res.status(500).json({ error: "فشل تحميل الفيديو" });
  }
}
