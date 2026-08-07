from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import Application, CommandHandler, ContextTypes

TOKEN = "8626987323:AAFuI3QxuEmwj5rzVB6FHsvfIojJ11aEnjs"

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    bouton = [
        [
            InlineKeyboardButton(
                "🌐 Ouvrir le site",
                url="https://ton-site-vercel.vercel.app"
            )
        ]
    ]

    clavier = InlineKeyboardMarkup(bouton)

    await update.message.reply_text(
        "Bienvenue sur ma boutique 👋",
        reply_markup=clavier
    )


app = Application.builder().token(TOKEN).build()

app.add_handler(CommandHandler("start", start))

print("✅ Bot lancé")

app.run_polling()