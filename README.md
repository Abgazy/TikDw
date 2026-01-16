<!DOCTYPE html>
<html lang="ar">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>TikTok Downloader</title>
<style>
body { font-family: Arial, sans-serif; text-align: center; padding: 50px; background: #f5f5f5; }
input { width: 80%; padding: 10px; margin: 10px 0; }
button { padding: 10px 20px; background: #1da1f2; color: white; border: none; cursor: pointer; }
button:hover { background: #0d8ddb; }
</style>
</head>
<body>

<h1>تحميل فيديوهات TikTok بدون علامة مائية</h1>
<input type="text" id="tiktokLink" placeholder="انسخ رابط الفيديو هنا">
<br>
<button onclick="downloadVideo()">تحميل</button>

<script>
function downloadVideo() {
    var link = document.getElementById("tiktokLink").value;
    if (!link) { alert("انسخ رابط الفيديو أولاً"); return; }
    
    // التعديل: استخدام API الجديد على Vercel
    var downloadUrl = "https://tiktokdl-hfwj5oltx-abogazys-projects-5aa7c8de.vercel.app/api/download?url=" + encodeURIComponent(link);
    window.open(downloadUrl, "_blank");
}
</script>

</body>
</html>
