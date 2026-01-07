# magmax-blog-project

A headless CMS application built with **Django REST Framework** as the backend
and **Next.js (SSR)** as the frontend.
The backend exposes CMS content through APIs, and the frontend consumes and
renders it using server-side rendering.

---

## 🧱 Tech Stack

### Backend

* Django
* Django REST Framework
* SQLite (default)
* django-cors-headers

### Frontend

* Next.js (App Router)
* Tailwind CSS (optional)

---

## 📂 Project Structure

```
cms-project/
├── backend/      # Django REST CMS
├── frontend/     # Next.js frontend (SSR)
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/your-repo.git
cd cms-project
```

---

## 🔧 Backend Setup (Django)

### 2️⃣ Create Virtual Environment

```bash
cd backend
python -m venv venv
source venv/bin/activate    # Windows: venv\Scripts\activate
```

### 3️⃣ Install Dependencies

```bash
pip install -r requirements.txt
```

### 4️⃣ Environment Variables

```bash
cp .env.example .env
```

Update values if required.

### 5️⃣ Run Migrations

```bash
python manage.py migrate
```

### 6️⃣ Create Superuser

```bash
python manage.py createsuperuser
```

### 7️⃣ Start Backend Server

```bash
python manage.py runserver
```

Backend will run at:

```
http://127.0.0.1:8000
```

Admin panel:

```
http://127.0.0.1:8000/admin
```

---

## 🧠 Django CMS Configuration

1. Login to Django Admin
2. Create CMS pages with:

   * Title
   * Slug
   * Content
   * Published status
3. Only **published pages** are exposed via the API
4. CMS content is consumed by Next.js using SSR

---

## 🌐 Frontend Setup (Next.js)

### 8️⃣ Install Dependencies

```bash
cd ../frontend
npm install
```

### 9️⃣ Environment Variables

```bash
cp .env.example .env.local
```

Example:

```env
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000/api
```

### 🔟 Start Frontend

```bash
npm run dev
```

Frontend will run at:

```
http://localhost:3000
```

---

## 🔌 API Endpoints Documentation

### Get All CMS Pages

```
GET /api/pages/
```

Example Response:

```json
[
  {
            "id": 1,
            "title": "How Caching Improves Web Performance",
            "slug": "how-caching-improves-web-performance",
            "excerpt": "Caching reduces server load and speeds up page delivery by storing frequently accessed data.",
            "image": "http://127.0.0.1:8000/media/images/ww.png",
            "author": "admin",
            "category": {
                "id": 1,
                "name": "django",
                "slug": "django"
            },
            "published_at": "2026-01-06T15:09:06.034648Z",
            "created_at": "2026-01-06T15:09:06.034648Z"
        }
]
```

### Get CMS Page by Slug

```
GET /api/article/{slug}/
```

Example:

```
GET /api/article/about/
```

---

## 🚦 Error Handling & Loading States

* Global loading UI using `loading.js`
* Error boundaries using `error.js`
* API errors handled gracefully in SSR components

---

## 🔐 Environment Variables Notes

* `.env.example` is committed for reference
* `.env` and `.env.local` are gitignored
* API base URL is configurable via environment variables

---

## ✅ Features Checklist

* [x] Django REST Framework CMS
* [x] Next.js Server-Side Rendering (SSR)
* [x] Environment-based configuration
* [x] Clean frontend & backend separation
* [x] Proper error and loading states
* [x] GitHub-ready setup

---

## 👤 Author

**Mujeeb Rahman**
Full Stack Developer – Django & Next.js

