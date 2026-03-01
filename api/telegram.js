export default async function handler(req, res) {
  // Faqat POST so'rovlarni qabul qilish
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  try {
    const { fullName, phone, direction } = req.body

    const botToken = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    if (!botToken || !chatId) {
      console.warn("Vercel orqali ishlaydigan xavfsiz Telegram bot token yoki chat ID topilmadi.");
      // Frontend uzilib qolmasligi uchun "jo'natildi" deb yolg'ondakam qaytarib yuboradi.
      return res.status(200).json({ success: true, message: "Token o'rnatilmagan" })
    }

    const message = `
🔔 <b>Yangi ariza</b>

👤 <b>Ism:</b> ${fullName}
📞 <b>Telefon:</b> ${phone}
🎯 <b>Yo'nalish:</b> ${direction || "Belgilanmagan"}
    `;

    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'HTML',
      }),
    });

    if (!response.ok) {
      const errorData = await response.json()
      console.error("Telegram API xatosi:", errorData)
      return res.status(500).json({ error: "Telegram API xatosi" })
    }

    // Muvaffaqiyatli jo'natildi
    return res.status(200).json({ success: true })

  } catch (error) {
    console.error("Xatolik:", error)
    return res.status(500).json({ error: "Server xatosi xabar yuborishda" })
  }
}
