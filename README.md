![whatsapp-custom-menu-header.png](readme%2Fwhatsapp-custom-menu-header.png)


# WhatsApp Custom Menu Type for Botpress

**Make your Botpress understand [WhatsApp Interactive List Messages](https://developers.facebook.com/docs/whatsapp/guides/interactive-messages/).** 

_⚠️ This is just the content type, but since we use a custom platform to communicate with the WhatsApp Cloud API this project doesn't take care of 'translating' the content into actual valid JSON to send to the WhatsApp API. You will have to write a custom channel or create your own parsing platform using the Converse API to do that._

___

## Installing

1. Open the modules dashboard and upload the `whatsapp-menu.tgz` using the Upload Module button.
2. Restart the server.

![restart-after-upload.png](readme%2Frestart-after-upload.png)

3. Unpack the module in the modules dashboard.
4. Activate the module in the modules dashboard.

![activated.png](readme%2Factivated.png)

## Activate the type on the bot

1. Open the bot you want to add the custom type to
2. Go to the code editor
3. Add the following line to the `bot.config.json` file under the ``content-types` key:

```json
{
  "whatsapp-menu-choice"
}
```

For example, it should be like this:

````json
"contentTypes": [
    "builtin_action-button",
    "builtin_audio",
    "builtin_card",
    "builtin_carousel",
    "dropdown",
    "builtin_file",
    "builtin_image",
    "builtin_location",
    "builtin_single-choice",
    "builtin_text",
    "builtin_video",
    "whatsapp-menu-choice"
]
````

4. Restart the server (again!). A red gear will appear on the bottom right of the screen. Click on it to restart.

![restart.png](readme%2Frestart.png)

The custom type is now available in the content editor.

## Creating a new menu

From the content editor, click on the `+` button and select `WhatsApp Menu Choice`. You will be prompted to enter the data for the menu:

![menu-creation.png](readme%2Fmenu-creation.png)

The message content is the text that will be displayed to the user when offering the menu. 
You have to write the section of each row, even if you are using the same section as the row above.

The button is the text displayed as button on the interactive message on WhatsApp.

![message-button.png](readme%2Fmessage-button.png)

## Connecting the menu with the choice skill

Once created, add a new choice skill node to your bot. When picking what content you want to display, select the 'All' category and pick the content you just created.

![pick-content.png](readme%2Fpick-content.png)

Tada! You now have a WhatsApp menu in your bot.

![final-menu.png](readme%2Ffinal-menu.png)

___

This project is not affiliated with WhatsApp or Facebook in any way and has been created with ❤️ by the **Maldita.es Foundation** and **Botalite**.

[**The Maldita.es Foundation**](https://maldita.es/) is a non-profit organization based in Spain focused on the control of disinformation and public discourse through fact-checking and data journalism techniques.

[**Botalite**](https://www.botalite.com/) is a tech solution that serves both citizens & fact-checkers: A natural language chatbot in WhatsApp, and adaptable social messaging apps, linked to a platform to tackle disinformation in private messaging channels in all formats: text, audio, image and video. It was [awarded with the 2021 European Press Prize](https://www.europeanpressprize.com/article/maldita-es-whatsapp-chatbot/) for Innovation.



![logos.png](readme%2Flogos.png)
