# Ksr Diary Foods — no Google login

This replacement removes Google OAuth and lets customers order using their name, 10-digit phone number and delivery address. Order history can be looked up by the same phone number. MongoDB stores products, stock and orders. The admin inventory page is protected by `ADMIN_PASSWORD`.

## Vercel setup
1. Import this folder/repository into Vercel.
2. In Vercel → Project → Settings → Environment Variables, set `MONGODB_URI` to your MongoDB Atlas connection string and `MONGODB_DB` to `ksr_diary_foods`.
3. Add `ADMIN_PASSWORD` as a strong private password.
4. Optional ImageBB direct image URLs: `NEXT_PUBLIC_BRAND_LOGO_URL`, `NEXT_PUBLIC_BUFFALO_MILK_IMAGE`, `NEXT_PUBLIC_COW_MILK_IMAGE`, `NEXT_PUBLIC_PREMIUM_BUFFALO_MILK_IMAGE`. Use the direct image URL, normally beginning `https://i.ibb.co/`, not the ImageBB album/page URL.
5. Redeploy after setting environment variables.

## Image URLs
The product image URL can also be pasted into each product's **Image URL** field in `/admin` and saved. The store uses bundled SVG fallback images if an image URL is empty or fails. The provided ImageBB URL values were not present in the source files available when preparing this ZIP, so paste them into the environment variables or admin fields to display your exact uploaded images.

## Admin
Open `/admin`, enter the value of `ADMIN_PASSWORD`, edit product image URLs, prices or stock, and press **Save changes**. Do not publish the password or commit it to GitHub. Set it only in Vercel Environment Variables.

## Run locally
```bash
npm install
npm run dev
```

This project does not use Google OAuth and does not process online payments. Orders are requests saved in MongoDB; arrange delivery/payment separately.
