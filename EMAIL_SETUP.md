# Email Setup Instructions

This project uses a Vercel serverless function to send emails from the contact form. Follow these steps to configure email sending:

## 🎯 QUICK START - What You Need to Do:

1. **Get Gmail App Password** (see section below) - Takes 5 minutes
2. **Go to Vercel** → Your Project → Settings → Environment Variables
3. **Add these 7 variables** (copy the values from the table below)
4. **Redeploy** your project
5. **Test** the contact form

---

## 🔍 UNDERSTANDING THE VARIABLES (IMPORTANT!)

**Before setting up, understand this:**

- **SMTP_USER** = The Gmail account that **SENDS** the email (needs App Password)
  - This is YOUR Gmail account (`umarzeeshan709@gmail.com`)
  - This account must have 2-Step Verification enabled
  - This account needs an App Password generated
  
- **SMTP_FROM** = The "From" address shown in the email (usually same as SMTP_USER)
  - Usually: `umarzeeshan709@gmail.com`
  - This is what recipients see as the sender

- **RECIPIENT_EMAIL** = Where form submissions are **RECEIVED**
  - This is where YOU want to receive contact form submissions
  - Can be the same as SMTP_USER or different
  - Does NOT need App Password (it's just receiving emails)
  - Example: `umarzeeshan709@gmail.com` (your inbox)

**Simple Explanation:**
- **SMTP_USER** = Your Gmail that sends emails (needs setup)
- **RECIPIENT_EMAIL** = Your email inbox that receives form submissions (no setup needed)

**Visual Example:**
```
User fills form → Your website → SMTP_USER sends email → RECIPIENT_EMAIL receives it
                                 (umarzeeshan709)                    (your inbox)
                                 
                                 Needs App Password              Just receives emails
                                 (you set this up)                (no setup needed)
```

**In Your Case:**
- Both `SMTP_USER` and `RECIPIENT_EMAIL` are the same: `umarzeeshan709@gmail.com`
- This means: Your Gmail sends the email AND receives it (to your inbox)
- You only need to set up App Password ONCE for `umarzeeshan709@gmail.com`

---

## 📋 EXACT VALUES TO ENTER IN VERCEL:

When you're in Vercel Environment Variables, add these one by one:

| Variable Name | Value to Enter | What It Does |
|--------------|----------------|--------------|
| `SMTP_HOST` | `smtp.gmail.com` | Gmail's server address |
| `SMTP_PORT` | `587` | Port number for Gmail |
| `SMTP_SECURE` | `false` | Security setting |
| `SMTP_USER` | `umarzeeshan709@gmail.com` | **Your Gmail that sends emails** (needs App Password) |
| `SMTP_PASS` | `[Your App Password]` | **Password for SMTP_USER** (get from Google) |
| `SMTP_FROM` | `umarzeeshan709@gmail.com` | **"From" address** (usually same as SMTP_USER) |
| `RECIPIENT_EMAIL` | `umarzeeshan709@gmail.com` | **Where you receive form submissions** (can be any email) |

**Note:** 
- For `SMTP_PASS`, you need to get a Gmail App Password for `umarzeeshan709@gmail.com` (instructions below)
- `RECIPIENT_EMAIL` can be different from `SMTP_USER` if you want to receive emails at a different address

## Environment Variables Setup

You need to set up the following environment variables in your Vercel project:

### For Vercel Deployment:

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variables:

**Copy and paste these EXACT values in Vercel:**

```
SMTP_HOST = smtp.gmail.com
SMTP_PORT = 587
SMTP_SECURE = false
SMTP_USER = umarzeeshan709@gmail.com
SMTP_PASS = [YOUR 16-CHARACTER APP PASSWORD FROM GOOGLE - SEE BELOW]
SMTP_FROM = umarzeeshan709@gmail.com
RECIPIENT_EMAIL = umarzeeshan709@gmail.com
```

**IMPORTANT:** 
- Replace `[YOUR 16-CHARACTER APP PASSWORD FROM GOOGLE - SEE BELOW]` with your actual Gmail App Password (see "How to Get Gmail App Password" section below)
- The App Password looks like: `abcd efgh ijkl mnop` (16 characters, no spaces when you copy it)
- DO NOT use your regular Gmail password!

### For Local Development:

Create a `.env.local` file in the root directory with the same variables.

## How to Get Gmail App Password (STEP BY STEP)

**You MUST do this first before setting up Vercel!**

### Step 1: Enable 2-Step Verification
1. Go to: https://myaccount.google.com/security
2. Under "Signing in to Google", click **2-Step Verification**
3. If it's not enabled, follow the steps to enable it
4. You'll need your phone to verify

### Step 2: Generate App Password
1. Go back to: https://myaccount.google.com/security
2. Under "Signing in to Google", click **App passwords**
   - (If you don't see this, make sure 2-Step Verification is enabled first)
3. Select app: Choose **Mail**
4. Select device: Choose **Other (Custom name)**
5. Type: **Shopulence** (or any name you want)
6. Click **Generate**
7. **COPY THE 16-CHARACTER PASSWORD** - it will look like: `abcd efgh ijkl mnop`
   - ⚠️ **You can only see this once!** Copy it immediately!
   - This is what you'll paste into `SMTP_PASS` in Vercel

### Step 3: Use This Password in Vercel
- In Vercel, for `SMTP_PASS`, paste the 16-character password (remove spaces if any)
- Example: If Google shows `abcd efgh ijkl mnop`, paste it as `abcdefghijklmnop` or keep the spaces - both work

## Other Email Providers

### Outlook/Hotmail:
```
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
```

### Yahoo:
```
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_SECURE=false
```

### Custom SMTP:
Use your email provider's SMTP settings. Common ports:
- 587 (TLS/STARTTLS)
- 465 (SSL)
- 25 (usually blocked by ISPs)

## Testing

After setting up the environment variables:

1. Deploy to Vercel (or restart your local dev server)
2. Fill out the contact form on your website
3. Check your email inbox (the address in `RECIPIENT_EMAIL`)

## Troubleshooting

- **"Authentication failed"**: Check your SMTP credentials, especially if using Gmail, make sure you're using an App Password, not your regular password
- **"Connection timeout"**: Verify SMTP_HOST and SMTP_PORT are correct for your provider
- **"Email not received"**: Check spam folder, verify RECIPIENT_EMAIL is correct

## Security Notes

- Never commit `.env.local` or actual credentials to git
- Use environment variables in Vercel dashboard for production
- App passwords are safer than regular passwords for SMTP

