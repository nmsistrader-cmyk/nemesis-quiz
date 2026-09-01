# NEMESIS TRADER — เกมทดสอบความเข้าใจ

โปรเจกต์ Next.js พร้อม deploy ขึ้น Vercel เชื่อมกับ Firebase (Google Sign-In + Firestore)

## ก่อนใช้งาน

1. คัดลอก `.env.local.example` เป็น `.env.local`
2. นำค่าจาก Firebase Console (Project settings > General > Your apps) มาใส่ในไฟล์นั้น
3. รันทดสอบในเครื่อง: `npm install` แล้ว `npm run dev` เปิด http://localhost:3000

## Firestore Security Rules (ตั้งใน Firebase Console > Firestore > Rules)

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /profiles/{uid} {
      allow read, write: if request.auth != null && request.auth.uid == uid;
    }
  }
}
```

กฎนี้ทำให้แต่ละบัญชี Google อ่าน-เขียนได้เฉพาะข้อมูลของตัวเองเท่านั้น

## Deploy

Push โค้ดนี้ขึ้น GitHub repository แล้ว Import เข้า Vercel
ตั้งค่า Environment Variables ในหน้า Vercel Project Settings ให้ตรงกับ `.env.local`
(ชื่อตัวแปรต้องขึ้นต้นด้วย `NEXT_PUBLIC_` ทุกตัว)

อย่าลืมเพิ่มโดเมนที่ deploy แล้ว (เช่น `your-project.vercel.app` และ subdomain จริง) ใน
Firebase Console > Authentication > Settings > Authorized domains มิฉะนั้น Google Sign-In จะ error
