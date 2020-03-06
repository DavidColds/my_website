import os
import smtplib
import imghdr
from email.message import EmailMessage

EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_ADDRESS = os.environ.get('EMAIL_USER')
EMAIL_PASS = os.environ.get('EMAIL_PASS')
contacts = ['drughidavid6@gmail.com', 'drughidavid6@gmail.com']

msg = EmailMessage()
msg['Subject'] = ''
msg['From'] = EMAIL_ADDRESS
msg['To'] = 'drughidavid6@gmail.com'

msg.set_content('This is a plain text email')

msg.add_alternative("""\
<!DOCTYPE html>
<html>
    <body>
        <h1 style="color:SlateGray;">This is an HTML Email!</h1>
    </body>
</html>
""", subtype='html')


with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
    smtp.login(EMAIL_ADDRESS, EMAIL_PASS)
    smtp.send_message(msg)