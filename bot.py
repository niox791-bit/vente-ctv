
import os

from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import Application, CommandHandler, ContextTypes


TOKEN = os.getenv("TELEGRAM_BOT_TOKEN")

# Mets ici le @username de ton canal
CHANNEL_ID = "@TON_CANAL"


if not TOKEN:
    raise RuntimeError("TELEGRAM_BOT_TOKEN est absente.")


def creer_clavier():
    return InlineKeyboardMarkup([
        [
            InlineKeyboardButton(
                "🌐 Ouvrir le site",
                url="https://vente-ctv.vercel.app/"
            )
        ]
    ])


async def start(
    update: Update,
    context: ContextTypes.DEFAULT_TYPE
):
    # Réponse uniquement à la personne qui fait /start
    if update.message:
        await update.message.reply_text(
            "🛍️ Bienvenue sur ma boutique 👋",
            reply_markup=creer_clavier()
        )


async def envoyer_message_canal(app):
    # Ce message est envoyé UNE SEULE FOIS
    await app.bot.send_message(
        chat_id=CHANNEL_ID,
        text=(
            "🛍️ Bienvenue sur ma boutique 👋\n\n"
            "Découvrez tous nos produits directement "
            "sur notre site."
        ),
        reply_markup=creer_clavier()
    )

    print("✅ Message envoyé dans le canal")


async def post_init(app):
    await envoyer_message_canal(app)


def main():
    app = (
        Application.builder()
        .token(TOKEN)
        .post_init(post_init)
        .build()
    )

    app.add_handler(
        CommandHandler("start", start)
    )

    print("✅ Bot Telegram lancé")

    app.run_polling()


if __name__ == "__main__":
    main()
